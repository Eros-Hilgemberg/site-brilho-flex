import {
  ArrowRight,
  AtSign,
  Check,
  Clock3,
  Headset,
  MapPin,
  MessageCircle,
  Phone,
  ShoppingBag,
  Sparkles
} from 'lucide-react'
import industrialCleaning from './assets/limpeza_industria_hero.webp'
import logoBrilhoFlex from './assets/logo_brilho_flex.svg'
import { FaqList } from './components/Faq'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import {
  Button,
  Container,
  PlaceholderVisual,
  SectionHeading,
} from './components/ui'
import {
  audiences,
  carFoam,
  categories,
  differentials,
  laundry,
  products,
} from './data/content'
import { phoneUrl, siteConfig, whatsappUrl } from './data/site'

function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-brand-900 pb-24 pt-32 text-white sm:pb-32 sm:pt-36"
    >
      <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_12%_20%,#009eee_0,transparent_30%),radial-gradient(circle_at_90%_15%,#00ff00_0,transparent_14%)]" />
      <Container className="relative grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <p className="mb-5 flex items-center gap-2 text-xs font-black uppercase tracking-[.2em] text-lime">
            <Sparkles size={16} /> Soluções de limpeza para todos os ambientes
          </p>
          <h1 className="max-w-3xl text-balance text-4xl font-black leading-[1.07] sm:text-5xl lg:text-6xl">
            Limpeza eficiente com o custo-benefício que você
            procura
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
            A BrilhoFlex oferece produtos para limpeza residencial,
            profissional, empresarial e automotiva. Soluções acessíveis para
            quem busca qualidade, praticidade e economia no dia a dia.
          </p>
          <p className="mt-5 font-extrabold text-white">
            Para sua casa. Para sua empresa. Para o seu negócio automotivo.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#produtos" arrow>
              Conhecer os produtos
            </Button>
            <Button href={whatsappUrl()} variant="light">
              Solicitar orçamento
            </Button>
          </div>
          <p className="mt-5 flex items-center gap-2 text-sm text-blue-100">
            <Headset size={17} /> Atendimento rápido para consultar produtos,
            valores e disponibilidade.
          </p>
        </div>
        <div className="mx-auto w-full max-w-xl">
          <div className="relative mx-auto h-72 w-full max-w-80 sm:h-[25rem] sm:max-w-[27.5rem] lg:h-[28rem] lg:max-w-[32.5rem]">
            <figure className="absolute left-[8%] top-0 z-10 overflow-hidden rounded-full border-6 border-lime bg-white shadow-2xl border-[8px]">
              <img
                src={carFoam}
                alt="Veículo coberto por espuma durante a limpeza automotiva"
                width="800"
                height="667"
                className="h-28 w-28 object-cover sm:h-48 sm:w-48 lg:h-50 lg:w-50"
                fetchPriority="high"
              />
            </figure>
            <figure className="absolute right-[8%] top-0 z-20 overflow-hidden rounded-full border-6 border-lime bg-white shadow-2xl border-[8px]">
              <img
                src={laundry}
                alt="Pessoa organizando roupas na lavanderia, representando a limpeza residencial"
                width="1200"
                height="800"
                className="h-28 w-28 object-cover sm:h-48 sm:w-48 lg:h-50 lg:w-50"
                fetchPriority="high"
              />
            </figure>
            <figure className="absolute left-1/2 top-[42%] z-30 -translate-x-1/2 overflow-hidden rounded-full border-6 border-lime bg-white shadow-2xl border-[8px]">
              <img
                src={industrialCleaning}
                alt="Profissional realizando limpeza em ambiente empresarial"
                width="5333"
                height="7999"
                className="h-32 w-32 object-cover object-center sm:h-52 sm:w-52 lg:h-50 lg:w-50"
                fetchPriority="high"
              />
            </figure>
          </div>
        </div>
      </Container>
      <div
        aria-hidden="true"
        className="absolute -bottom-1 left-0 h-16 w-full rounded-[50%_50%_0_0/100%_100%_0_0] bg-white sm:h-24"
      />
    </section>
  )
}

