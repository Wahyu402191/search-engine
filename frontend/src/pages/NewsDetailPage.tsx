import { ArticleBody } from '../components/article/ArticleBody'
import { ArticleMeta } from '../components/article/ArticleMeta'
import { useNewsArticle } from '../hooks/useNewsArticle'
import { estimateReadTime, formatDate } from '../utils/news'

type NewsDetailPageProps = {
  id: string
}

export function NewsDetailPage({ id }: NewsDetailPageProps) {
  const { article, loadState } = useNewsArticle(id)

  if (loadState === 'loading') {
    return (
      <section className="mx-auto w-[calc(100%_-_40px)] max-w-[1120px] py-12 max-md:w-[calc(100%_-_28px)]">
        <div className="animate-pulse">
          <div className="h-4 w-32 bg-[#e5dccb] rounded mb-7"></div>
          <div className="h-6 w-24 bg-[#e5dccb] rounded-full mb-4"></div>
          <div className="h-12 bg-[#e5dccb] rounded mb-4 w-3/4"></div>
          <div className="h-4 bg-[#e5dccb] rounded mb-2"></div>
          <div className="h-4 bg-[#e5dccb] rounded w-5/6"></div>
        </div>
      </section>
    )
  }

  if (!article) {
    return (
      <section className="mx-auto w-[calc(100%_-_40px)] max-w-[1120px] py-12 max-md:w-[calc(100%_-_28px)]">
        <a className="mb-7 inline-flex items-center gap-2 font-black text-[#266f66] transition-all hover:text-[#174e48] hover:gap-3" href="/">
          ← Kembali ke daftar berita
        </a>
        <div className="rounded-xl border-2 border-dashed border-[#d8cec0] bg-white px-6 py-16 text-center">
          <div className="text-6xl mb-4">📰</div>
          <h1 className="mb-3 text-4xl font-black leading-tight text-[#162126]">Berita tidak ditemukan.</h1>
          <p className="text-[#5f6d72]">
            Artikel ini belum tersedia.
          </p>
        </div>
      </section>
    )
  }

  return (
    <article className="mx-auto w-[calc(100%_-_40px)] max-w-[1120px] py-9 pb-20 max-md:w-[calc(100%_-_28px)]">
      <a className="mb-7 inline-flex items-center gap-2 font-black text-[#266f66] transition-all hover:text-[#174e48] hover:gap-3" href="/">
        ← Kembali ke daftar berita
      </a>

      <header className="border-b-2 border-[#d8cec0] pb-8">
        <div className="flex flex-wrap items-center gap-3 text-sm font-black text-[#89969a]">
          <span className="rounded-full bg-[#dbece7] px-4 py-2 uppercase tracking-wide text-[#266f66] shadow-sm">
            📌 {article.category}
          </span>
          <span>⏱️ {estimateReadTime(article.body)} menit baca</span>
        </div>

        <h1 className="mt-6 max-w-5xl font-serif text-[clamp(38px,5.5vw,68px)] font-black leading-[1.02] text-[#162126]">
          {article.title}
        </h1>

        <p className="mt-6 max-w-3xl text-xl leading-8 text-[#5f6d72] border-l-4 border-[#266f66] pl-6">{article.summary}</p>

        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm font-black text-[#89969a]">
          <span className="flex items-center gap-2">
            ✍️ <span className="text-[#162126]">{article.author}</span>
          </span>
          <span className="flex items-center gap-2">
            📅 <time dateTime={article.date}>{formatDate(article.date)}</time>
          </span>
        </div>
      </header>

      <div className="grid grid-cols-[minmax(0,730px)_280px] items-start gap-10 pt-9 max-lg:grid-cols-1">
        <ArticleBody body={article.body} />
        <ArticleMeta article={article} />
      </div>
    </article>
  )
}
