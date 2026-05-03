export function Header() {
  return (
    <header className="mx-auto flex w-[calc(100%_-_40px)] max-w-[1180px] items-center justify-between gap-6 py-6 max-md:w-[calc(100%_-_28px)] max-md:flex-col max-md:items-start">
      <a className="text-2xl font-black text-[#162126] no-underline" href="/" aria-label="Beranda Newsroom">
        KABAR NOW!
      </a>
      <nav className="flex gap-2 max-sm:w-full" aria-label="Navigasi utama">
        <a
          className="rounded-full px-4 py-2 text-sm font-bold text-[#5f6d72] transition hover:bg-[#e5dccb] hover:text-[#162126] focus:bg-[#e5dccb] focus:text-[#162126] max-sm:flex-1 max-sm:text-center"
          href="/#latest"
        >
          Berita Terbaru
        </a>
        <a
          className="rounded-full px-4 py-2 text-sm font-bold text-[#5f6d72] transition hover:bg-[#e5dccb] hover:text-[#162126] focus:bg-[#e5dccb] focus:text-[#162126] max-sm:flex-1 max-sm:text-center"
          href="/#filters"
        >
          Cari
        </a>
      </nav>
    </header>
  )
}
