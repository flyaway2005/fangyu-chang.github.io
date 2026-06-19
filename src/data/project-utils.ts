import type { Project } from '../types/project';
import { projects } from './projects';
import { publishSettings, type ProjectPublishSettings } from './publish';

export function getPublishSettings(slug: string): ProjectPublishSettings {
  return publishSettings[slug] ?? { live: false };
}

export function getPublishedProjects(): Project[] {
  return projects.filter((project) => publishSettings[project.slug]?.live === true);
}

export function getProjectBySlug(slug: string): Project | undefined {
  const project = projects.find((p) => p.slug === slug);
  if (!project || publishSettings[slug]?.live !== true) return undefined;
  return project;
}

export function getProjectsBySkill(skill: string): Project[] {
  return getPublishedProjects().filter((project) => project.skills.includes(skill));
}

export function isFeaturedOnAbout(project: Project): boolean {
  const settings = getPublishSettings(project.slug);
  return settings.featured ?? project.featured ?? false;
}
