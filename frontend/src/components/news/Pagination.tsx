type PaginationProps = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  return (
    <footer className="mx-auto flex w-[calc(100%_-_40px)] max-w-[1180px] items-center justify-center gap-4 py-9 max-md:w-[calc(100%_-_28px)] max-sm:grid max-sm:grid-cols-2">
      <button
        className="min-h-11 min-w-28 rounded-lg bg-[#266f66] px-5 font-black text-white transition hover:bg-[#174e48] focus:bg-[#174e48] disabled:cursor-not-allowed disabled:bg-[#e3dfd6] disabled:text-[#89969a]"
        type="button"
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
      >
        Sebelumnya
      </button>
      <span className="font-black text-[#5f6d72] max-sm:col-span-2 max-sm:row-start-1 max-sm:text-center">
        Halaman {currentPage} dari {totalPages}
      </span>
      <button
        className="min-h-11 min-w-28 rounded-lg bg-[#266f66] px-5 font-black text-white transition hover:bg-[#174e48] focus:bg-[#174e48] disabled:cursor-not-allowed disabled:bg-[#e3dfd6] disabled:text-[#89969a]"
        type="button"
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
      >
        Berikutnya
      </button>
    </footer>
  )
}
