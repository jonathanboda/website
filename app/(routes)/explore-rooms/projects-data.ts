export interface Project {
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

export const categories = ['All', 'Kitchen', 'Living Space', 'Bedroom', 'Dining Room', 'Kids Room'];

// This function fetches projects from the API
export async function getProjects(): Promise<Project[]> {
  try {
    const res = await fetch('/api/admin/projects', { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      return data.projects;
    }
    return [];
  } catch {
    return [];
  }
}
