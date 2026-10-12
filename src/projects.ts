import posthog from 'posthog-js';

export type Project = { id: string; name: string; archived: boolean };

export function createProject(name: string): Project {
  const project = { id: crypto.randomUUID(), name, archived: false };
  return project;
}

export function renameProject(project: Project, name: string): Project {
  return { ...project, name };
}
