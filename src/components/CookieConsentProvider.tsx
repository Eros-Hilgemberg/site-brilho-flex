import {
  type ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import type { CookieConsent } from '../constants/cookies'
import {
  acceptCookies,
  getCookieConsent,
  initializeCookieConsent,
  rejectOptionalCookies,
  resetCookieConsent,
} from '../services/cookieConsent'
import { CookieConsentContext } from '../hooks/cookieConsentContext'

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<CookieConsent | null>(getCookieConsent)
  const [isBannerOpen, setIsBannerOpen] = useState(() => consent === null)

  useEffect(() => {
    initializeCookieConsent()
  }, [])

  const accept = useCallback(() => {
    acceptCookies()
    setConsent('accepted')
    setIsBannerOpen(false)
  }, [])

  const reject = useCallback(() => {
    rejectOptionalCookies()
    setConsent('rejected')
    setIsBannerOpen(false)
  }, [])

  const openPreferences = useCallback(() => {
    resetCookieConsent()
    setConsent(null)
    setIsBannerOpen(true)
  }, [])

  const value = useMemo(
    () => ({ consent, isBannerOpen, accept, reject, openPreferences }),
    [accept, consent, isBannerOpen, openPreferences, reject],
  )

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  )
}
