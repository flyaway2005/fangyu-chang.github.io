/**
 * Site publish control panel — edit this file to control what appears on the live site.
 *
 * live:         Show this project on /projects and generate its detail page
 * featured:     Show on the About page featured section (max 3 recommended)
 * showReport:   Embed the PDF from reportEmbedId
 * showSlides:   Embed the PDF slides from slidesEmbedId
 * showPoster:   Embed the poster image from posterEmbedId
 * showExtraLinks: Show extraLinks (e.g. Notion comparison pages)
 */
export type ProjectPublishSettings = {
  live: boolean;
  featured?: boolean;
  showReport?: boolean;
  showSlides?: boolean;
  showPoster?: boolean;
  showExtraLinks?: boolean;
};

export const publishSettings: Record<string, ProjectPublishSettings> = {
  // Live projects
  'h-ai-ring': {
    live: true,
    featured: true,
    showReport: false,
    showExtraLinks: false,
  },
  'rag-testing-framework': {
    live: true,
    featured: false,
    showReport: true,
    showExtraLinks: false,
  },
  'resume-classification': {
    live: true,
    featured: true,
    showReport: true,
    showExtraLinks: true,
  },
  'inventory-optimization': {
    live: true,
    featured: false,
    showReport: true,
    showExtraLinks: false,
  },
  'kg-rag-legal': {
    live: true,
    featured: true,
    showReport: true,
    showExtraLinks: false,
  },
  'salary-benchmarking': {
    live: true,
    featured: false,
    showReport: true,
    showExtraLinks: false,
  },
  'uganda-finscope': {
    live: true,
    featured: true,
    showReport: true,
    showPoster: true,
    showExtraLinks: false,
  },
  'reddit-sna': {
    live: true,
    featured: false,
    showReport: true,
    showExtraLinks: false,
  },
  'singapore-labour-market': {
    live: true,
    featured: false,
    showSlides: true,
    showReport: true,
    showExtraLinks: false,
  },
  'employee-insights': {
    live: true,
    featured: false,
    showReport: true,
    showExtraLinks: false,
  },
  'hotel-reviews': {
    live: true,
    featured: false,
    showReport: true,
    showExtraLinks: false,
  },

  // Add more slugs here when moving projects from projects.draft.ts into projects.ts
};
