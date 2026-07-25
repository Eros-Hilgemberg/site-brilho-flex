import { ChevronRight, Layers3, MessageCircle } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { FloatingWhatsapp } from '../components/FloatingWhatsapp'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import {
  ProductGrid,
  ProductSearch,
} from '../components/catalog/ProductCatalog'
import { Button, Container } from '../components/ui'
import { normalizeText } from '../data/catalog'
import { siteConfig, whatsappUrl } from '../data/site'
import { products } from '../types/products'

function useFullCatalogSeo() {
  useEffect(() => {
    const pageTitle = `Catálogo Completo | ${siteConfig.name}`
    const pageDescription =
      'Conheça o catálogo completo de produtos BrilhoFlex para limpeza residencial, profissional e automotiva.'
    const pageUrl = `${siteConfig.canonicalUrl.replace(/\/$/, '')}/produtos`

    document.title = pageTitle

    const description = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    )
    if (description) description.content = pageDescription

    const socialMetadata = [
      ['meta[property="og:title"]', pageTitle],
      ['meta[property="og:description"]', pageDescription],
      ['meta[property="og:url"]', pageUrl],
    ] as const

    socialMetadata.forEach(([selector, content]) => {
      const metadata = document.querySelector<HTMLMetaElement>(selector)
      if (metadata) metadata.content = content
    })

    const canonical = document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    )
    if (canonical) canonical.href = pageUrl
  }, [])
}

export function FullCatalogPage() {
  const [searchTerm, setSearchTerm] = useState('')

  useFullCatalogSeo()

  const filteredProducts = useMemo(() => {
    const normalizedSearch = normalizeText(searchTerm)

    if (!normalizedSearch) return products

    return products.filter((product) =>
      normalizeText(product.name).includes(normalizedSearch),
    )
  }, [searchTerm])

  return (
    <>
      <Header />
      <main id="conteudo">
        <section className="relative overflow-hidden bg-brand-900 pb-20 pt-32 text-white sm:pb-24 sm:pt-36">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_12%_20%,#009eee_0,transparent_32%),radial-gradient(circle_at_90%_15%,#00ff00_0,transparent_15%)]"
          />
          <Container className="relative">
            <nav aria-label="Navegação estrutural">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-blue-100">
                <li>
                  <a className="transition hover:text-white" href="/">
                    Início
                  </a>
                </li>
                <li aria-hidden="true">
                  <ChevronRight size={15} />
                </li>
                <li className="font-bold text-white">Catálogo completo</li>
              </ol>
            </nav>

            <div className="mt-9 grid items-center gap-10 lg:grid-cols-[1fr_.72fr]">
              <div>
                <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[.2em] text-lime">
                  <Layers3 aria-hidden="true" size={18} />
                  Produtos BrilhoFlex
                </p>
                <h1 className="mt-5 max-w-3xl text-balance text-4xl font-black leading-[1.07] sm:text-5xl lg:text-6xl">
                  Catálogo completo de produtos
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
                  Conheça todos os produtos BrilhoFlex para limpeza residencial,
                  profissional e automotiva.
                </p>
                <Button href={whatsappUrl()} className="mt-8">
                  <MessageCircle aria-hidden="true" size={18} />
                  Solicitar atendimento
                </Button>
              </div>

              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {[
                  ['Residencial', '/produtos/residencial'],
                  ['Profissional', '/produtos/profissional'],
                  ['Automotiva', '/produtos/automotiva'],
                ].map(([label, href]) => (
                  <a
                    key={href}
                    href={href}
                    className="rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-sm font-black text-white transition hover:bg-white hover:text-brand-900"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="section bg-paper" aria-labelledby="titulo-catalogo">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
              <div>
                <p className="text-xs font-black uppercase tracking-[.2em] text-brand-600">
                  Todos os produtos
                </p>
                <h2
                  id="titulo-catalogo"
                  className="mt-3 text-balance text-3xl font-black leading-tight text-brand-900 sm:text-4xl"
                >
                  Encontre o produto que você procura
                </h2>
                <p className="mt-4 max-w-xl leading-7 text-slate-600">
                  Pesquise pelo nome ou navegue por todas as linhas de produtos
                  da BrilhoFlex.
                </p>
              </div>
              <ProductSearch
                value={searchTerm}
                onChange={setSearchTerm}
                resultCount={filteredProducts.length}
              />
            </div>

            <div className="mt-10">
              <ProductGrid
                products={filteredProducts}
                searchTerm={searchTerm}
                onClearSearch={() => setSearchTerm('')}
                showCategory
              />
            </div>
          </Container>
        </section>
      </main>
      <Footer />
      <FloatingWhatsapp />
    </>
  )
}
