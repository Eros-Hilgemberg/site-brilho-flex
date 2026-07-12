import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 ${className}`}>{children}</div>
}

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: 'primary' | 'secondary' | 'light'; arrow?: boolean }
export function Button({ children, className = '', variant = 'primary', arrow = false, ...props }: ButtonProps) {
  const variants = {
    primary: 'bg-lime text-white hover:bg-[#00d900] shadow-lg shadow-brand-900/10',
    secondary: 'border border-brand-500/25 bg-white text-brand-700 hover:border-brand-500 hover:bg-brand-50',
    light: 'border border-white/40 bg-white/10 text-white hover:bg-white hover:text-brand-900',
  }
  return <a className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-extrabold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime ${variants[variant]} ${className}`} {...props}>{children}{arrow && <ArrowRight aria-hidden="true" size={17} />}</a>
}

export function SectionHeading({ eyebrow, title, description, light = false, align = 'center' }: { eyebrow?: string; title: string; description?: string; light?: boolean; align?: 'center' | 'left' }) {
  return <div className={`${align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'} ${light ? 'text-white' : 'text-brand-900'}`}>
    {eyebrow && <p className={`mb-3 text-xs font-black uppercase tracking-[.22em] ${light ? 'text-lime' : 'text-brand-600'}`}>{eyebrow}</p>}
    <h2 className="text-balance text-3xl font-black leading-tight sm:text-4xl lg:text-[2.7rem]">{title}</h2>
    {description && <p className={`mt-5 text-base leading-7 sm:text-lg ${light ? 'text-blue-100' : 'text-slate-600'}`}>{description}</p>}
  </div>
}

export function PlaceholderVisual({ label = 'Imagem do produto' }: { label?: string }) {
  return <div className="grid h-full min-h-52 place-items-center bg-[radial-gradient(circle_at_30%_30%,#d6f3ff,transparent_40%),linear-gradient(135deg,#f8fdff,#e8f7fd)] p-6 text-center">
    <div><SparkleMark /><p className="mt-4 text-xs font-bold uppercase tracking-[.18em] text-brand-700">{label}<br /><span className="font-medium text-slate-500">conteúdo pendente</span></p></div>
  </div>
}

export function SparkleMark() {
  return <div aria-hidden="true" className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-brand-500 text-2xl font-black text-white shadow-soft">B<span className="text-lime">✦</span></div>
}
