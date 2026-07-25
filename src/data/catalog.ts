export const categoryMap = {
  residencial: '#categoria-residencial',
  profissional: '#categoria-profissional',
  automotiva: '#categoria-automotiva',
} as const

export type CategorySlug = keyof typeof categoryMap

export const categoryLabels = {
  '#categoria-residencial': 'Limpeza residencial',
  '#categoria-profissional': 'Limpeza profissional',
  '#categoria-automotiva': 'Linha automotiva',
} as const

export function isFullCatalogPath(pathname: string) {
  return (pathname.replace(/\/+$/, '') || '/') === '/produtos'
}

export function getCategorySlug(pathname: string): CategorySlug | null {
  const normalizedPath = pathname.replace(/\/+$/, '') || '/'
  const match = normalizedPath.match(/^\/produtos\/([^/]+)$/)
  const slug = match?.[1]

  return slug && slug in categoryMap ? (slug as CategorySlug) : null
}

export function normalizeText(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
}
