import { createContext } from 'react'
import type { CookieConsent } from '../constants/cookies'

export type CookieConsentContextValue = {
  consent: CookieConsent | null
  isBannerOpen: boolean
  accept: () => void
  reject: () => void
  openPreferences: () => void
}

export const CookieConsentContext =
  createContext<CookieConsentContextValue | null>(null)
