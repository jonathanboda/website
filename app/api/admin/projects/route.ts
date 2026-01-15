import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'app/data/projects.json');

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

// GET - Get all projects
export async function GET() {
  const data = readProjects();
  return NextResponse.json(data);
}

// POST - Create new project
export async function POST(request: Request) {
  try {
    const project = await request.json();
    const data = readProjects();

    // Generate new ID
    project.id = Date.now().toString();

    data.projects.push(project);
    writeProjects(data);

    return NextResponse.json({ success: true, project }, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Failed to create project' }, { status: 500 });
  }
}
