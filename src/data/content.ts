import {
  Building2,
  CarFront,
  HandCoins,
  Headset,
  Home,
  PackageSearch,
  ShoppingBag,
  Sparkles,
} from 'lucide-react'
import carFoam from '../assets/carro_com_espuma.webp'
import carWax from '../assets/cera_no_carro.webp'
import industrialFoam from '../assets/limpeza_industria_hero.webp'
import laundry from '../assets/maquina_roupas.webp'
import intercap from '../assets/products/intercap.webp'
import lavaroupas from '../assets/products/lava_roupas.webp'
import limpeza_a_seco from '../assets/products/pasta_limpeza_a_seco.webp'

export const differentials = [
  {
    icon: HandCoins,
    title: 'Economia para limpar mais',
    text: 'Produtos acessíveis para residências, empresas, comércios e profissionais que precisam manter seus ambientes sempre limpos.',
  },
  {
    icon: PackageSearch,
    title: 'Uma linha para cada necessidade',
    text: 'Encontre produtos para limpeza residencial, profissional, empresarial e automotiva em um só lugar.',
  },
  {
    icon: Headset,
    title: 'Ajuda para escolher o produto certo',
    text: 'Nossa equipe está disponível para orientar sobre produtos, aplicações, valores e disponibilidade.',
  },
  {
    icon: Sparkles,
    title: 'Confiança construída ao longo dos anos',
    text: 'A BrilhoFlex atua há anos oferecendo soluções de limpeza que fazem parte da rotina de diferentes tipos de clientes.',
  },
]

export const categories = [
  {
    id: 'categoria-residencial',
    icon: Home,
    image: laundry,
    eyebrow: 'Sua casa',
    title: 'Limpeza residencial',
    text: 'Produtos para facilitar os cuidados com a casa, ajudando na limpeza de pisos, cozinhas, banheiros, superfícies e diferentes ambientes.',
    items: [
      'Desinfetantes',
      'Detergentes',
      'Limpadores',
      'Álcool',
      'Sabão',
      'Sapólio',
      'Produtos para pisos e superfícies',
    ],
    button: 'Ver linha residencial',
    linkKey: 'residential' as const,
  },
  {
    id: 'categoria-profissional',
    icon: Building2,
    image: industrialFoam,
    eyebrow: 'Seu negócio',
    title: 'Limpeza profissional e empresarial',
    text: 'Soluções para empresas, comércios, condomínios, escolas, escritórios e profissionais que precisam de eficiência e economia na rotina de limpeza.',
    items: [
      'Limpadores concentrados',
      'Desengordurantes',
      'Desincrustantes',
      'Produtos para limpeza pesada',
      'Soluções para uso profissional',
    ],
    button: 'Ver linha profissional',
    linkKey: 'professional' as const,
  },
  {
    id: 'categoria-automotiva',
    icon: CarFront,
    image: carFoam,
    eyebrow: 'Seu veículo',
    title: 'Linha automotiva',
    text: 'Produtos para centros automotivos, oficinas, lava-carros e pessoas que desejam cuidar da limpeza e conservação de seus veículos.',
    items: [
      'Shampoo automotivo',
      'Desengraxantes',
      'Limpadores internos',
      'Produtos para pneus',
      'Desincrustantes',
      'Ceras',
    ],
    button: 'Ver linha automotiva',
    linkKey: 'automotive' as const,
  },
]

export const audiences = [
  {
    icon: Home,
    title: 'Para sua casa',
    text: 'Produtos práticos e acessíveis para manter os ambientes limpos, cuidados e agradáveis no dia a dia.',
  },
  {
    icon: Building2,
    title: 'Para empresas e comércios',
    text: 'Soluções para ambientes com maior circulação, ajudando a tornar a rotina de limpeza mais eficiente.',
  },
  {
    icon: Sparkles,
    title: 'Para profissionais da limpeza',
    text: 'Produtos para quem busca rendimento, praticidade e economia durante a realização dos serviços.',
  },
  {
    icon: CarFront,
    title: 'Para centros automotivos',
    text: 'Uma linha voltada à limpeza, conservação e acabamento de veículos.',
  },
]

export const products = [
  {
    image: lavaroupas,
    category: 'Limpeza residencial',
    name: 'Lava roupas BrilhoFLex',
    description:
      'Lava Roupas é um detergente líquido concentrado que remove sujeiras, manchas e odores, preservando as fibras e as cores dos tecidos.',
    pending: false,
  },
  {
    image: intercap,
    category: 'Limpeza profissional',
    name: 'Intercap (Desincrustante ácido)',
    description:
      'Intercap é um desincrustante ácido para limpezas pesadas, com fórmula altamente concentrada e excelente desempenho na remoção de sujeiras incrustadas.',
    pending: false,
  },
  {
    image: limpeza_a_seco,
    category: 'Limpeza automotiva',
    name: 'Pasta para Limpeza a Seco',
    description:
      'Pasta para Limpeza a Seco perfuma o interior dos veículos, auxilia na neutralização de odores e proporciona sensação de frescor com fragrâncias duradouras.',
    pending: false,
  },
]

export const faqs = [
  [
    'A BrilhoFlex vende para pessoas físicas?',
    'Sim. Temos produtos para limpeza residencial, indicados para os cuidados do dia a dia em diferentes ambientes da casa.',
  ],
  [
    'A empresa também atende negócios?',
    'Sim. Atendemos empresas, comércios, profissionais da limpeza, centros automotivos e outros tipos de negócios.',
  ],
  [
    'Como consultar os preços?',
    'Entre em contato pelo WhatsApp ou telefone para consultar valores, disponibilidade e condições de compra.',
  ],
  [
    'Posso solicitar ajuda para escolher um produto?',
    'Sim. Informe o tipo de ambiente ou superfície que deseja limpar para que nossa equipe possa orientar sobre as opções disponíveis.',
  ],
  [
    'A BrilhoFlex possui produtos automotivos?',
    'Sim. Contamos com uma linha destinada à limpeza, conservação e acabamento de veículos.',
  ],
  [
    'Como verificar as opções de entrega?',
    'As condições de entrega ou retirada podem variar conforme a localização e o pedido. Consulte nossa equipe durante o atendimento.',
  ],
] as const

export { carFoam, carWax, laundry, ShoppingBag }
