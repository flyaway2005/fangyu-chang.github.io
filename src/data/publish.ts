/**
 * Site publish control panel — edit this file to control what appears on the live site.
 *
 * live:         Show this project on /projects and generate its detail page
 * featured:     Show on the About page featured section (max 3 recommended)
 * showReport:   Embed the PDF from reportEmbedId
 * showSlides:   Embed the deck from slidesEmbedId
 * showExtraLinks: Show extraLinks (e.g. Notion comparison pages)
 */
export type ProjectPublishSettings = {
  live: boolean;
  featured?: boolean;
  showReport?: boolean;
  showSlides?: boolean;
  showExtraLinks?: boolean;
};

export const publishSettings: Record<string, ProjectPublishSettings> = {
  // Live projects
  'h-ai-ring': {
    live: true,
    featured: true,
    showReport: false,
    showSlides: false,
    showExtraLinks: false,
  },
  'rag-testing-framework': {
    live: true,
    featured: false,
    showReport: true,
    showSlides: false,
    showExtraLinks: false,
  },
  'resume-classification': {
    live: true,
    featured: false,
    showReport: false,
    showSlides: false,
    showExtraLinks: true,
  },
  'inventory-optimization': {
    live: true,
    featured: false,
    showReport: true,
    showSlides: false,
    showExtraLinks: false,
  },

  // Add more slugs here when moving projects from projects.draft.ts into projects.ts
};
