import { ChevronDown } from 'lucide-react'
import { faqs } from '../data/content'

export function FaqList() {
  return (
    <div className="mx-auto mt-12 max-w-4xl divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-white px-5 shadow-soft sm:px-8">
      {faqs.map(([question, answer], index) => (
        <details className="group py-2" key={question} open={index === 0}>
          <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-5 py-3 font-extrabold text-brand-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-500 [&::-webkit-details-marker]:hidden">
            {question}
            <ChevronDown
              className="shrink-0 transition-transform group-open:rotate-180"
              aria-hidden="true"
            />
          </summary>
          <p className="max-w-3xl pb-6 pr-10 leading-7 text-slate-600">
            {answer}
          </p>
        </details>
      ))}
    </div>
  )
}
