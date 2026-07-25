export const COOKIE_CONSENT_KEY = 'cookie-consent'

export const cookieConsentValues = ['accepted', 'rejected'] as const

export type CookieConsent = (typeof cookieConsentValues)[number]
