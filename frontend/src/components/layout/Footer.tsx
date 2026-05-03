export function Footer() {
  return (
    <footer className="border-t border-[#d8cec0] bg-[#efe7d9] mt-16">
      <div className="mx-auto w-[calc(100%_-_40px)] max-w-[1180px] py-12 max-md:w-[calc(100%_-_28px)]">
        <div className="grid grid-cols-3 gap-8 max-md:grid-cols-1">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-black text-[#162126] mb-4">📰 KABAR NOW!</h3>
            <p className="text-sm text-[#5f6d72] leading-relaxed">
              Platform berita cepat, ringkas, dan terpercaya. Dapatkan informasi terkini dari berbagai topik penting.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-wide text-[#266f66] mb-4">Navigasi</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-sm text-[#5f6d72] hover:text-[#266f66] transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="/#latest" className="text-sm text-[#5f6d72] hover:text-[#266f66] transition-colors">
                  Berita Terbaru
                </a>
              </li>
              <li>
                <a href="/#filters" className="text-sm text-[#5f6d72] hover:text-[#266f66] transition-colors">
                  Cari Berita
                </a>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-wide text-[#266f66] mb-4">Tentang</h4>
            <p className="text-sm text-[#5f6d72] leading-relaxed">
              Dibuat oleh <strong>Kelompok 2</strong> sebagai bagian dari proyek pencarian berita menggunakan algoritma BM25.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-[#d8cec0] text-center">
          <p className="text-sm text-[#89969a]">
            © {new Date().getFullYear()} Kabar Now! - Kelompok 2. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
