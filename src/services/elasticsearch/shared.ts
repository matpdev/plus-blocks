import axios from 'axios';
export interface QueryStringParsed {
  [key: string]: string[] | string | undefined
}
export const esClient = axios.create({
  baseURL: process.env.ELASTICSEARCH_HOST,
  headers: {
    'Content-Type': 'application/json'
  },
  auth: {
    username: process.env.ELASTICSEARCH_USER as string,
    password: process.env.ELASTICSEARCH_PASS as string
  },
  responseType: 'json'
})
export async function esSearch(index: string, query: any) {
  try {
    const response = await esClient.get(`${index}/_search`, {data: query})
    return response?.data
  } catch (error: any) {
    console.log(error)
    console.log(error?.response?.data?.error)
  }
}
