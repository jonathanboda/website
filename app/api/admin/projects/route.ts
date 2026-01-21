import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { verifyToken, extractTokenFromHeader } from '@/app/lib/auth';

const dataFilePath = path.join(process.cwd(), 'app/data/projects.json');

/**
 * Validate admin authentication using JWT token
 */
function checkAdminAuth(request: NextRequest): boolean {
  const authHeader = request.headers.get('authorization');
  const token = extractTokenFromHeader(authHeader);

  if (!token) {
    return false;
  }

  const payload = verifyToken(token);
  return payload !== null && payload.role === 'admin';
}

function readProjects() {
  try {
    const data = fs.readFileSync(dataFilePath, 'utf-8');
    return JSON.parse(data);
  } catch {
    return { projects: [] };
  }
}

function writeProjects(data: { projects: unknown[] }) {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
}

// GET - Get all projects (public endpoint)
export async function GET() {
  const data = readProjects();
  return NextResponse.json(data);
}

// POST - Create new project (protected endpoint)
export async function POST(request: NextRequest) {
  // Validate JWT token
  if (!checkAdminAuth(request)) {
    return NextResponse.json(
      { error: 'Unauthorized - valid JWT token required' },
      { status: 401 }
    );
  }

  try {
    const project = await request.json();
    const data = readProjects();

    // Generate new ID
    project.id = Date.now().toString();

    data.projects.push(project);
    writeProjects(data);

    return NextResponse.json({ success: true, project }, { status: 201 });
  } catch (error) {
    console.error('Failed to create project:', error);
    return NextResponse.json({ error: 'Failed to create project' }, { status: 500 });
  }
}
