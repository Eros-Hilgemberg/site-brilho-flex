import { useEffect, useState } from 'react'
import { Menu, MessageCircle, X } from 'lucide-react'
import logoBrilhoFlex from '../assets/logo_brilho_flex.svg'
import { navItems, whatsappUrl } from '../data/site'
import { Button, Container } from './ui'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition ${scrolled || open ? 'border-slate-200 bg-white/95 shadow-sm backdrop-blur-lg' : 'border-white/15 bg-white/95 lg:bg-white/90'}`}
    >
      <Container className="flex h-20 items-center justify-between gap-6">
        <a
          href="#inicio"
          className="rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-500"
          aria-label="BrilhoFlex, início"
        >
          <img
            src={logoBrilhoFlex}
            alt="BrilhoFlex — Higiene e Limpeza"
            width="890"
            height="326"
            className="h-12 w-auto object-contain"
          />
        </a>
        <nav className="hidden items-center gap-5 lg:flex" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              className="text-[13px] font-bold text-slate-600 transition hover:text-brand-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-500"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button href={whatsappUrl()} arrow>
            Solicitar orçamento
          </Button>
        </div>
        <button
          type="button"
          className="grid h-12 w-12 place-items-center rounded-xl border border-slate-200 text-brand-900 lg:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </Container>
      {open && (
        <nav
          id="menu-mobile"
          className="border-t border-slate-100 bg-white px-5 pb-6 pt-3 lg:hidden"
          aria-label="Navegação mobile"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              className="block border-b border-slate-100 py-3.5 font-bold text-brand-900"
              href={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Button href={whatsappUrl()} className="mt-5 w-full" onClick={() => setOpen(false)}>
            <MessageCircle size={18} /> Falar pelo WhatsApp
          </Button>
        </nav>
      )}
    </header>
  )
}
