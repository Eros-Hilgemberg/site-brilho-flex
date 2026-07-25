import { ChevronLeft } from 'lucide-react'
import { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { FloatingWhatsapp } from '../components/FloatingWhatsapp'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Container } from '../components/ui'
import { siteConfig } from '../data/site'

type LegalDocumentPageProps = {
  content: string
  description: string
  path: string
}

function useLegalDocumentSeo(description: string, path: string) {
  useEffect(() => {
    const pageTitle = path.includes('termos')
      ? `Termos de Uso | ${siteConfig.name}`
      : `Política de Privacidade | ${siteConfig.name}`
    const pageUrl = `${siteConfig.canonicalUrl.replace(/\/$/, '')}${path}`

    document.title = pageTitle

    const metaDescription = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    )
    if (metaDescription) metaDescription.content = description

    const canonical = document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    )
    if (canonical) canonical.href = pageUrl
  }, [description, path])
}

export function LegalDocumentPage({
  content,
  description,
  path,
}: LegalDocumentPageProps) {
  useLegalDocumentSeo(description, path)

  return (
    <>
      <Header />
      <main id="conteudo" className="bg-paper pb-16 pt-28 sm:pt-32">
        <Container>
          <a
            href="/"
            className="inline-flex min-h-11 items-center gap-2 rounded-lg px-1 text-sm font-bold text-brand-700 transition hover:text-brand-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-500"
          >
            <ChevronLeft aria-hidden="true" size={18} /> Voltar ao início
          </a>
          <article className="mx-auto mt-5 max-w-4xl rounded-3xl bg-white px-6 py-8 shadow-soft sm:px-10 sm:py-12">
            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <h1 className="text-3xl font-black text-brand-900 sm:text-4xl">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="mt-10 text-2xl font-black text-brand-900">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="mt-8 text-xl font-black text-brand-900">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="mt-5 leading-7 text-slate-600">{children}</p>
                ),
                ul: ({ children }) => (
                  <ul className="mt-5 list-disc space-y-2 pl-6 text-slate-600">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="mt-5 list-decimal space-y-2 pl-6 text-slate-600">
                    {children}
                  </ol>
                ),
                a: ({ children, href, ...props }) => {
                  const isExternal = href?.startsWith('http')
                  return (
                    <a
                      {...props}
                      href={href}
                      className="font-bold text-brand-700 underline underline-offset-2"
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noopener noreferrer' : undefined}
                    >
                      {children}
                    </a>
                  )
                },
              }}
            >
              {content}
            </ReactMarkdown>
          </article>
        </Container>
      </main>
      <Footer />
      <FloatingWhatsapp />
    </>
  )
}
