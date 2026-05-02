export type ApiNewsItem = {
  id?: number | string
  judul?: string
  tanggal?: string
  penulis?: string
  link?: string
  artikel?: string
  title?: string
  date?: string
  author?: string
  url?: string
  content?: string
  category?: string
}

export type NewsItem = {
  id: string
  title: string
  date: string
  author: string
  url: string
  summary: string
  category: string
  body: string
}

export type ArticleParts = {
  dateline: string
  source: string
  lead: string
  paragraphs: string[]
}

export type LoadState = 'loading' | 'ready' | 'fallback' | 'error'
