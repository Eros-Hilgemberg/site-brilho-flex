import { X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import type { Products } from '../../types/products'
import { ProductImage } from './ProductCatalog'

export function ProductDetailsModal({
  product,
  onClose,
}: {
  product: Products
  onClose: () => void
}) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const titleId = `produto-${product.id}-titulo`
  const descriptionId = `produto-${product.id}-descricao`

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-brand-900/65 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        className="max-h-[calc(100dvh-2rem)] w-full max-w-4xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-100 bg-white/95 px-5 py-4 backdrop-blur sm:px-7">
          <p className="text-xs font-black uppercase tracking-[.18em] text-brand-600">
            Detalhes do produto
          </p>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="grid h-11 w-11 place-items-center rounded-xl text-slate-600 transition hover:bg-brand-50 hover:text-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-500"
            aria-label="Fechar detalhes do produto"
          >
            <X aria-hidden="true" size={22} />
          </button>
        </div>

        <div className="grid gap-7 p-5 sm:p-7 lg:grid-cols-[.8fr_1.2fr] lg:gap-10">
          <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white">
            <div className="flex h-full items-center justify-center">
              <ProductImage product={product} className="h-64 sm:h-80" />
            </div>
          </div>

          <div>
            <h2
              id={titleId}
              className="text-3xl font-black leading-tight text-brand-900"
            >
              {product.name}
            </h2>
            <div className="mt-6">
              <h3 className="text-sm font-black uppercase tracking-widest text-brand-700">
                Descrição
              </h3>
              <p
                id={descriptionId}
                className="mt-3 whitespace-pre-line leading-7 text-slate-600"
              >
                {product.description}
              </p>
            </div>

            <div className="mt-6 rounded-2xl bg-brand-50 px-5 py-4">
              <h3 className="text-sm font-black uppercase tracking-widest text-brand-700">
                Tamanhos disponíveis
              </h3>
              <p className="mt-2 font-bold text-slate-700">
                {product.size || 'Tamanhos não informados'}
              </p>
            </div>

            {!!product.specifications?.length && (
              <div className="mt-7">
                <h3 className="text-sm font-black uppercase tracking-widest text-brand-700">
                  Especificações técnicas
                </h3>
                <div className="mt-3 overflow-x-auto rounded-2xl border border-slate-200">
                  <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
                    <thead className="bg-brand-900 text-white">
                      <tr>
                        <th className="px-4 py-3 font-black">PROPRIEDADE</th>
                        <th className="px-4 py-3 font-black">ESPECIFICAÇÃO</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.specifications.map((item) => (
                        <tr
                          key={`${item.property}-${item.specification}`}
                          className="border-t border-slate-200"
                        >
                          <td className="px-4 py-3 font-bold text-brand-900">
                            {item.property}
                          </td>
                          <td className="px-4 py-3 text-slate-600">
                            {item.specification}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
