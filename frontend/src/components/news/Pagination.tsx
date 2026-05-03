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
    <footer className="mx-auto flex w-[calc(100%_-_40px)] max-w-[1180px] flex-wrap items-center justify-center gap-4 py-9 max-md:w-[calc(100%_-_28px)]">
      
      {/* Sebelumnya */}
      <button
        className="min-h-11 min-w-28 rounded-lg bg-[#266f66] px-5 font-black text-white transition hover:bg-[#174e48] disabled:cursor-not-allowed disabled:bg-[#e3dfd6] disabled:text-[#89969a]"
        type="button"
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
      >
        Sebelumnya
      </button>

      {/* Info */}
      <span className="font-black text-[#5f6d72] max-sm:text-center">
        Halaman {currentPage} dari {totalPages}
      </span>

      {/* Pagination */}
      <div className="flex max-h-40 w-full flex-wrap justify-center gap-2 overflow-y-auto rounded-lg border border-[#d8cec0] bg-white p-3">
        {visiblePages.map((page, index) =>
          page === '...' ? (
            <span key={`dots-${index}`} className="px-2 text-gray-500">
              ...
            </span>
          ) : (
            <button
              key={`page-${page}`} // 🔥 penting: unique key
              className={`min-h-10 min-w-10 rounded-md border px-3 text-sm font-black transition
                ${
                  page === currentPage
                    ? 'border-[#266f66] bg-[#266f66] text-white'
                    : 'border-[#d8cec0] text-[#266f66] hover:border-[#266f66] hover:bg-[#dbece7]'
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
        className="min-h-11 min-w-28 rounded-lg bg-[#266f66] px-5 font-black text-white transition hover:bg-[#174e48] disabled:cursor-not-allowed disabled:bg-[#e3dfd6] disabled:text-[#89969a]"
        type="button"
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
      >
        Berikutnya
      </button>
    </footer>
  )
}