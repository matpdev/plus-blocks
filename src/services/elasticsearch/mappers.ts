import { getPostUri } from '../../helpers/link';
export function esMapPostCard(hit: any, defaultHorizontal = true) {
  const link = getPostUri(hit._source.slug)
  return {
    id: hit._source.id,
    title: hit._source.title,
    link,
    image: hit._source.thumbnail,
    hat: hit._source?.hat || '',
    createdAt: hit._source.createdAt
  }
}
