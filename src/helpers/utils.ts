import { DEFAULT_FOCAL_POINT } from './consts';

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
export function slugify(str: string, additionalRemove: string | RegExp | undefined = undefined): string {
  return str
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(additionalRemove, '');
}
export function removeDiacritics(str: string): string {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}
export function stripTags(content: string): string {
  return content
    .replace(/\n/g, ' ')
    .replace(/<br\s*\/>/gi, '\n')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s\s+/g, ' ')
    .trim();
}
export function logger(namespace: string, ...args: any[]) {
  args.map((arg) => JSON.stringify(arg, null, 2));
  console.log(`[${namespace}]`, ...args);
}
export function getDateTime(dateTime: string) {
  const z =
      /^(((19|20)\d\d-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01]))(\s+(0?[0-9]|1[0-9]|2[0-4]):(0?([0-9]|[1-5][0-9]))(:0?([0-9]|[1-5][0-9]))?)?)$|^(((19|20)\d\d-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])\s+?)?((0?[0-9]|1[0-9]|2[0-4]):(0?([0-9]|[1-5][0-9]))(:0?([0-9]|[1-5][0-9]))?))$/,
    k = /^((\d+)\-(\d+)\-(\d+))?(\s+)?((\d+):(\d+)(:(\d+))?)?$/.exec(dateTime),
    j = new Date();
  return !!z
    ? new Date(
        Date.UTC(
          !!k[1] ? parseInt(k[2]) : j.getFullYear(),
          !!k[1] ? parseInt(k[3]) - 1 : j.getMonth(),
          !!k[1] ? parseInt(k[4]) : j.getDate(),
          !!k[6] ? parseInt(k[7]) : j.getHours(),
          !!k[6] ? parseInt(k[8]) : j.getMinutes(),
          !!k[6] && !!k[9] ? parseInt(k[10]) : j.getSeconds(),
        ),
      )
    : j;
}
export function toDateTimeString(datetime: Date, format: string) {
  const p = (s: string, n: number) => Array(n - s.length + 1).join('0') + s;
  return format.replace(/\%(\w)/g, (m, x) =>
    ['d', 'm', 'M', 'y', 'Y', 'w', 'W', 'h', 'H', 'i', 's', 'l'].includes(x)
      ? x === 'd'
        ? p(datetime.getDate().toString(), 2)
        : x === 'm'
        ? p((datetime.getMonth() + 1).toString(), 2)
        : x === 'M'
        ? [
            'janeiro',
            'fevereiro',
            'março',
            'abril',
            'maio',
            'junho',
            'julho',
            'agosto',
            'setembro',
            'outubro',
            'novembro',
            'dezembro',
          ][datetime.getMonth()]
        : x === 'y'
        ? p(datetime.getFullYear().toString().substr(-2), 2)
        : x === 'Y'
        ? p(datetime.getFullYear().toString(), 4)
        : x === 'w'
        ? p((datetime.getDay() + 1).toString(), 2)
        : x === 'W'
        ? ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'][
            datetime.getDay()
          ]
        : x === 'h'
        ? p((datetime.getHours() % 12).toString(), 2)
        : x === 'H'
        ? p(datetime.getHours().toString(), 2)
        : x === 'l'
        ? datetime.getHours() > 11
          ? 'pm'
          : 'am'
        : x === 'i'
        ? p(datetime.getMinutes().toString(), 2)
        : x === 's'
        ? p(datetime.getSeconds().toString(), 2)
        : x
      : `%${x}`,
  );
}
export function toBase64(str: string) {
  return Buffer.from(str).toString('base64');
}

export function mediaPosition({ x, y } = DEFAULT_FOCAL_POINT) {
  return `${Math.round(x * 100)}% ${Math.round(y * 100)}%`;
}

export function imageFillStyles(url: string, focalPoint: { x: number; y: number }) {
  return url
    ? {
        backgroundImage: `url(${url})`,
        backgroundPosition: focalPoint
          ? `${Math.round(focalPoint.x * 100)}% ${Math.round(focalPoint.y * 100)}%`
          : `50% 50%`,
      }
    : {};
}
