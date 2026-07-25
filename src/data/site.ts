export const siteConfig = {
  name: 'BrilhoFlex',

  whatsappDisplay: '(42) 8417-0663',
  whatsappNumber: '554284170663',
  whatsappMessage:
    'Olá! Gostaria de saber mais sobre os produtos da BrilhoFlex.',
  phoneDisplay: '(42) 8417-0663',
  phoneNumber: '554284170663',
  emailHandle: 'brilhoflex@hotmail.com',
  emailUrl: 'mailto:brilhoflex@hotmail.com',
  address: 'BR-277, km 248 - s/n - Irati, PR, 84502-170',
  hours: 'Segunda a sexta-feira, das 8h às 18h.',
  cnpj: '05.250.144/0001-10',
  canonicalUrl: 'https://www.brilhoflex.com.br/',
  catalogUrl: '/produtos',
  categoryLinks: {
    residential: '/produtos/residencial',
    professional: '/produtos/profissional',
    automotive: '/produtos/automotiva',
  },
  policies: { privacy: '/politica-de-privacidade', terms: '/termos-de-uso' },
} as const

export function whatsappUrl(message: string = siteConfig.whatsappMessage) {
  const digits = siteConfig.whatsappNumber.replace(/\D/g, '')
  return digits
    ? `https://wa.me/${digits}?text=${encodeURIComponent(message)}`
    : '#contato'
}
export function whatsappUrlProduct(
  productName: string,
  message: string = `Olá! Gostaria de saber mais sobre o produto "${productName}" da BrilhoFlex e solicitar mais informações.`
) {
  const digits = siteConfig.whatsappNumber.replace(/\D/g, '')
  return digits
    ? `https://wa.me/${digits}?text=${encodeURIComponent(message)}`
    : '#contato'
}

export function phoneUrl() {
  const digits = siteConfig.phoneNumber.replace(/\D/g, '')
  return digits ? `tel:${digits}` : '#contato'
}

export const navItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Categorias', href: '#categorias' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Sobre a BrilhoFlex', href: '#sobre' },
  { label: 'Como comprar', href: '#como-comprar' },
  { label: 'Contato', href: '#contato' },
] as const

export function homeSectionUrl(href: string) {
  return window.location.pathname === '/' ? href : `/${href}`
}
