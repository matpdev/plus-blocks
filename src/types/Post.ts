// import { BreadcrumbsItem } from "../components/common/Breadcrumbs";
export interface PostMetas {
  hat?: string
  readtime?: number
  credits?: string
}
export interface PostSEO {
  title: string
  description?: string
  canonical?: string
  site_name: string
}
export interface PostNews {
  className?: string
  id?: number,
  title: string
  slug: string
  link: string
  hat?: string
  readtime?: number
  image?: string
  excerpt?: string
  author?: PostAuthor
  createdAt?: string
  updatedAt?: string
}
export interface News extends Omit<PostNews, 'className' | 'link'> {}
export interface PostTerm {
  id: number
  slug: string
  name: string
}
export interface PostAuthor {
  id: number
  name: string
  image?: string
}
export default interface Post {
  id: number
  title: string
  slug: string
  thumbnail?: string | null
  url?: string | null
  categories?: PostTerm[]
  tags?: PostTerm[]
  metas?: PostMetas | null
  news?: PostNews[] | null
  seo?: PostSEO
  author?: PostAuthor | null
  // breadcrumbs?: BreadcrumbsItem[]
  body: string
  excerpt?: string
  createdAt: string
  updatedAt: string
}
export interface IPagination {
  page: number
  size: number
  total: number
  total_pages: number
}
