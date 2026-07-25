import { useCookieConsent } from '../../hooks/useCookieConsent'
import { siteConfig } from '../../data/site'

export function CookieBanner() {
  const { accept, isBannerOpen, reject } = useCookieConsent()

  if (!isBannerOpen) return null

  return (
    <section
      className="fixed inset-x-0 bottom-0 z-[60] p-3 sm:p-5"
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-description"
    >
      <div className="mx-auto max-w-6xl rounded-2xl border border-brand-100 bg-white p-5 shadow-2xl sm:p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <h2
              id="cookie-banner-title"
              className="text-lg font-black text-brand-900"
            >
              Sua privacidade importa
            </h2>
            <p
              id="cookie-banner-description"
              className="mt-2 text-sm leading-6 text-slate-600"
            >
              Utilizamos cookies para melhorar sua experiência, analisar o
              tráfego do site e medir o desempenho de campanhas. Você pode
              aceitar todos os cookies ou recusar os opcionais. Consulte a{' '}
              <a
                className="font-bold text-brand-700 underline underline-offset-2"
                href={siteConfig.policies.privacy}
              >
                Política de Privacidade
              </a>{' '}
              e os{' '}
              <a
                className="font-bold text-brand-700 underline underline-offset-2"
                href={siteConfig.policies.terms}
              >
                Termos de Uso
              </a>
              .
            </p>
          </div>
          <div className="grid shrink-0 gap-3 sm:grid-cols-2">
            <button
              type="button"
              className="min-h-12 rounded-xl border border-brand-500 bg-white px-5 text-sm font-extrabold text-brand-700 transition hover:bg-brand-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
              onClick={reject}
            >
              Recusar opcionais
            </button>
            <button
              type="button"
              className="min-h-12 rounded-xl bg-lime px-5 text-sm font-extrabold text-white transition hover:bg-[#00a900] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
              onClick={accept}
            >
              Aceitar cookies
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
