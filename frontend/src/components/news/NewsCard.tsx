import type { NewsItem } from '../../types/news'
import { formatDate } from '../../utils/news'

type NewsCardProps = {
  item: NewsItem
}

export function NewsCard({ item }: NewsCardProps) {
  const detailUrl = `/news/${encodeURIComponent(item.id)}`

  return (
    <article className="group grid gap-4 rounded-xl border border-[#d8cec0] bg-white p-6 shadow-[0_18px_50px_rgba(30,40,46,0.06)] transition-all duration-300 hover:shadow-[0_24px_60px_rgba(30,40,46,0.12)] hover:-translate-y-1 max-sm:p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="rounded-full bg-[#dbece7] px-3 py-1.5 text-xs font-black uppercase tracking-wide text-[#266f66]">
          Berita
        </span>
        <time className="text-sm font-bold text-[#89969a]" dateTime={item.date}>
          📅 {formatDate(item.date)}
        </time>
      </div>

      <h3 className="text-2xl font-black leading-tight text-[#162126] max-sm:text-xl">
        <a className="transition-colors duration-200 group-hover:text-[#266f66] focus:text-[#266f66]" href={detailUrl}>
          {item.title}
        </a>
      </h3>

      <p className="leading-7 text-[#5f6d72] line-clamp-3">{item.summary}</p>

      <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-[#e5dccb] max-sm:flex-col max-sm:items-start">
        <span className="text-sm font-bold text-[#89969a]">✍️ {item.author}</span>
        <a className="inline-flex items-center gap-2 font-black text-[#266f66] transition-all hover:text-[#174e48] hover:gap-3" href={detailUrl}>
          Baca selengkapnya
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </a>
      </div>
    </article>
  )
}
