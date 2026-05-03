import { useMemo, useState } from 'react'
import { PAGE_SIZE } from '../config/news'
import { NewsCard } from '../components/news/NewsCard'
import { NewsSearchForm } from '../components/news/NewsSearchForm'
import { Pagination } from '../components/news/Pagination'
import { StatusLabel } from '../components/news/StatusLabel'
import { useNews } from '../hooks/useNews'

export function NewsListPage() {
  const [category, setCategory] = useState('Semua')
  const [currentPage, setCurrentPage] = useState(1)
  const [queryDraft, setQueryDraft] = useState('')
  const [activeQuery, setActiveQuery] = useState('')
  const { news, categories, loadState } = useNews(activeQuery)

  const filteredNews = useMemo(() => {
    return news.filter((item) => category === 'Semua' || item.category === category)
  }, [category, news])

  const totalPages = Math.max(1, Math.ceil(filteredNews.length / PAGE_SIZE))
  const safePage = Math.min(currentPage, totalPages)
  const pageStart = (safePage - 1) * PAGE_SIZE
  const visibleNews = filteredNews.slice(pageStart, pageStart + PAGE_SIZE)

  function handleCategoryChange(nextCategory: string) {
    setCategory(nextCategory)
    setCurrentPage(1)
  }

  function handleSearch(nextQuery: string) {
    setActiveQuery(nextQuery.trim())
    setCategory('Semua')
    setCurrentPage(1)
  }

  return (
    <>
      <section className="mx-auto grid w-[calc(100%_-_40px)] max-w-[1180px] grid-cols-[minmax(0,1fr)_320px] items-stretch gap-8 py-14 max-lg:grid-cols-1 max-md:w-[calc(100%_-_28px)] max-md:py-8">
        <div className="self-center">
          <p className="mb-3 text-sm font-black uppercase text-[#266f66]">Kelompok 2</p>
          <h1 className="max-w-4xl text-[clamp(42px,6vw,78px)] font-black leading-[0.96] text-[#162126] max-md:text-[42px] max-sm:text-4xl">
            Kabar Now!
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-[#5f6d72] max-sm:text-lg">
            Kabar Now menghadirkan berita cepat, ringkas, dan terpercaya dalam satu platform. Dapatkan update terbaru dari berbagai topik penting, kapan saja dan di mana saja.
          </p>
        </div>

        <aside className="grid min-h-52 content-end gap-2 rounded-lg bg-[#162126] p-7 text-white max-lg:min-h-40">
          <span className="text-sm font-black uppercase text-white">Total Berita</span>
          <strong className="text-7xl leading-none text-[#f4b860]">{news.length}</strong>
          <span className="text-white/75">{loadState === 'loading' ? 'Mengambil dari API' : 'Siap dibaca'}</span>
        </aside>
      </section>

      <NewsSearchForm
        categories={categories}
        category={category}
        queryDraft={queryDraft}
        activeQuery={activeQuery}
        onCategoryChange={handleCategoryChange}
        onQueryDraftChange={setQueryDraft}
        onSearch={handleSearch}
      />

      <section
        className="mx-auto flex w-[calc(100%_-_40px)] max-w-[1180px] items-end justify-between gap-6 py-10 pb-5 max-md:w-[calc(100%_-_28px)] max-md:flex-col max-md:items-start"
        id="latest"
      >
        <div>
          <p className="mb-3 text-sm font-black uppercase text-[#266f66]">Berita Terbaru</p>
          <h2 className="text-3xl font-black text-[#162126]">{filteredNews.length} berita ditemukan</h2>
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
        {visibleNews.length > 0 ? (
          visibleNews.map((item) => <NewsCard item={item} key={item.id} />)
        ) : (
          <div className="rounded-lg border border-dashed border-[#d8cec0] bg-white px-6 py-12 text-center">
            <h3 className="mb-2 text-2xl font-black text-[#162126]">Tidak ada berita yang cocok.</h3>
            <p className="text-[#5f6d72]">Coba query lain atau kosongkan pencarian untuk melihat daftar berita.</p>
          </div>
        )}
      </section>

      <Pagination currentPage={safePage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </>
  )
}
