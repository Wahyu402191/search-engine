export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#f7f3ea]/90 border-b border-[#d8cec0] shadow-sm">
      <div className="mx-auto flex w-[calc(100%_-_40px)] max-w-[1180px] items-center justify-between gap-6 py-5 max-md:w-[calc(100%_-_28px)] max-md:flex-col max-md:items-start">
        <a className="text-2xl font-black text-[#162126] no-underline transition-colors hover:text-[#266f66]" href="/" aria-label="Beranda Newsroom">
          📰 KABAR NOW!
        </a>
        <nav className="flex gap-2 max-sm:w-full" aria-label="Navigasi utama">
          <a
            className="rounded-full px-5 py-2.5 text-sm font-bold text-[#5f6d72] transition-all hover:bg-[#266f66] hover:text-white focus:bg-[#266f66] focus:text-white max-sm:flex-1 max-sm:text-center"
            href="/#latest"
          >
            📋 Berita Terbaru
          </a>
          <a
            className="rounded-full px-5 py-2.5 text-sm font-bold text-[#5f6d72] transition-all hover:bg-[#266f66] hover:text-white focus:bg-[#266f66] focus:text-white max-sm:flex-1 max-sm:text-center"
            href="/#filters"
          >
            🔍 Cari
          </a>
        </nav>
      </div>
    </header>
  )
}
