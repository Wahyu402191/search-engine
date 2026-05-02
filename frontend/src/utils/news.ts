import type { ApiNewsItem, ArticleParts, NewsItem } from '../types/news'

export function classifyCategory(item: ApiNewsItem) {
  if (item.category) {
    return item.category
  }

  const haystack = `${item.judul ?? item.title ?? ''} ${item.artikel ?? item.content ?? ''}`.toLowerCase()

  if (/(iran|trump|israel|as|internasional|perang|militer)/.test(haystack)) return 'Internasional'
  if (/(ai|data|digital|cyber|software|teknologi|technology)/.test(haystack)) return 'Teknologi'
  if (/(bisnis|market|startup|company|bank|business|ekonomi)/.test(haystack)) return 'Ekonomi'
  if (/(health|hospital|medical|doctor|kesehatan|rumah sakit)/.test(haystack)) return 'Kesehatan'
  if (/(sport|football|match|club|olahraga|sepak bola)/.test(haystack)) return 'Olahraga'
  if (/(school|student|university|education|sekolah|kampus)/.test(haystack)) return 'Pendidikan'
  if (/(art|music|film|culture|budaya|festival)/.test(haystack)) return 'Budaya'

  return 'Umum'
}

export function compactText(value = '', maxLength = 170) {
  const normalized = value.replace(/\s+/g, ' ').trim()

  if (normalized.length <= maxLength) {
    return normalized
  }

  return `${normalized.slice(0, maxLength).trim()}...`
}

export function normalizeNewsItem(item: ApiNewsItem, index = 0): NewsItem {
  const title = item.judul ?? item.title ?? 'Berita tanpa judul'
  const body = item.artikel ?? item.content ?? 'Isi berita belum tersedia.'

  return {
    id: String(item.id ?? `api-${index}`),
    title,
    date: item.tanggal ?? item.date ?? '',
    author: item.penulis ?? item.author ?? 'Redaksi',
    url: item.link ?? item.url ?? '#',
    summary: compactText(body),
    category: classifyCategory(item),
    body,
  }
}

export function splitArticleText(value: string) {
  const normalized = value
    .replace(/\r\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim()

  if (!normalized) {
    return ['Isi berita belum tersedia.']
  }

  const lineParagraphs = normalized
    .split(/\n+/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)

  if (lineParagraphs.length > 1) {
    return lineParagraphs
  }

  const sentences = normalized
    .split(/(?<=[.!?])\s+(?=[A-Z"“])/)
    .map((sentence) => sentence.trim())
    .filter(Boolean)

  if (sentences.length <= 3) {
    return [normalized]
  }

  const paragraphGroups: string[] = []
  for (let index = 0; index < sentences.length; index += 2) {
    paragraphGroups.push(sentences.slice(index, index + 2).join(' '))
  }

  return paragraphGroups
}

export function parseArticle(value: string): ArticleParts {
  const paragraphs = splitArticleText(value)
  const firstParagraph = paragraphs[0] ?? ''
  const datelineMatch = firstParagraph.match(/^([^,\n]{2,50}),\s*([^–—-]{2,90})\s[-–—]\s(.+)$/)

  if (!datelineMatch) {
    return {
      dateline: '',
      source: '',
      lead: firstParagraph,
      paragraphs: paragraphs.slice(1),
    }
  }

  return {
    dateline: datelineMatch[1].trim(),
    source: datelineMatch[2].trim(),
    lead: datelineMatch[3].trim(),
    paragraphs: paragraphs.slice(1),
  }
}

export function formatDate(value: string) {
  if (!value) {
    return 'Tanggal belum tersedia'
  }

  const date = new Date(value)

  if (Number.isNaN(date.getTime())) {
    return value
  }

  return new Intl.DateTimeFormat('id-ID', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(date)
}

export function estimateReadTime(value: string) {
  const words = value.trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.ceil(words / 220))
}

export function isQuote(paragraph: string) {
  return /^["“].+["”][,.]?\s/.test(paragraph) || /^["“].+["”]$/.test(paragraph)
}
