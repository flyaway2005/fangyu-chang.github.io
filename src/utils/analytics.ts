type Gtag = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: Gtag;
  }
}

export function trackEvent(eventName: string, params: Record<string, string>): void {
  if (typeof window.gtag !== 'function') return;
  window.gtag('event', eventName, params);
}

export function trackSkillClick(skillName: string, action: 'select' | 'deselect'): void {
  trackEvent('skill_click', {
    skill_name: skillName,
    skill_action: action,
  });
}

export function trackProjectClick(projectSlug: string, projectTitle: string, linkType: string): void {
  trackEvent('project_click', {
    project_slug: projectSlug,
    project_title: projectTitle,
    link_type: linkType,
  });
}

export function trackProjectView(projectSlug: string, projectTitle: string): void {
  trackEvent('project_view', {
    project_slug: projectSlug,
    project_title: projectTitle,
  });
}
