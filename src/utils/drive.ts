export function driveFileIdFromUrl(url: string): string | undefined {
  const match = url.match(/\/d\/([^/]+)/);
  return match?.[1];
}

/** Direct image URL for public Google Drive files (works reliably in <img> embeds). */
export function driveImageUrl(url: string, width = 2400): string | undefined {
  const id = driveFileIdFromUrl(url);
  if (!id) return undefined;
  return `https://lh3.googleusercontent.com/d/${id}=w${width}`;
}
