export function getBase(): string {
  return `${process.env.NEXT_PUBLIC_FRONTEND_BASEURL}`;
}
export function getPostUri(slug: string): string {
  return `/noticias/${slug}`;
}
export function getPostLink(slug: string): string {
  const base = getBase();
  const uri = getPostUri(slug);
  return `${base}${uri}`;
}
