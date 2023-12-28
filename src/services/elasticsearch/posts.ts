import { esSearch } from './shared';
import { QueryStringParsed } from './shared';
import { esMapPostCard } from './mappers';
import {
  countTotalPages,
  esHitsMap,
  esTotalHits,
  getQueryStringPage
} from './helpers'
const ES_INDEX = process.env.ELASTICSEARCH_NEWS_INDEX || 'post'
export async function esQueryLastPosts(size = 3, from = 0) {
  const query = {
    from,
    size,
    sort: [{ createdAt: { order: 'desc' } }],
    query: {
      match_all: {},
      // filter: [
      //   { range: { createdAt: { gte: '2021-08-01' }}}
      // ]
    }
  }
  return await esSearch(ES_INDEX, query)
}
export async function esGetLastPosts(limit = 3) {
  const result = await esQueryLastPosts(limit)
  return esHitsMap(result, esMapPostCard)
}
export async function esGetLastPostsPaginate(
  queryStrings: QueryStringParsed,
  size = 10
) {
  const page = getQueryStringPage(queryStrings)
  const from = size * page - size
  const result = await esQueryLastPosts(size, from)
  const total = esTotalHits(result)
  const posts = esHitsMap(result, esMapPostCard)
  // const featured = []
  // if (news.length) featured.push({ ...news.shift(), highlight: true })
  // if (news.length >= 2) featured.push({ ...news.shift() })
  // if (news.length >= 3) featured.push({ ...news.shift(), horizontal: true })
  return {
    posts,
    // featured,
    pagination: {
      page,
      size,
      total,
      total_pages: countTotalPages(total, size)
    }
  }
}
export async function esQueryCategoryPosts(
  categorySlug: string,
  size = 3,
  from = 0
) {
  const query = {
    from,
    size,
    sort: [{ createdAt: { order: 'desc' } }],
    query: {
      nested: {
        path: 'categories',
        query: {
          bool: {
            must: [{ match: { 'categories.slug.keyword': categorySlug } }]
          }
        }
      }
    }
  }
  return await esSearch(ES_INDEX, query)
}
export async function esGetCategoryPosts(categorySlug: string, limit = 3) {
  const result = await esQueryCategoryPosts(categorySlug, limit)
  return esHitsMap(result, (hit: any) => esMapPostCard(hit, false))
}
export async function esGetCategoryPostsPaginate(
  categorySlug: string,
  queryStrings: QueryStringParsed,
  size = 10
) {
  const page = getQueryStringPage(queryStrings)
  const from = size * page - size
  const result = await esQueryCategoryPosts(categorySlug, size, from)
  const total = esTotalHits(result)
  const news = esHitsMap(result, esMapPostCard)
  return {
    news,
    pagination: {
      page,
      size,
      total,
      total_pages: countTotalPages(total, size)
    }
  }
}
