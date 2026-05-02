import { useEffect, useMemo, useState } from 'react'
import { fallbackNews } from '../data/fallbackNews'
import { fetchNewsPages, searchNews } from '../services/newsApi'
import type { LoadState, NewsItem } from '../types/news'

export function useNews(searchQuery: string) {
  const [news, setNews] = useState<NewsItem[]>([])
  const [loadState, setLoadState] = useState<LoadState>('loading')

  useEffect(() => {
    const controller = new AbortController()

    async function loadNews() {
      setLoadState('loading')

      try {
        const query = searchQuery.trim()
        const loadedItems = query
          ? await searchNews(query, controller.signal)
          : await fetchNewsPages(controller.signal)

        if (loadedItems.length === 0) {
          setNews(query ? [] : fallbackNews)
          setLoadState(query ? 'ready' : 'fallback')
          return
        }

        setNews(loadedItems)
        setLoadState('ready')
      } catch (error) {
        if (controller.signal.aborted) {
          return
        }

        console.error(error)
        setNews(searchQuery.trim() ? [] : fallbackNews)
        setLoadState('error')
      }
    }

    loadNews()

    return () => controller.abort()
  }, [searchQuery])

  const categories = useMemo(
    () => ['Semua', ...Array.from(new Set(news.map((item) => item.category))).sort()],
    [news],
  )

  return { news, categories, loadState }
}
