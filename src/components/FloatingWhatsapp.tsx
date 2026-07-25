import { MessageCircle } from 'lucide-react'
import { siteConfig, whatsappUrl } from '../data/site'

export function FloatingWhatsapp() {
  return (
    <a
      href={whatsappUrl()}
      target={siteConfig.whatsappNumber ? '_blank' : undefined}
      rel={siteConfig.whatsappNumber ? 'noopener noreferrer' : undefined}
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-40 flex min-h-14 items-center gap-2 rounded-full bg-lime px-4 font-black text-white shadow-2xl transition hover:scale-105 focus-visible:outline focus-visible:outline-4 focus-visible:outline-white"
      aria-label="Precisa de ajuda? Fale com a BrilhoFlex."
    >
      <MessageCircle aria-hidden="true" />
      <span className="hidden sm:inline">Fale com a BrilhoFlex</span>
    </a>
  )
}
