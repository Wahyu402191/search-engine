import { useMemo, useState } from 'react'
import { PAGE_SIZE, TOTAL_DOCUMENT } from '../config/news'
import { NewsCard } from '../components/news/NewsCard'
import { NewsSearchForm } from '../components/news/NewsSearchForm'
import { Pagination } from '../components/news/Pagination'
import { StatusLabel } from '../components/news/StatusLabel'
import { useNews } from '../hooks/useNews'

export function NewsListPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [queryDraft, setQueryDraft] = useState('')
  const [activeQuery, setActiveQuery] = useState('')
  const totalDocumentPages = Math.max(1, Math.ceil(TOTAL_DOCUMENT / PAGE_SIZE))
  const { news, loadState } = useNews(activeQuery, currentPage)

  const filteredNews = useMemo(() => {
    return news
  }, [news])

  const totalPages = activeQuery ? Math.max(1, Math.ceil(filteredNews.length / PAGE_SIZE)) : totalDocumentPages
  const safePage = Math.min(currentPage, totalPages)
  const pageStart = (safePage - 1) * PAGE_SIZE
  const visibleNews = activeQuery ? filteredNews.slice(pageStart, pageStart + PAGE_SIZE) : filteredNews
  const displayTotal = activeQuery ? news.length : TOTAL_DOCUMENT
  const resultCount = activeQuery ? filteredNews.length : TOTAL_DOCUMENT

  function handleSearch(nextQuery: string) {
    setActiveQuery(nextQuery.trim())
    setCurrentPage(1)
  }

  return (
    <>
      <section className="mx-auto grid w-[calc(100%_-_40px)] max-w-[1180px] grid-cols-[minmax(0,1fr)_320px] items-stretch gap-8 py-14 max-lg:grid-cols-1 max-md:w-[calc(100%_-_28px)] max-md:py-8">
        <div className="self-center animate-fade-in">
          <p className="mb-3 text-sm font-black uppercase tracking-wider text-[#266f66]">Kelompok 2</p>
          <h1 className="max-w-4xl text-[clamp(42px,6vw,78px)] font-black leading-[0.96] text-[#162126] max-md:text-[42px] max-sm:text-4xl">
            Kabar Now!
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-[#5f6d72] max-sm:text-lg">
            Kabar Now menghadirkan berita cepat, ringkas, dan terpercaya dalam satu platform. Dapatkan update terbaru dari berbagai topik penting, kapan saja dan di mana saja.
          </p>
          <div className="mt-8 flex gap-4 max-sm:flex-col">
            <a 
              href="#filters" 
              className="inline-flex items-center justify-center rounded-lg bg-[#266f66] px-6 py-3 font-black text-white shadow-lg transition hover:bg-[#174e48] hover:shadow-xl hover:-translate-y-0.5"
            >
              Mulai Cari Berita
            </a>
            <a 
              href="#latest" 
              className="inline-flex items-center justify-center rounded-lg border-2 border-[#266f66] px-6 py-3 font-black text-[#266f66] transition hover:bg-[#266f66] hover:text-white"
            >
              Lihat Berita Terbaru
            </a>
          </div>
        </div>
        <div className="self-center max-lg:hidden">
          <img 
            src="/src/assets/hero.png" 
            alt="Hero illustration" 
            className="w-full h-auto rounded-2xl shadow-2xl animate-float"
          />
        </div>
      </section>

      <NewsSearchForm
        queryDraft={queryDraft}
        activeQuery={activeQuery}
        onQueryDraftChange={setQueryDraft}
        onSearch={handleSearch}
      />

      <section
        className="mx-auto flex w-[calc(100%_-_40px)] max-w-[1180px] items-end justify-between gap-6 py-10 pb-5 max-md:w-[calc(100%_-_28px)] max-md:flex-col max-md:items-start"
        id="latest"
      >
        <div>
          <p className="mb-3 text-sm font-black uppercase text-[#266f66]">Berita Terbaru</p>
          <h2 className="text-3xl font-black text-[#162126]">{resultCount} berita ditemukan</h2>
        </div>
        <p className="text-right font-bold text-[#5f6d72] max-md:text-left">
          <StatusLabel loadState={loadState} activeQuery={activeQuery} />
        </p>
      </section>

      <section
        className="mx-auto grid w-[calc(100%_-_40px)] max-w-[1180px] gap-4 max-md:w-[calc(100%_-_28px)]"
        aria-live="polite"
        aria-busy={loadState === 'loading'}
      >
        {loadState === 'loading' ? (
          // Skeleton Loading
          Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="animate-pulse rounded-xl border border-[#d8cec0] bg-white p-6">
              <div className="flex justify-between mb-4">
                <div className="h-6 w-20 bg-[#e5dccb] rounded-full"></div>
                <div className="h-4 w-24 bg-[#e5dccb] rounded"></div>
              </div>
              <div className="h-8 bg-[#e5dccb] rounded mb-3 w-3/4"></div>
              <div className="h-4 bg-[#e5dccb] rounded mb-2"></div>
              <div className="h-4 bg-[#e5dccb] rounded mb-2 w-5/6"></div>
              <div className="h-4 bg-[#e5dccb] rounded w-2/3"></div>
            </div>
          ))
        ) : visibleNews.length > 0 ? (
          visibleNews.map((item) => <NewsCard item={item} key={item.id} />)
        ) : (
          <div className="rounded-xl border-2 border-dashed border-[#d8cec0] bg-white px-6 py-16 text-center">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="mb-2 text-2xl font-black text-[#162126]">Tidak ada berita yang cocok.</h3>
            <p className="text-[#5f6d72]">Coba query lain atau kosongkan pencarian untuk melihat daftar berita.</p>
          </div>
        )}
      </section>

      <Pagination currentPage={safePage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </>
  )
}
