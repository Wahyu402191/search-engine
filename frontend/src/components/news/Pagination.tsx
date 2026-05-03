type PaginationProps = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

function getVisiblePages(currentPage: number, totalPages: number) {
  const pages: (number | string)[] = []
  const delta = 2

  const start = Math.max(2, currentPage - delta)
  const end = Math.min(totalPages - 1, currentPage + delta)


  pages.push(1)

  if (start > 2) {
    pages.push('...')
  }

  for (let i = start; i <= end; i++) {
    pages.push(i)
  }

  if (end < totalPages - 1) {
    pages.push('...')
  }

  if (totalPages > 1) {
    pages.push(totalPages)
  }

  return [...new Set(pages)]
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const visiblePages = getVisiblePages(currentPage, totalPages)

  return (
    <footer className="mx-auto flex w-[calc(100%_-_40px)] max-w-[1180px] flex-wrap items-center justify-center gap-4 py-12 max-md:w-[calc(100%_-_28px)]">
      
      {/* Sebelumnya */}
      <button
        className="min-h-11 min-w-32 rounded-lg bg-[#266f66] px-6 font-black text-white shadow-md transition-all hover:bg-[#174e48] hover:shadow-lg hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:bg-[#e3dfd6] disabled:text-[#89969a] disabled:shadow-none disabled:translate-y-0"
        type="button"
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
      >
        ← Sebelumnya
      </button>

      {/* Info */}
      <span className="font-black text-[#5f6d72] px-4 py-2 bg-white rounded-lg border border-[#d8cec0] max-sm:text-center">
        📄 Halaman {currentPage} dari {totalPages}
      </span>

      {/* Pagination */}
      <div className="flex max-h-40 w-full flex-wrap justify-center gap-2 overflow-y-auto rounded-xl border-2 border-[#d8cec0] bg-white p-4 shadow-inner">
        {visiblePages.map((page, index) =>
          page === '...' ? (
            <span key={`dots-${index}`} className="px-2 text-[#89969a] font-bold">
              •••
            </span>
          ) : (
            <button
              key={`page-${page}`}
              className={`min-h-11 min-w-11 rounded-lg border-2 px-3 text-sm font-black transition-all
                ${
                  page === currentPage
                    ? 'border-[#266f66] bg-[#266f66] text-white shadow-md scale-110'
                    : 'border-[#d8cec0] text-[#266f66] hover:border-[#266f66] hover:bg-[#dbece7] hover:scale-105 hover:shadow-md'
                }`}
              type="button"
              onClick={() => onPageChange(page)}
              disabled={page === currentPage}
              aria-current={page === currentPage ? 'page' : undefined}
            >
              {page}
            </button>
          )
        )}
      </div>

      {/* Berikutnya */}
      <button
        className="min-h-11 min-w-32 rounded-lg bg-[#266f66] px-6 font-black text-white shadow-md transition-all hover:bg-[#174e48] hover:shadow-lg hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:bg-[#e3dfd6] disabled:text-[#89969a] disabled:shadow-none disabled:translate-y-0"
        type="button"
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
      >
        Berikutnya →
      </button>
    </footer>
  )
}