import { QueryStringParsed } from './shared';
export function esHitsMap(data: any, mapper: Function): any[] {
  return data?.hits?.hits?.map(mapper) || []
}
export function esTotalHits(data: any): number {
  return data?.hits.total.value || 0
}
export function countTotalPages(total: number, size: number): number {
  return Math.ceil(total / size)
}
export function getQueryStringPage(queryStrings: QueryStringParsed) {
  return Array.isArray(queryStrings?.page)
    ? Number.parseInt(queryStrings?.page[0])
    : queryStrings?.page
    ? Number.parseInt(queryStrings?.page)
    : 1
}
