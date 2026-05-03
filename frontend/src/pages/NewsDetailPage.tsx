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
        <p className="mb-3 text-sm font-black uppercase text-[#266f66]">Memuat Artikel</p>
        <h1 className="text-4xl font-black leading-tight text-[#162126]">Sebentar, berita sedang diambil.</h1>
      </section>
    )
  }

  if (!article) {
    return (
      <section className="mx-auto w-[calc(100%_-_40px)] max-w-[1120px] py-12 max-md:w-[calc(100%_-_28px)]">
        <a className="mb-7 inline-flex font-black text-[#266f66] hover:text-[#174e48] hover:underline" href="/">
          Kembali ke daftar berita
        </a>
        <div className="rounded-lg border border-dashed border-[#d8cec0] bg-white px-6 py-12">
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
      <a className="mb-7 inline-flex font-black text-[#266f66] hover:text-[#174e48] hover:underline" href="/">
        Kembali ke daftar berita
      </a>

      <header className="border-b border-[#d8cec0] pb-8">
        <div className="flex flex-wrap items-center gap-3 text-sm font-black text-[#89969a]">
          <span className="rounded-full bg-[#dbece7] px-3 py-1.5 uppercase text-[#266f66]">
            {article.category}
          </span>
          <span>{estimateReadTime(article.body)} menit baca</span>
        </div>

        <h1 className="mt-5 max-w-5xl font-serif text-[clamp(38px,5.5vw,68px)] font-black leading-[1.02] text-[#162126]">
          {article.title}
        </h1>

        <p className="mt-5 max-w-3xl text-xl leading-8 text-[#5f6d72]">{article.summary}</p>

        <div className="mt-5 flex flex-wrap items-center gap-3 text-sm font-black text-[#89969a]">
          <span>{article.author}</span>
          <time dateTime={article.date}>{formatDate(article.date)}</time>
        </div>
      </header>

      <div className="grid grid-cols-[minmax(0,730px)_280px] items-start gap-10 pt-9 max-lg:grid-cols-1">
        <ArticleBody body={article.body} />
        <ArticleMeta article={article} />
      </div>
    </article>
  )
}
