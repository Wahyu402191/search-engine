import type { FormEvent } from 'react'

type NewsSearchFormProps = {
  categories: string[]
  category: string
  queryDraft: string
  activeQuery: string
  onCategoryChange: (category: string) => void
  onQueryDraftChange: (query: string) => void
  onSearch: (query: string) => void
}

export function NewsSearchForm({
  categories,
  category,
  queryDraft,
  activeQuery,
  onCategoryChange,
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
      className="border-y border-[#d8cec0] bg-[#efe7d9] px-5 py-6 max-md:px-4"
      id="filters"
      onSubmit={handleSubmit}
      aria-label="Pencarian berita"
    >
      <div className="mx-auto grid max-w-[1180px] grid-cols-[minmax(220px,1fr)_minmax(180px,260px)_auto_auto] gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
        <label className="grid gap-2">
          <span className="text-sm font-black text-[#5f6d72]">Query pencarian</span>
          <input
            className="min-h-12 rounded-lg border border-[#d8cec0] bg-white px-4 text-[#162126] shadow-sm outline-none transition placeholder:text-[#89969a] focus:border-[#266f66] focus:ring-4 focus:ring-[#266f66]/15"
            type="search"
            value={queryDraft}
            onChange={(event) => onQueryDraftChange(event.target.value)}
            placeholder="Contoh: konflik Iran, ekonomi, teknologi"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-black text-[#5f6d72]">Kategori</span>
          <select
            className="min-h-12 rounded-lg border border-[#d8cec0] bg-white px-4 text-[#162126] shadow-sm outline-none transition focus:border-[#266f66] focus:ring-4 focus:ring-[#266f66]/15"
            value={category}
            onChange={(event) => onCategoryChange(event.target.value)}
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>

        <button
          className="self-end rounded-lg bg-[#266f66] px-5 py-3 font-black text-white shadow-sm transition hover:bg-[#174e48] focus:bg-[#174e48] max-sm:w-full"
          type="submit"
        >
          Cari
        </button>

        <button
          className="self-end rounded-lg border border-[#d8cec0] bg-white px-5 py-3 font-black text-[#266f66] shadow-sm transition hover:border-[#266f66] hover:text-[#174e48] focus:border-[#266f66] focus:text-[#174e48] max-sm:w-full"
          type="button"
          onClick={handleReset}
          disabled={!activeQuery && !queryDraft}
        >
          Reset
        </button>
      </div>
    </form>
  )
}
