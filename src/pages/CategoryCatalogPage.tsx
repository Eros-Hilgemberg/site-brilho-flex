import {
  Building2,
  CarFront,
  ChevronRight,
  Home,
  MessageCircle,
} from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { FloatingWhatsapp } from '../components/FloatingWhatsapp'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import {
  ProductGrid,
  ProductSearch,
} from '../components/catalog/ProductCatalog'
import { Button, Container } from '../components/ui'
import { categoryMap, normalizeText, type CategorySlug } from '../data/catalog'
import { categories } from '../data/content'
import { siteConfig, whatsappUrl } from '../data/site'
import { products } from '../types/products'

const categoryDetails = {
  residencial: {
    title: 'Produtos para Limpeza Residencial',
    shortTitle: 'Limpeza Residencial',
    eyebrow: 'Para sua casa',
    description:
      'Produtos para facilitar os cuidados com a casa, ajudando na limpeza de pisos, cozinhas, banheiros, superfícies e diferentes ambientes.',
    metaDescription:
      'Conheça o catálogo de produtos BrilhoFlex para limpeza residencial e encontre opções para diferentes ambientes da casa.',
    icon: Home,
    contentKey: 'residential',
  },
  profissional: {
    title: 'Produtos para Limpeza Profissional',
    shortTitle: 'Limpeza Profissional',
    eyebrow: 'Para seu negócio',
    description:
      'Soluções para empresas, comércios, condomínios, escolas, escritórios e profissionais que precisam de eficiência e economia na rotina de limpeza.',
    metaDescription:
      'Conheça o catálogo de produtos BrilhoFlex para limpeza profissional, empresarial e industrial.',
    icon: Building2,
    contentKey: 'professional',
  },
  automotiva: {
    title: 'Produtos da Linha Automotiva',
    shortTitle: 'Linha Automotiva',
    eyebrow: 'Para seu veículo',
    description:
      'Produtos para centros automotivos, oficinas, lava-carros e pessoas que desejam cuidar da limpeza e conservação de seus veículos.',
    metaDescription:
      'Conheça o catálogo de produtos BrilhoFlex para limpeza, conservação e acabamento automotivo.',
    icon: CarFront,
    contentKey: 'automotive',
  },
} as const

function useCategorySeo(categorySlug: CategorySlug) {
  const details = categoryDetails[categorySlug]

  useEffect(() => {
    const pageTitle = `${details.shortTitle} | ${siteConfig.name}`
    const pageUrl = `${siteConfig.canonicalUrl.replace(/\/$/, '')}/produtos/${categorySlug}`

    document.title = pageTitle

    let description = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    )

    if (!description) {
      description = document.createElement('meta')
      description.name = 'description'
      document.head.appendChild(description)
    }

    description.content = details.metaDescription

    const socialMetadata = [
      ['meta[property="og:title"]', 'property', 'og:title', pageTitle],
      [
        'meta[property="og:description"]',
        'property',
        'og:description',
        details.metaDescription,
      ],
      ['meta[property="og:url"]', 'property', 'og:url', pageUrl],
    ] as const

    socialMetadata.forEach(([selector, attribute, name, content]) => {
      let metadata = document.querySelector<HTMLMetaElement>(selector)

      if (!metadata) {
        metadata = document.createElement('meta')
        metadata.setAttribute(attribute, name)
        document.head.appendChild(metadata)
      }

      metadata.content = content
    })

    let canonical = document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    )

    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }

    canonical.href = pageUrl
  }, [categorySlug, details])
}

export function CategoryCatalogPage({
  categorySlug,
}: {
  categorySlug: CategorySlug
}) {
  const [searchTerm, setSearchTerm] = useState('')
  const details = categoryDetails[categorySlug]
  const categoryId = categoryMap[categorySlug]
  const Icon = details.icon
  const categoryVisual = categories.find(
    (category) => category.linkKey === details.contentKey,
  )

  useCategorySeo(categorySlug)

  const categoryProducts = useMemo(
    () => products.filter((product) => product.category === categoryId),
    [categoryId],
  )

  const filteredProducts = useMemo(() => {
    const normalizedSearch = normalizeText(searchTerm)

    if (!normalizedSearch) return categoryProducts

    return categoryProducts.filter((product) =>
      normalizeText(product.name).includes(normalizedSearch),
    )
  }, [categoryProducts, searchTerm])

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
                <li>
                  <a
                    className="transition hover:text-white"
                    href="/#categorias"
                  >
                    Produtos
                  </a>
                </li>
                <li aria-hidden="true">
                  <ChevronRight size={15} />
                </li>
                <li className="font-bold text-white">{details.shortTitle}</li>
              </ol>
            </nav>

            <div className="mt-9 grid items-center gap-10 lg:grid-cols-[1fr_.72fr]">
              <div>
                <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[.2em] text-lime">
                  <Icon aria-hidden="true" size={18} />
                  {details.eyebrow}
                </p>
                <h1 className="mt-5 max-w-3xl text-balance text-4xl font-black leading-[1.07] sm:text-5xl lg:text-6xl">
                  {details.title}
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
                  {details.description}
                </p>
                <Button href={whatsappUrl()} className="mt-8">
                  <MessageCircle aria-hidden="true" size={18} />
                  Solicitar atendimento
                </Button>
              </div>

              {categoryVisual?.image && (
                <figure className="mx-auto w-full max-w-lg overflow-hidden rounded-[2rem] border-8 border-white/10 bg-white shadow-2xl">
                  <img
                    src={categoryVisual.image}
                    alt={`Ambiente representando ${details.shortTitle.toLowerCase()}`}
                    width="800"
                    height="600"
                    fetchPriority="high"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </figure>
              )}
            </div>
          </Container>
        </section>

        <section className="section bg-paper" aria-labelledby="titulo-catalogo">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
              <div>
                <p className="text-xs font-black uppercase tracking-[.2em] text-brand-600">
                  Catálogo BrilhoFlex
                </p>
                <h2
                  id="titulo-catalogo"
                  className="mt-3 text-balance text-3xl font-black leading-tight text-brand-900 sm:text-4xl"
                >
                  Encontre o produto que você procura
                </h2>
                <p className="mt-4 max-w-xl leading-7 text-slate-600">
                  Consulte os produtos disponíveis nesta categoria e pesquise
                  pelo nome para encontrar uma opção específica.
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
              />
            </div>
          </Container>
        </section>

        <section className="bg-white py-12 sm:py-16">
          <Container>
            <div className="relative overflow-hidden rounded-[2rem] bg-brand-500 px-7 py-11 text-white sm:px-12 lg:flex lg:items-center lg:justify-between lg:gap-10">
              <div
                aria-hidden="true"
                className="absolute -right-20 -top-24 h-72 w-72 rounded-full border-[45px] border-white/10"
              />
              <div className="relative">
                <h2 className="text-2xl font-black sm:text-3xl">
                  Precisa de ajuda para escolher?
                </h2>
                <p className="mt-3 max-w-2xl leading-7 text-blue-50">
                  Informe à nossa equipe o produto ou o tipo de limpeza que você
                  procura.
                </p>
              </div>
              <Button
                href={whatsappUrl()}
                variant="light"
                className="relative mt-6 shrink-0 lg:mt-0"
              >
                <MessageCircle aria-hidden="true" size={18} />
                Falar com a BrilhoFlex
              </Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
      <FloatingWhatsapp />
    </>
  )
}