function Differentials() {
  return (
    <section className="section bg-white">
      <Container>
        <SectionHeading
          eyebrow="Por que escolher a BrilhoFlex"
          title="Produtos que facilitam a limpeza sem pesar no orçamento"
          description="Na BrilhoFlex, você encontra soluções para diferentes necessidades de limpeza, com produtos acessíveis e atendimento próximo para ajudar na sua escolha."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {differentials.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                <Icon />
              </div>
              <h3 className="mt-5 text-lg font-black text-brand-900">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
        <div className="mt-9 text-center">
          <Button href={whatsappUrl()} variant="secondary">
            <MessageCircle size={18} /> Falar com um atendente
          </Button>
        </div>
      </Container>
    </section>
  )
}

function Categories() {
  return (
    <section id="categorias" className="section bg-paper">
      <Container>
        <SectionHeading
          eyebrow="Linhas de produtos"
          title="Encontre a solução ideal para cada tipo de limpeza"
          description="Conheça nossas principais categorias e encontre produtos adequados para sua casa, empresa ou centro automotivo."
        />
        <div className="mt-14 grid gap-7 lg:grid-cols-3">
          {categories.map(
            ({
              id,
              icon: Icon,
              image,
              eyebrow,
              title,
              text,
              items,
              button,
              linkKey,
            }) => (
              <article
                id={id}
                key={id}
                className="relative scroll-mt-28 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="h-52 overflow-hidden">
                  {image ? (
                    <img
                      src={image}
                      alt={
                        title === 'Limpeza residencial'
                          ? 'Ambiente de lavanderia representando limpeza residencial'
                          : 'Veículo durante a lavagem com espuma'
                      }
                      width="600"
                      height="400"
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 hover:scale-105"
                    />
                  ) : (
                    <PlaceholderVisual label="Imagem da linha profissional" />
                  )}
                </div>
                <div className="p-7 h-full">
                  <div className="flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-500 text-white">
                      <Icon size={21} />
                    </div>
                    <p className="text-xs font-black uppercase tracking-widest text-brand-600">
                      {eyebrow}
                    </p>
                  </div>
                  <h3 className="mt-5 text-2xl font-black text-brand-900">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {text}
                  </p>
                  <ul className="mt-5 mb-10 grid gap-2 text-sm text-slate-700">
                    {items.map((item) => (
                      <li className="flex gap-2" key={item}>
                        <Check
                          size={17}
                          className="mt-0.5 shrink-0 text-brand-500"
                        />{' '}
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="absolute bottom-0  left-0 w-full px-7 pb-3">
                    <Button
                      href={siteConfig.categoryLinks[linkKey]}
                      className="w-full"
                      variant="secondary"
                      arrow
                    >
                      {button}
                    </Button>
                  </div>
                </div>
              </article>
            ),
          )}
        </div>
        <div className="mt-10 flex flex-col items-start gap-6 rounded-3xl bg-brand-900 p-7 text-white sm:p-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="text-2xl font-black">
              Não sabe qual produto escolher?
            </h3>
            <p className="mt-2 max-w-2xl text-blue-100">
              Conte para nossa equipe o que você precisa limpar e receba
              orientação para encontrar a opção mais adequada.
            </p>
          </div>
          <Button href={whatsappUrl()} className="shrink-0">
            <MessageCircle size={18} /> Pedir ajuda pelo WhatsApp
          </Button>
        </div>
      </Container>
    </section>
  )
}

function Audiences() {
  return (
    <section className="section bg-white">
      <Container>
        <SectionHeading
          eyebrow="Feito para você"
          title="Soluções para diferentes necessidades"
          description="Seja para cuidar da sua casa ou manter a rotina de limpeza de um negócio, a BrilhoFlex possui produtos para ajudar você."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map(({ icon: Icon, title, text }, index) => (
            <article
              key={title}
              className={`rounded-3xl p-7 ${index === 3 ? 'bg-brand-900 text-white' : 'bg-brand-50 text-brand-900'}`}
            >
              <Icon
                className={index === 3 ? 'text-lime' : 'text-brand-500'}
                size={30}
              />
              <h3 className="mt-6 text-xl font-black">{title}</h3>
              <p
                className={`mt-3 text-sm leading-6 ${index === 3 ? 'text-blue-100' : 'text-slate-600'}`}
              >
                {text}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-9 text-center">
          <Button href="#categorias" arrow>
            Encontrar produtos para minha necessidade
          </Button>
        </div>
      </Container>
    </section>
  )
}

function Products() {
  return (
    <section id="produtos" className="section bg-paper">
      <Container>
        <SectionHeading
          eyebrow="Seleção BrilhoFlex"
          title="Produtos em destaque"
          description="Conheça algumas das soluções mais procuradas da BrilhoFlex para diferentes tipos de limpeza."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.name}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="h-52">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.pending ? '' : product.name}
                    width="300"
                    height="400"
                    loading="lazy"
                    className="h-full w-full object-scale-down"
                  />
                ) : (
                  <PlaceholderVisual />
                )}
              </div>
              <div className="p-6">
                <p
                  className={`text-xs font-black uppercase tracking-widest ${product.pending ? 'text-amber-700' : 'text-brand-300'}`}
                >
                  {product.category}
                </p>
                <h3 className="mt-3 text-xl font-black text-brand-900">
                  {product.name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {product.description}
                </p>
                <Button
                  href={
                    product.pending
                      ? '#contato'
                      : whatsappUrl(
                        `Olá! Gostaria de saber mais sobre o ${product.name}.`,
                      )
                  }
                  variant="secondary"
                  className="mt-6 w-full"
                >
                  {product.pending ? 'Conteúdo a substituir' : 'Ver detalhes'}{' '}
                  <ArrowRight size={16} />
                </Button>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-9 text-center">
          <Button href={siteConfig.catalogUrl} arrow>
            Ver catálogo completo
          </Button>
        </div>
      </Container>
    </section>
  )
}

function CommercialBanner() {
  return (
    <section className="bg-white py-12">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-brand-500 px-7 py-12 text-white sm:px-12 lg:px-16">
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-24 h-72 w-72 rounded-full border-[45px] border-white/10"
          />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="max-w-2xl text-3xl font-black">
                Produtos de limpeza para sua rotina, empresa ou negócio
              </h2>
              <p className="mt-4 max-w-2xl text-blue-50">
                Encontre soluções acessíveis para diferentes ambientes e conte
                com nossa equipe para consultar valores, disponibilidade e
                formas de compra.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Button href={whatsappUrl()}>Solicitar orçamento</Button>
              <Button href="#produtos" variant="light">
                Ver todos os produtos
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

function About() {
  return (
    <section id="sobre" className="section bg-white">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div className="relative">
          <img
            src={logoBrilhoFlex}
            alt="Área de lavanderia limpa e organizada"
            width="748"
            height="695"
            loading="lazy"
            className="aspect-[5/4] w-full rounded-[2rem] object-contain shadow-soft"
          />
          <div className="absolute -bottom-6 right-5 rounded-2xl bg-lime p-5 text-white shadow-soft sm:right-[-1rem]">
            <Sparkles />
            <p className="mt-2 text-sm font-black">
              Limpar. Cuidar.
              <br />
              Economizar.
            </p>
          </div>
        </div>
        <div>
          <SectionHeading
            align="left"
            eyebrow="Sobre a BrilhoFlex"
            title="Experiência, economia e compromisso com a limpeza"
          />
          <div className="mt-6 space-y-4 leading-7 text-slate-600">
            <p>
              A BrilhoFlex atua há anos no mercado de produtos de limpeza,
              oferecendo soluções para residências, empresas, profissionais e
              centros automotivos.
            </p>
            <p>
              Ao longo dessa trajetória, buscamos atender diferentes
              necessidades com produtos acessíveis, atendimento próximo e opções
              que proporcionem um bom equilíbrio entre qualidade, eficiência e
              preço.
            </p>
            <p>
              Nosso compromisso é ajudar cada cliente a encontrar produtos
              adequados para sua rotina, seja para cuidar da própria casa,
              manter uma empresa limpa ou atender às demandas de um negócio
              profissional.
            </p>
          </div>
          <blockquote className="mt-6 border-l-4 border-brand-500 pl-5 text-lg font-black text-brand-900">
            BrilhoFlex: soluções que limpam, cuidam e ajudam você a economizar.
          </blockquote>
          <Button href="#produtos" className="mt-7" arrow>
            Conhecer nossos produtos
          </Button>
        </div>
      </Container>
    </section>
  )
}

function HowToBuy() {
  const steps = [
    {
      icon: ShoppingBag,
      title: 'Escolha os produtos',
      text: 'Navegue pelas categorias e encontre os produtos mais adequados para sua necessidade.',
    },
    {
      icon: MessageCircle,
      title: 'Entre em contato',
      text: 'Envie uma mensagem pelo WhatsApp ou ligue para nossa equipe informando os produtos de interesse.',
    },
    {
      icon: Headset,
      title: 'Receba o atendimento',
      text: 'Consulte valores, disponibilidade, formas de pagamento e opções de entrega ou retirada.',
    },
  ]
  return (
    <section id="como-comprar" className="section bg-brand-900 text-white">
      <Container>
        <SectionHeading
          light
          eyebrow="Passo a passo"
          title="Comprar na BrilhoFlex é simples"
          description="Escolha os produtos e fale diretamente com nossa equipe para receber todas as informações necessárias."
        />
        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map(({ icon: Icon, title, text }, i) => (
            <li
              key={title}
              className="relative rounded-3xl border border-white/15 bg-white/5 p-7"
            >
              <span className="absolute right-6 top-5 text-5xl font-black text-white/10">
                0{i + 1}
              </span>
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-lime text-white">
                <Icon />
              </div>
              <h3 className="mt-6 text-xl font-black">
                {i + 1}. {title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-blue-100">{text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href={whatsappUrl()}>
            <MessageCircle size={18} /> Solicitar atendimento pelo WhatsApp
          </Button>
          <Button href={siteConfig.catalogUrl} variant="light">
            Acessar catálogo
          </Button>
        </div>
      </Container>
    </section>
  )
}

function Contact() {
  const details = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      text: siteConfig.whatsappDisplay,
      href: whatsappUrl(),
    },
    {
      icon: Phone,
      title: 'Telefone',
      text: siteConfig.phoneDisplay,
      href: phoneUrl(),
    },
    {
      icon: AtSign,
      title: 'Email',
      text: siteConfig.emailHandle,
      href: siteConfig.emailUrl,
    },
    { icon: Clock3, title: 'Horário', text: siteConfig.hours },
    { icon: MapPin, title: 'Endereço', text: siteConfig.address },
  ]
  return (
    <section id="contato" className="section bg-paper">
      <Container className="grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Atendimento"
            title="Fale com a BrilhoFlex"
            description="Precisa de ajuda para escolher um produto, consultar preços ou solicitar um orçamento? Entre em contato com nossa equipe."
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={whatsappUrl()}>
              <MessageCircle size={18} /> Chamar no WhatsApp
            </Button>
            <Button href={phoneUrl()} variant="secondary">
              <Phone size={18} /> Ligar para a BrilhoFlex
            </Button>
          </div>
          <p className="mt-5 text-sm text-slate-600">
            Conte o que você precisa e nossa equipe ajudará a encontrar os
            produtos mais adequados.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {details.map(({ icon: Icon, title, text, href }, index) => {
            const content = (
              <>
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="font-black text-brand-900">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {text}
                  </p>
                </div>
              </>
            )
            return href ? (
              <a
                key={title}
                href={href}
                target={title === 'Instagram' ? '_blank' : undefined}
                rel={title === 'Instagram' ? 'noopener noreferrer' : undefined}
                className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-brand-500"
              >
                {content}
              </a>
            ) : (
              <article
                key={title}
                className={`flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 ${index === 4 ? 'sm:col-span-2' : ''}`}
              >
                {content}
              </article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

function App() {
  return (
    <>
      <Header />
      <main id="conteudo">
        <Hero />
        <Differentials />
        <Categories />
        <Audiences />
        <Products />
        <CommercialBanner />
        <About />
        <HowToBuy />
        <section className="section bg-white">
          <Container>
            <SectionHeading
              eyebrow="Dúvidas frequentes"
              title="Perguntas frequentes"
            />
            <FaqList />
            <div className="mt-9 text-center">
              <Button href={whatsappUrl()} variant="secondary">
                <MessageCircle size={18} /> Tirar uma dúvida pelo WhatsApp
              </Button>
            </div>
          </Container>
        </section>
        <Contact />
        <section className="bg-brand-500 py-20 text-white">
          <Container className="text-center">
            <SectionHeading
              light
              eyebrow="Vamos começar?"
              title="Encontre a solução certa para sua limpeza"
              description="Produtos para sua casa, empresa ou centro automotivo, com variedade, atendimento próximo e excelente custo-benefício."
            />
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href={whatsappUrl()}>Solicitar orçamento agora</Button>
              <Button href={siteConfig.catalogUrl} variant="light">
                Explorar o catálogo
              </Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
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
    </>
  )
}

export default App
