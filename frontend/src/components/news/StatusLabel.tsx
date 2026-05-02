import type { LoadState } from '../../types/news'

type StatusLabelProps = {
  loadState: LoadState
  activeQuery: string
}

export function StatusLabel({ loadState, activeQuery }: StatusLabelProps) {
  if (loadState === 'loading') {
    return <>Memuat berita...</>
  }

  if (loadState === 'ready' && activeQuery) {
    return <>Hasil BM25 untuk "{activeQuery}"</>
  }

  if (loadState === 'ready') {
    return <>Terhubung ke API berita</>
  }

  if (loadState === 'fallback') {
    return <>Memakai contoh berita</>
  }

  if (activeQuery) {
    return <>Pencarian belum mendapat respons dari API</>
  }

  return <>API belum aktif, menampilkan contoh berita</>
}
