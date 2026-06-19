export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL;
  if (!path || path === '/') return base;
  return `${base}${path.replace(/^\//, '')}`;
}

export function siteUrl(path = ''): string {
  const origin = import.meta.env.SITE.replace(/\/$/, '');
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (!path || path === '/') return `${origin}${base}/`;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${origin}${base}${cleanPath}`;
}
