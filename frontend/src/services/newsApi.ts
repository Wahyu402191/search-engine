import { MAX_API_PAGES, PAGE_SIZE } from '../config/news'
import type { ApiNewsItem, NewsItem } from '../types/news'
import { normalizeNewsItem } from '../utils/news'

async function requestJson<T>(url: string, signal?: AbortSignal): Promise<T> {
  const response = await fetch(url, { signal })

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`)
  }

  return response.json() as Promise<T>
}

export async function fetchNewsPages(signal?: AbortSignal) {
  const loadedItems: NewsItem[] = []

  for (let page = 1; page <= MAX_API_PAGES; page += 1) {
    const payload = await requestJson<ApiNewsItem[]>(`/api/v1/news?page=${page}`, signal)
    const normalizedItems = payload.map((item, index) =>
      normalizeNewsItem(item, loadedItems.length + index),
    )

    loadedItems.push(...normalizedItems)

    if (payload.length < PAGE_SIZE) {
      break
    }
  }

  return loadedItems
}

export async function searchNews(query: string, signal?: AbortSignal) {
  const payload = await requestJson<ApiNewsItem[]>(
    `/api/v1/news/search?q=${encodeURIComponent(query)}`,
    signal,
  )

  return payload.map((item, index) => normalizeNewsItem(item, index))
}

export async function fetchNewsById(id: string, signal?: AbortSignal) {
  const payload = await requestJson<ApiNewsItem>(`/api/v1/news/${encodeURIComponent(id)}`, signal)
  return normalizeNewsItem(payload)
}
