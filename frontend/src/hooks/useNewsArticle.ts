import { useEffect, useState } from 'react'
import { fallbackNews } from '../data/fallbackNews'
import { fetchNewsById } from '../services/newsApi'
import type { LoadState, NewsItem } from '../types/news'

export function useNewsArticle(id: string) {
  const [article, setArticle] = useState<NewsItem>()
  const [loadState, setLoadState] = useState<LoadState>('loading')

  useEffect(() => {
    const controller = new AbortController()

    async function loadArticle() {
      setLoadState('loading')

      try {
        const loadedArticle = await fetchNewsById(id, controller.signal)
        setArticle(loadedArticle)
        setLoadState('ready')
      } catch (error) {
        if (controller.signal.aborted) {
          return
        }

        console.error(error)
        setArticle(fallbackNews.find((item) => item.id === id))
        setLoadState('error')
      }
    }

    loadArticle()

    return () => controller.abort()
  }, [id])

  return { article, loadState }
}
