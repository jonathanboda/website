import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'app/data/projects.json');

interface Project {
  id: string;
  title: string;
  category: string;
  style: string;
  location: string;
  year: string;
  sqft: string;
  duration: string;
  featured?: boolean;
  images: string[];
  video?: string;
  description: string;
}

function readProjects(): { projects: Project[] } {
  try {
    const data = fs.readFileSync(dataFilePath, 'utf-8');
    return JSON.parse(data);
  } catch {
    return { projects: [] };
  }
}

function writeProjects(data: { projects: Project[] }) {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
}

// GET - Get single project
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const data = readProjects();
  const project = data.projects.find(p => p.id === id);

  if (!project) {
    return NextResponse.json({ error: 'Project not found' }, { status: 404 });
  }

  return NextResponse.json({ project });
}

// PUT - Update project
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const updatedProject = await request.json();
    const data = readProjects();

    const index = data.projects.findIndex(p => p.id === id);
    if (index === -1) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }

    data.projects[index] = { ...data.projects[index], ...updatedProject };
    writeProjects(data);

    return NextResponse.json({ success: true, project: data.projects[index] });
  } catch {
    return NextResponse.json({ error: 'Failed to update project' }, { status: 500 });
  }
}

// PATCH - Partial update (for feature toggle)
export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const updates = await request.json();
    const data = readProjects();

    const index = data.projects.findIndex(p => p.id === id);
    if (index === -1) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }

    data.projects[index] = { ...data.projects[index], ...updates };
    writeProjects(data);

    return NextResponse.json({ success: true, project: data.projects[index] });
  } catch {
    return NextResponse.json({ error: 'Failed to update project' }, { status: 500 });
  }
}

// DELETE - Delete project
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const data = readProjects();

    const index = data.projects.findIndex(p => p.id === id);
    if (index === -1) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }

    data.projects.splice(index, 1);
    writeProjects(data);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Failed to delete project' }, { status: 500 });
  }
}
