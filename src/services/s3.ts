import axios from 'axios';
import Post, { PostNews } from '../types/Post';
import { logger } from '../helpers/utils';
export type IS3ClientEndpoint = 'hermes' | 'confraria'
export const s3Client = axios.create({
  headers: {
    'Content-Type': 'application/json'
  },
  responseType: 'json'
})
export default s3Client
export async function s3GetFetch<Data = any>(
  key: string,
  bucket: IS3ClientEndpoint = 'confraria'
): Promise<Data | undefined> {
  try {
    const endpoints = {
      // 'hermes':     `https://${process.env.POSTS_S3_BUCKET}.s3.amazonaws.com/json/confraria/`,
      hermes: `${process.env.NEXT_PUBLIC_FRONTEND_BASEURL}/json/confraria/`,
      confraria: `${process.env.NEXT_PUBLIC_FRONTEND_BASEURL}/json/`
    }
    const endpoint = endpoints[bucket]
    s3Client.defaults.baseURL = endpoint
    logger('S3 Fetching', `${endpoint}${key}`)
    const response = await s3Client.get(key)
    return response.data
  } catch (err) {
    return undefined
  }
}
export async function s3GetPost(postSlug: string) {
  return await s3GetFetch<Post>(`post/${postSlug}.json`, 'hermes')
}
export async function s3GetPosts() {
  return await s3GetFetch<PostNews[]>(`posts.json`)
}
