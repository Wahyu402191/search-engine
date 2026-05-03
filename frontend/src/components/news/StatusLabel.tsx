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
    return <>Hasil pencarian untuk "{activeQuery}"</>
  }

  if (loadState === 'ready') {
    return <>Berita terupdate!</>
  }

  if (loadState === 'fallback') {
    return <>Memakai contoh berita</>
  }

  if (activeQuery) {
    return <>Pencarian belum mendapat respons dari API</>
  }

  return <>API belum aktif, menampilkan contoh berita</>
}
