import { AtSign, Clock3, MessageCircle, Phone } from 'lucide-react'
import logoBrilhoFlex from '../assets/logo_brilho_flex.svg'
import { navItems, phoneUrl, siteConfig, whatsappUrl } from '../data/site'
import { Container } from './ui'

export function Footer() {
  return (
    <footer className="bg-[#061c33] pb-24 pt-16 text-white sm:pb-10">
      <Container>
        <div className="grid gap-12 border-b border-white/10 pb-12 lg:grid-cols-[1.25fr_.8fr_1fr]">
          <div>
            <img
              src={logoBrilhoFlex}
              alt="BrilhoFlex — Higiene e Limpeza"
              width="890"
              height="326"
              className="h-16 w-auto max-w-full object-contain"
            />
            <p className="mt-5 max-w-md leading-7 text-slate-300">
              A BrilhoFlex oferece produtos para limpeza residencial, profissional, empresarial e
              automotiva, com soluções acessíveis para diferentes necessidades.
            </p>
          </div>
          <div>
            <h2 className="text-sm font-black uppercase tracking-widest text-lime">
              Links rápidos
            </h2>
            <ul className="mt-5 grid gap-3 text-sm text-slate-300">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a className="hover:text-white" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-black uppercase tracking-widest text-lime">Atendimento</h2>
            <ul className="mt-5 grid gap-4 text-sm text-slate-300">
              <li>
                <a className="flex gap-3 hover:text-white" href={whatsappUrl()}>
                  <MessageCircle size={18} /> WhatsApp: {siteConfig.whatsappDisplay}
                </a>
              </li>
              <li>
                <a className="flex gap-3 hover:text-white" href={phoneUrl()}>
                  <Phone size={18} /> Telefone: {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  className="flex gap-3 hover:text-white"
                  href={siteConfig.emailUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AtSign size={18} /> {siteConfig.emailHandle}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock3 size={18} className="shrink-0" /> {siteConfig.hours}
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-5 pt-8 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© 2026 BrilhoFlex. Todos os direitos reservados. · CNPJ: {siteConfig.cnpj}</p>
          <div className="flex gap-5">
            <a href={siteConfig.policies.privacy}>Política de Privacidade</a>
            <a href={siteConfig.policies.terms}>Termos de Uso</a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
