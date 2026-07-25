import {
  COOKIE_CONSENT_KEY,
  type CookieConsent,
  cookieConsentValues,
} from '../constants/cookies'

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
    brilhoFlexGoogleScript?: Promise<void>
    brilhoFlexGoogleTagsConfigured?: boolean
  }
}

type GoogleConsentStatus = 'denied' | 'granted'

function isCookieConsent(value: string | null): value is CookieConsent {
  return cookieConsentValues.some((consent) => consent === value)
}

function getGoogleConsentSettings(status: GoogleConsentStatus) {
  return {
    analytics_storage: status,
    ad_storage: status,
    ad_user_data: status,
    ad_personalization: status,
  }
}

function getGtag() {
  window.dataLayer ??= []
  window.gtag ??= (...args: unknown[]) => window.dataLayer?.push(args)
  return window.gtag
}

function updateGoogleConsent(
  status: GoogleConsentStatus,
  command: 'default' | 'update',
) {
  getGtag()('consent', command, getGoogleConsentSettings(status))
}

function getGoogleTagIds() {
  const ids = [
    import.meta.env.VITE_GOOGLE_ADS_ID,
    import.meta.env.VITE_GOOGLE_ANALYTICS_ID,
  ].filter((id): id is string => Boolean(id))

  return [...new Set(ids)].filter(
    (id) => /^(AW-\d+|G-[A-Z0-9]+)$/i.test(id) && !/X{3,}/i.test(id),
  )
}

function loadGoogleTags(ids: string[]) {
  if (!ids.length || window.brilhoFlexGoogleScript) {
    return window.brilhoFlexGoogleScript ?? Promise.resolve()
  }

  const scriptId = 'brilhoflex-google-tag'
  const existingScript = document.getElementById(scriptId)

  if (existingScript) return Promise.resolve()

  window.brilhoFlexGoogleScript = new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.id = scriptId
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(ids[0])}`
    script.onload = () => resolve()
    script.onerror = () =>
      reject(new Error('Não foi possível carregar as tags do Google.'))
    document.head.appendChild(script)
  })

  return window.brilhoFlexGoogleScript
}

function enableGoogleTags() {
  updateGoogleConsent('granted', 'update')

  const ids = getGoogleTagIds()
  void loadGoogleTags(ids)
    .then(() => {
      if (!ids.length || window.brilhoFlexGoogleTagsConfigured) return
      window.brilhoFlexGoogleTagsConfigured = true
      const gtag = getGtag()
      gtag('js', new Date())
      ids.forEach((id) => gtag('config', id))
    })
    .catch(() => undefined)
}

export function getCookieConsent(): CookieConsent | null {
  try {
    const value = window.localStorage.getItem(COOKIE_CONSENT_KEY)
    return isCookieConsent(value) ? value : null
  } catch {
    return null
  }
}

export function saveCookieConsent(consent: CookieConsent) {
  try {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, consent)
  } catch {
    // O site continua utilizável caso o armazenamento esteja indisponível.
  }
}

export function initializeCookieConsent() {
  updateGoogleConsent('denied', 'default')

  if (getCookieConsent() === 'accepted') enableGoogleTags()
}

export function acceptCookies() {
  saveCookieConsent('accepted')
  enableGoogleTags()
}

export function rejectOptionalCookies() {
  saveCookieConsent('rejected')
  updateGoogleConsent('denied', 'update')
}

export function resetCookieConsent() {
  try {
    window.localStorage.removeItem(COOKIE_CONSENT_KEY)
  } catch {
    // O próximo carregamento exibirá o aviso se o navegador permitir salvar.
  }
  updateGoogleConsent('denied', 'update')
}
