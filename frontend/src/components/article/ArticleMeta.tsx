import type { NewsItem } from '../../types/news'
import { formatDate } from '../../utils/news'

type ArticleMetaProps = {
  article: NewsItem
}

export function ArticleMeta({ article }: ArticleMetaProps) {
  return (
    <aside className="sticky top-5 rounded-lg border border-[#d8cec0] bg-[#efe7d9] p-6 max-lg:static max-lg:order-first">
      <dl className="grid gap-5">
        
        <div className="border-b border-[#162126]/10 pb-4">
          <dt className="mb-1 text-xs font-black uppercase text-[#89969a]">Penulis</dt>
          <dd className="m-0 font-black text-[#162126]">{article.author}</dd>
        </div>
        <div className="border-b border-[#162126]/10 pb-4">
          <dt className="mb-1 text-xs font-black uppercase text-[#89969a]">Terbit</dt>
          <dd className="m-0 font-black text-[#162126]">{formatDate(article.date)}</dd>
        </div>
        {article.url !== '#' && (
          <div>
            <dt className="mb-1 text-xs font-black uppercase text-[#89969a]">Sumber</dt>
            <dd className="m-0 font-black">
              <a className="text-[#266f66] hover:text-[#174e48] hover:underline" href={article.url} target="_blank">
                Buka tautan asli
              </a>
            </dd>
          </div>
        )}
      </dl>
    </aside>
  )
}
