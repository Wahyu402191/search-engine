import type { FormEvent } from 'react'

type NewsSearchFormProps = {
  queryDraft: string
  activeQuery: string
  onQueryDraftChange: (query: string) => void
  onSearch: (query: string) => void
}

export function NewsSearchForm({
  queryDraft,
  activeQuery,
  onQueryDraftChange,
  onSearch,
}: NewsSearchFormProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    onSearch(queryDraft)
  }

  function handleReset() {
    onQueryDraftChange('')
    onSearch('')
  }

  return (
    <form
      className="border-y border-[#d8cec0] bg-gradient-to-r from-[#efe7d9] to-[#e5dccb] px-5 py-8 shadow-inner max-md:px-4"
      id="filters"
      onSubmit={handleSubmit}
      aria-label="Pencarian berita"
    >
      <div className="mx-auto grid max-w-[1180px] grid-cols-[minmax(220px,1fr)_minmax(180px,260px)_auto_auto] gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
        <label className="grid gap-2">
          <span className="text-sm font-black uppercase tracking-wide text-[#5f6d72]">🔍 Cari Berita:</span>
          <input
            className="min-h-12 rounded-lg border-2 border-[#d8cec0] bg-white px-4 text-[#162126] shadow-sm outline-none transition placeholder:text-[#89969a] focus:border-[#266f66] focus:ring-4 focus:ring-[#266f66]/15 focus:shadow-md"
            type="search"
            value={queryDraft}
            onChange={(event) => onQueryDraftChange(event.target.value)}
            placeholder="Contoh: konflik Iran, ekonomi, teknologi"
          />
        </label>

        <button
          className="self-end rounded-lg bg-[#266f66] px-6 py-3 font-black text-white shadow-md transition-all hover:bg-[#174e48] hover:shadow-lg hover:-translate-y-0.5 focus:bg-[#174e48] active:translate-y-0 max-sm:w-full"
          type="submit"
        >
          🔎 Cari
        </button>

        <button
          className="self-end rounded-lg border-2 border-[#d8cec0] bg-white px-6 py-3 font-black text-[#266f66] shadow-md transition-all hover:border-[#266f66] hover:bg-[#dbece7] hover:text-[#174e48] hover:shadow-lg hover:-translate-y-0.5 focus:border-[#266f66] focus:text-[#174e48] disabled:opacity-50 disabled:cursor-not-allowed active:translate-y-0 max-sm:w-full"
          type="button"
          onClick={handleReset}
          disabled={!activeQuery && !queryDraft}
        >
          ↺ Reset
        </button>
      </div>
    </form>
  )
}
