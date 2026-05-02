import { isQuote, parseArticle } from '../../utils/news'

type ArticleBodyProps = {
  body: string
}

export function ArticleBody({ body }: ArticleBodyProps) {
  const articleParts = parseArticle(body)

  return (
    <div className="rounded-lg border border-[#d8cec0] bg-white p-[clamp(22px,4vw,42px)] shadow-[0_18px_50px_rgba(30,40,46,0.05)]">
      {articleParts.dateline && articleParts.source && (
        <p className="mb-4 font-sans text-sm font-bold leading-6 text-[#5f6d72]">
          <strong>{articleParts.dateline}</strong>, {articleParts.source}
        </p>
      )}

      <p className="mb-6 font-serif text-[21px] leading-[1.78] text-[#162126] max-sm:text-lg">
        {articleParts.lead}
      </p>

      {articleParts.paragraphs.map((paragraph, index) =>
        isQuote(paragraph) ? (
          <blockquote
            className="my-7 border-l-4 border-[#266f66] py-1 pl-6 font-serif text-[21px] italic leading-[1.78] text-[#174e48] max-sm:text-lg"
            key={`${paragraph}-${index}`}
          >
            {paragraph}
          </blockquote>
        ) : (
          <p
            className="mb-6 font-serif text-[19px] leading-[1.78] text-[#253138] last:mb-0 max-sm:text-lg"
            key={`${paragraph}-${index}`}
          >
            {paragraph}
          </p>
        ),
      )}
    </div>
  )
}
