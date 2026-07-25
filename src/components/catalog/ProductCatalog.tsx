import { ImageOff, MessageCircle, PackageSearch, Search, X } from 'lucide-react'
import { useRef, useState } from 'react'
import { categoryLabels } from '../../data/catalog'
import { whatsappUrl } from '../../data/site'
import type { Products } from '../../types/products'
import { Button } from '../ui'

const productImageModules = import.meta.glob('../../assets/products/*', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>

function resolveProductImage(imagePath: string) {
  const fileName = imagePath.split('/').pop()

  if (!fileName) return ''

  const localImage = Object.entries(productImageModules).find(([path]) =>
    path.endsWith(`/${fileName}`),
  )

  return localImage?.[1] ?? imagePath
}

function ImagePlaceholder() {
  return (
    <div className="grid h-full w-full place-items-center bg-[radial-gradient(circle_at_30%_30%,#d6f3ff,transparent_40%),linear-gradient(135deg,#f8fdff,#e8f7fd)] p-6 text-center text-brand-700">
      <div>
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-white shadow-sm">
          <ImageOff aria-hidden="true" size={26} />
        </div>
        <p className="mt-4 text-xs font-bold uppercase tracking-[.16em]">
          Imagem indisponível
        </p>
      </div>
    </div>
  )
}

export function ProductImage({ product }: { product: Products }) {
  const imageSource = resolveProductImage(product.imagePath)
  const [hasError, setHasError] = useState(!imageSource)

  return (
    <div className="h-60 overflow-hidden bg-white">
      {hasError ? (
        <ImagePlaceholder />
      ) : (
        <img
          src={imageSource}
          alt={product.name}
          width="600"
          height="600"
          loading="lazy"
          decoding="async"
          className="h-full w-full object-contain p-4"
          onError={() => setHasError(true)}
        />
      )}
    </div>
  )
}

export function ProductCard({
  product,
  showCategory = false,
}: {
  product: Products
  showCategory?: boolean
}) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <ProductImage product={product} />
      <div className="flex flex-1 flex-col border-t border-slate-100 p-6">
        {showCategory && (
          <p className="mb-3 text-xs font-black uppercase tracking-widest text-brand-600">
            {categoryLabels[product.category]}
          </p>
        )}
        <h3 className="text-xl font-black leading-tight text-brand-900">
          {product.name}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
          {product.descriptionShort}
        </p>
        <div className="mt-5 rounded-xl bg-brand-50 px-4 py-3">
          <p className="text-xs font-black uppercase tracking-widest text-brand-700">
            Tamanhos disponíveis
          </p>
          <p className="mt-1 text-sm font-bold text-slate-700">
            {product.size || 'Tamanhos não informados'}
          </p>
        </div>
        <Button
          href={whatsappUrl(
            `Olá! Gostaria de saber mais sobre o produto ${product.name}.`,
          )}
          className="mt-5 w-full"
          variant="secondary"
        >
          <MessageCircle aria-hidden="true" size={17} />
          Consultar produto
        </Button>
      </div>
    </article>
  )
}

export function ProductSearch({
  value,
  onChange,
  resultCount,
}: {
  value: string
  onChange: (value: string) => void
  resultCount: number
}) {
  const inputRef = useRef<HTMLInputElement>(null)

  function clearSearch() {
    onChange('')
    inputRef.current?.focus()
  }

  return (
    <form
      role="search"
      className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:p-4"
      onSubmit={(event) => event.preventDefault()}
    >
      <label
        className="mb-2 block text-sm font-black text-brand-900"
        htmlFor="pesquisa-produtos"
      >
        Pesquisar produtos
      </label>
      <div className="flex min-h-12 items-center gap-3 rounded-xl border border-slate-300 bg-white px-4 transition focus-within:border-brand-500 focus-within:ring-4 focus-within:ring-brand-100">
        <Search
          aria-hidden="true"
          className="shrink-0 text-brand-600"
          size={20}
        />
        <input
          ref={inputRef}
          id="pesquisa-produtos"
          type="search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Digite o nome de um produto"
          autoComplete="off"
          className="min-w-0 flex-1 bg-transparent py-3 text-base text-slate-800 outline-none placeholder:text-slate-400"
        />
        {value && (
          <button
            type="button"
            onClick={clearSearch}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-500"
            aria-label="Limpar pesquisa"
          >
            <X aria-hidden="true" size={19} />
          </button>
        )}
      </div>
      <p className="mt-2 text-sm text-slate-500" aria-live="polite">
        {resultCount}{' '}
        {resultCount === 1 ? 'produto encontrado' : 'produtos encontrados'}
      </p>
    </form>
  )
}

export function EmptyProductsState({
  searchTerm,
  onClear,
}: {
  searchTerm: string
  onClear: () => void
}) {
  const trimmedSearch = searchTerm.trim()

  return (
    <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center">
      <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-brand-50 text-brand-600">
        <PackageSearch aria-hidden="true" size={28} />
      </div>
      <h3 className="mt-5 text-xl font-black text-brand-900">
        {trimmedSearch
          ? `Nenhum produto encontrado para “${trimmedSearch}”.`
          : 'Nenhum produto disponível nesta categoria.'}
      </h3>
      {trimmedSearch && (
        <button
          type="button"
          onClick={onClear}
          className="mt-5 min-h-11 rounded-xl border border-brand-500/25 bg-white px-5 text-sm font-extrabold text-brand-700 transition hover:border-brand-500 hover:bg-brand-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
        >
          Limpar pesquisa
        </button>
      )}
    </div>
  )
}

export function ProductGrid({
  products,
  searchTerm,
  onClearSearch,
  showCategory = false,
}: {
  products: Products[]
  searchTerm: string
  onClearSearch: () => void
  showCategory?: boolean
}) {
  if (products.length === 0) {
    return (
      <EmptyProductsState searchTerm={searchTerm} onClear={onClearSearch} />
    )
  }

  return (
    <div className="grid items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          showCategory={showCategory}
        />
      ))}
    </div>
  )
}
