import { toBase64 } from './utils';
export function shimmer(w: number, h: number) {
  return `
    <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="g">
          <stop stop-color="rgba(225, 29, 72, .1)" offset="0%" />
          <stop stop-color="rgba(225, 29, 72, .5)" offset="15%" />
          <stop stop-color="rgba(225, 29, 72, 1)" offset="25%" />
          <stop stop-color="#f97316" offset="50%" />
          <stop stop-color="rgba(225, 29, 72, 1)" offset="75%" />
          <stop stop-color="rgba(225, 29, 72, .5)" offset="85%" />
          <stop stop-color="rgba(225, 29, 72, .1)" offset="100%" />
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="#7e22ce" />
      <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
      <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1.5s" repeatCount="indefinite"  />
    </svg>`;
}
export function imageBlurDataURL(w: number, h: number) {
  return `data:image/svg+xml;base64,${toBase64(shimmer(w, h))}`;
}
