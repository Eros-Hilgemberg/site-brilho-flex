import { useContext } from 'react'
import { CookieConsentContext } from './cookieConsentContext'

export function useCookieConsent() {
  const context = useContext(CookieConsentContext)

  if (!context) {
    throw new Error('useCookieConsent deve ser usado dentro do provedor.')
  }

  return context
}
