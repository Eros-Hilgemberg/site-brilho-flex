# Prompt para construção da Landing Page da BrilhoFlex

## Instrução principal

Atue como um **desenvolvedor Front-end sênior, especialista em UI/UX, acessibilidade, SEO técnico, performance e páginas de alta conversão**.

Sua tarefa é **projetar e implementar uma landing page institucional e comercial para a BrilhoFlex**, uma empresa de produtos de limpeza que atende consumidores residenciais, empresas, profissionais da limpeza e negócios do setor automotivo.

Não entregue apenas um plano ou exemplos isolados. **Analise o projeto existente, implemente a página completa, crie os componentes necessários, configure os estilos, garanta responsividade e deixe a aplicação pronta para execução.**

---

## 1. Regras fundamentais

1. Antes de alterar qualquer arquivo, analise a estrutura, as dependências, os padrões de código e os componentes já existentes no projeto.
2. Preserve a stack, a arquitetura e o padrão visual existentes, quando houver.
3. Caso o projeto esteja vazio, utilize:
   - React;
   - TypeScript;
   - Tailwind CSS;
   - Lucide React para ícones.
4. Não utilize bibliotecas desnecessárias.
5. Não invente informações comerciais, números, certificações, depoimentos, clientes, preços, promoções, métricas, endereços ou diferenciais que não estejam descritos neste documento.
6. Campos ainda não informados devem permanecer centralizados em um arquivo de configuração e ser apresentados como placeholders fáceis de substituir.
7. Todo o conteúdo visível deve estar em **português do Brasil**.
8. Não use textos genéricos em latim.
9. Não altere o sentido das copys fornecidas.
10. É permitido realizar apenas pequenos ajustes de pontuação, quebra de linha e comprimento visual, sem acrescentar novas alegações.
11. Não use imagens externas aleatórias de produtos. Priorize os assets existentes no projeto.
12. Quando uma imagem ainda não estiver disponível, use um placeholder visual elegante e claramente substituível, sem representar um produto fictício como real.
13. A página deve ser criada com foco em:
    - apresentação da marca;
    - navegação pelo catálogo;
    - geração de contatos;
    - solicitação de orçamento;
    - conversão pelo WhatsApp;
    - futura utilização em campanhas do Google Ads.

---

## 2. Objetivo da página

A landing page deve comunicar que a BrilhoFlex oferece soluções de limpeza com **qualidade, praticidade, economia e bom custo-benefício**, atendendo quatro públicos principais:

- consumidores residenciais;
- empresas e comércios;
- profissionais da limpeza;
- oficinas, lava-carros e centros automotivos.

As principais ações de conversão devem ser:

- conhecer os produtos;
- explorar as categorias;
- acessar o catálogo;
- solicitar orçamento;
- consultar valores;
- pedir ajuda para escolher um produto;
- falar pelo WhatsApp;
- ligar para a empresa.

---

## 3. Direção visual

Crie uma interface profissional, responsiva, moderna, limpa e comercial, compatível com o segmento de produtos de limpeza.

### Cores bases do design

- Blue: #009EEEff
- Lime: #00FF00ff
- White: #F5F5F5

### Características esperadas

- Visual leve, organizado e confiável;
- Uso consistente da identidade visual existente no projeto;
- Se não houver identidade definida, crie uma base neutra que possa ser personalizada facilmente;
- Hierarquia tipográfica clara;
- Bom contraste;
- Espaçamento generoso;
- Cantos suavemente arredondados;
- Cards bem definidos;
- Ícones discretos;
- Botões de ação com destaque;
- Alternância sutil de fundos entre as seções;
- Uso de elementos visuais que remetam a limpeza, brilho, cuidado, economia e praticidade;
- Aparência profissional, sem excesso de efeitos ou animações.

### Responsividade

A página deve funcionar corretamente em:

- celulares pequenos;
- celulares grandes;
- tablets;
- notebooks;
- desktops;
- telas ultrawide.

Não permita:

- conteúdo cortado;
- rolagem horizontal;
- botões fora da tela;
- textos excessivamente comprimidos;
- cards desalinhados;
- imagens deformadas.

### Animações

Utilize animações leves e opcionais, respeitando `prefers-reduced-motion`.

As animações não podem prejudicar:

- leitura;
- acessibilidade;
- performance;
- estabilidade do layout;
- pontuação do Lighthouse.

---

## 4. Arquitetura e componentes

Organize a implementação em componentes reutilizáveis. Uma sugestão de estrutura é:

```text
src/
  app/
    page.tsx
    layout.tsx
  components/
    layout/
      Header.tsx
      Footer.tsx
      MobileMenu.tsx
    sections/
      Hero.tsx
      Differentials.tsx
      ProductCategories.tsx
      CustomerSolutions.tsx
      FeaturedProducts.tsx
      CommercialBanner.tsx
      About.tsx
      HowToBuy.tsx
      FAQ.tsx
      Contact.tsx
      FinalCTA.tsx
    ui/
      Button.tsx
      SectionHeading.tsx
      CategoryCard.tsx
      ProductCard.tsx
      WhatsAppButton.tsx
      Container.tsx
  data/
    site.ts
    categories.ts
    products.ts
    faq.ts
  types/
    index.ts
```

Adapte essa estrutura ao projeto existente. Não reorganize um projeto consolidado sem necessidade.

### Dados editáveis

Centralize em arquivos de configuração:

- telefone;
- WhatsApp;
- mensagem padrão do WhatsApp;
- Instagram;
- endereço;
- horário de atendimento;
- CNPJ;
- links das categorias;
- lista de produtos em destaque;
- informações institucionais;
- links de políticas;
- dados básicos de SEO.

Evite repetir essas informações diretamente em vários componentes.

---

## 5. Estrutura da landing page

Implemente as seções abaixo na ordem apresentada.

---

### 5.1. Cabeçalho

O cabeçalho deve permanecer visível durante a rolagem, com fundo adequado, sombra ou borda sutil após o scroll.

#### Conteúdo

- Logo da BrilhoFlex;
- Menu:
  - Início;
  - Categorias;
  - Produtos;
  - Sobre a BrilhoFlex;
  - Como comprar;
  - Contato.
- Botão principal:
  - **Solicitar orçamento**
- Alternativa:
  - **Falar pelo WhatsApp**

#### Comportamentos

- Use navegação por âncoras com rolagem suave;
- Compense a altura do cabeçalho ao navegar por âncoras;
- No mobile, utilize menu acessível;
- O menu deve fechar após a seleção de um item;
- O estado de foco deve ser visível;
- O botão de conversão deve continuar fácil de acessar no mobile.

---

### 5.2. Hero

#### Texto de apoio

**Soluções de limpeza para todos os ambientes**

#### Título principal

**Limpeza eficiente com o custo-benefício que você procura**

#### Descrição

A BrilhoFlex oferece produtos para limpeza residencial, profissional, empresarial e automotiva. Soluções acessíveis para quem busca qualidade, praticidade e economia no dia a dia.

#### Subtítulo

**Para sua casa. Para sua empresa. Para o seu negócio automotivo.**

#### Botões

- Primário: **Conhecer os produtos**
- Secundário: **Solicitar orçamento**

#### Texto de apoio próximo aos botões

Atendimento rápido para consultar produtos, valores e disponibilidade.

#### Elementos visuais

Apresente, quando os assets estiverem disponíveis, produtos das três principais linhas:

- limpeza residencial;
- limpeza profissional;
- limpeza automotiva.

Adicione um selo visual discreto:

**Qualidade, economia e praticidade**

A composição do Hero deve continuar legível mesmo quando ainda não houver imagens definitivas.

---

### 5.3. Diferenciais

#### Título

**Produtos que facilitam a limpeza sem pesar no orçamento**

#### Descrição

Na BrilhoFlex, você encontra soluções para diferentes necessidades de limpeza, com produtos acessíveis e atendimento próximo para ajudar na sua escolha.

#### Cards

**Economia para limpar mais**

Produtos acessíveis para residências, empresas, comércios e profissionais que precisam manter seus ambientes sempre limpos.

**Uma linha para cada necessidade**

Encontre produtos para limpeza residencial, profissional, empresarial e automotiva em um só lugar.

**Ajuda para escolher o produto certo**

Nossa equipe está disponível para orientar sobre produtos, aplicações, valores e disponibilidade.

**Confiança construída ao longo dos anos**

A BrilhoFlex atua há anos oferecendo soluções de limpeza que fazem parte da rotina de diferentes tipos de clientes.

#### Botão

**Falar com um atendente**

---

### 5.4. Categorias de produtos

Use o identificador de seção `categorias`.

#### Título

**Encontre a solução ideal para cada tipo de limpeza**

#### Descrição

Conheça nossas principais categorias e encontre produtos adequados para sua casa, empresa ou centro automotivo.

#### Categoria 1: Limpeza residencial

Produtos para facilitar os cuidados com a casa, ajudando na limpeza de pisos, cozinhas, banheiros, superfícies e diferentes ambientes.

Exemplos:

- Desinfetantes;
- Detergentes;
- Limpadores;
- Álcool;
- Sabão;
- Sapólio;
- Produtos para pisos e superfícies.

Botão: **Ver linha residencial**

#### Categoria 2: Limpeza profissional e empresarial

Soluções para empresas, comércios, condomínios, escolas, escritórios e profissionais que precisam de eficiência e economia na rotina de limpeza.

Exemplos:

- Limpadores concentrados;
- Desengordurantes;
- Desinfetantes;
- Produtos para pisos;
- Produtos para limpeza pesada;
- Soluções para uso profissional.

Botão: **Ver linha profissional**

#### Categoria 3: Linha automotiva

Produtos para centros automotivos, oficinas, lava-carros e pessoas que desejam cuidar da limpeza e conservação de seus veículos.

Exemplos:

- Shampoo automotivo;
- Desengraxantes;
- Limpadores internos;
- Produtos para pneus;
- Ceras;
- Produtos para acabamento e conservação.

Botão: **Ver linha automotiva**

#### Chamada após as categorias

Título:

**Não sabe qual produto escolher?**

Descrição:

Conte para nossa equipe o que você precisa limpar e receba orientação para encontrar a opção mais adequada.

Botão:

**Pedir ajuda pelo WhatsApp**

---

### 5.5. Soluções por tipo de cliente

#### Título

**Soluções para diferentes necessidades**

#### Descrição

Seja para cuidar da sua casa ou manter a rotina de limpeza de um negócio, a BrilhoFlex possui produtos para ajudar você.

#### Itens

**Para sua casa**

Produtos práticos e acessíveis para manter os ambientes limpos, cuidados e agradáveis no dia a dia.

**Para empresas e comércios**

Soluções para ambientes com maior circulação, ajudando a tornar a rotina de limpeza mais eficiente.

**Para profissionais da limpeza**

Produtos para quem busca rendimento, praticidade e economia durante a realização dos serviços.

**Para centros automotivos**

Uma linha voltada à limpeza, conservação e acabamento de veículos.

#### Botão

**Encontrar produtos para minha necessidade**

---

### 5.6. Produtos em destaque

Use o identificador de seção `produtos`.

#### Título

**Produtos em destaque**

#### Descrição

Conheça algumas das soluções mais procuradas da BrilhoFlex para diferentes tipos de limpeza.

#### Estrutura de cada card

Cada produto deve possuir:

- imagem;
- categoria;
- nome;
- breve descrição;
- botão **Ver detalhes**.

Exemplo permitido:

**Limpador Multiuso BrilhoFlex**

Praticidade para a limpeza diária de diferentes superfícies, ajudando a remover sujeiras e manter os ambientes bem cuidados.

#### Regras dos produtos

- Prepare a seção para receber entre 4 e 8 produtos;
- Renderize os cards a partir de uma lista de dados;
- Não invente nomes ou características de produtos;
- Caso não existam produtos suficientes no projeto, use apenas o exemplo fornecido e placeholders neutros marcados como conteúdo pendente;
- Não apresente placeholders como produtos reais;
- Deixe simples a substituição posterior por produtos mais vendidos, lançamentos ou itens de campanhas.

#### Botão da seção

**Ver catálogo completo**

---

### 5.7. Chamada comercial intermediária

#### Título

**Produtos de limpeza para sua rotina, empresa ou negócio**

#### Descrição

Encontre soluções acessíveis para diferentes ambientes e conte com nossa equipe para consultar valores, disponibilidade e formas de compra.

#### Botões

- Primário: **Solicitar orçamento**
- Secundário: **Ver todos os produtos**

Destaque visualmente esta seção sem comprometer a coerência da página.

---

### 5.8. Sobre a BrilhoFlex

Use o identificador de seção `sobre`.

#### Título

**Experiência, economia e compromisso com a limpeza**

#### Texto

A BrilhoFlex atua há anos no mercado de produtos de limpeza, oferecendo soluções para residências, empresas, profissionais e centros automotivos.

Ao longo dessa trajetória, buscamos atender diferentes necessidades com produtos acessíveis, atendimento próximo e opções que proporcionem um bom equilíbrio entre qualidade, eficiência e preço.

Nosso compromisso é ajudar cada cliente a encontrar produtos adequados para sua rotina, seja para cuidar da própria casa, manter uma empresa limpa ou atender às demandas de um negócio profissional.

#### Destaque

**BrilhoFlex: soluções que limpam, cuidam e ajudam você a economizar.**

#### Botão

**Conhecer nossos produtos**

Não invente o número de anos de atuação.

---

### 5.9. Como comprar ou solicitar orçamento

Use o identificador de seção `como-comprar`.

#### Título

**Comprar na BrilhoFlex é simples**

#### Descrição

Escolha os produtos e fale diretamente com nossa equipe para receber todas as informações necessárias.

#### Passos

**1. Escolha os produtos**

Navegue pelas categorias e encontre os produtos mais adequados para sua necessidade.

**2. Entre em contato**

Envie uma mensagem pelo WhatsApp ou ligue para nossa equipe informando os produtos de interesse.

**3. Receba o atendimento**

Consulte valores, disponibilidade, formas de pagamento e opções de entrega ou retirada.

#### Botões

- Primário: **Solicitar atendimento pelo WhatsApp**
- Secundário: **Acessar catálogo**

---

### 5.10. Perguntas frequentes

Implemente um accordion acessível, com suporte a teclado e atributos ARIA adequados.

#### Pergunta 1

**A BrilhoFlex vende para pessoas físicas?**

Sim. Temos produtos para limpeza residencial, indicados para os cuidados do dia a dia em diferentes ambientes da casa.

#### Pergunta 2

**A empresa também atende negócios?**

Sim. Atendemos empresas, comércios, profissionais da limpeza, centros automotivos e outros tipos de negócios.

#### Pergunta 3

**Como consultar os preços?**

Entre em contato pelo WhatsApp ou telefone para consultar valores, disponibilidade e condições de compra.

#### Pergunta 4

**Posso solicitar ajuda para escolher um produto?**

Sim. Informe o tipo de ambiente ou superfície que deseja limpar para que nossa equipe possa orientar sobre as opções disponíveis.

#### Pergunta 5

**A BrilhoFlex possui produtos automotivos?**

Sim. Contamos com uma linha destinada à limpeza, conservação e acabamento de veículos.

#### Pergunta 6

**Como verificar as opções de entrega?**

As condições de entrega ou retirada podem variar conforme a localização e o pedido. Consulte nossa equipe durante o atendimento.

#### Botão

**Tirar uma dúvida pelo WhatsApp**

---

### 5.11. Contato

Use o identificador de seção `contato`.

#### Título

**Fale com a BrilhoFlex**

#### Descrição

Precisa de ajuda para escolher um produto, consultar preços ou solicitar um orçamento? Entre em contato com nossa equipe.

#### Informações configuráveis

- WhatsApp: `(XX) XXXXX-XXXX`
- Telefone: `(XX) XXXX-XXXX`
- Instagram: `@brilhoflex`
- Horário: `Segunda a sexta-feira, das 8h às 18h.`
- Endereço: `Inserir endereço completo da empresa.`

#### Botões

- Primário: **Chamar no WhatsApp**
- Secundário: **Ligar para a BrilhoFlex**

#### Texto de apoio

Conte o que você precisa e nossa equipe ajudará a encontrar os produtos mais adequados.

Os links devem usar protocolos adequados:

- WhatsApp com `https://wa.me/`;
- Telefone com `tel:`;
- Instagram com URL configurável.

A mensagem inicial do WhatsApp deve ser codificada corretamente e armazenada no arquivo de configuração.

---

### 5.12. Chamada final

#### Título

**Encontre a solução certa para sua limpeza**

#### Descrição

Produtos para sua casa, empresa ou centro automotivo, com variedade, atendimento próximo e excelente custo-benefício.

#### Botões

- Primário: **Solicitar orçamento agora**
- Secundário: **Explorar o catálogo**

---

### 5.13. Rodapé

#### Texto institucional

A BrilhoFlex oferece produtos para limpeza residencial, profissional, empresarial e automotiva, com soluções acessíveis para diferentes necessidades.

#### Links rápidos

- Início;
- Linha residencial;
- Linha profissional e empresarial;
- Linha automotiva;
- Produtos;
- Sobre a BrilhoFlex;
- Contato.

#### Atendimento

- WhatsApp: `(XX) XXXXX-XXXX`
- Telefone: `(XX) XXXX-XXXX`
- Instagram: `@brilhoflex`
- Horário: `segunda a sexta-feira, das 8h às 18h.`

#### Informações legais

- Política de Privacidade;
- Termos de Uso;
- CNPJ: `XX.XXX.XXX/XXXX-XX`;
- `© 2026 BrilhoFlex. Todos os direitos reservados.`

Os links legais podem apontar para rotas provisórias configuráveis, mas não crie textos jurídicos fictícios.

---

### 5.14. Botão flutuante do WhatsApp

Adicione um botão fixo no canto inferior da tela.

Texto acessível:

**Precisa de ajuda? Fale com a BrilhoFlex.**

#### Requisitos

- Não cobrir conteúdos importantes;
- Respeitar a área segura em dispositivos móveis;
- Possuir `aria-label`;
- Exibir estado de foco;
- Abrir o WhatsApp em nova aba com segurança;
- Não depender apenas de um ícone para leitores de tela.

---

## 6. Fluxo de conversão

Distribua os CTAs estrategicamente:

| Local               | CTA principal                              | Objetivo                                           |
| ------------------- | ------------------------------------------ | -------------------------------------------------- |
| Cabeçalho           | Solicitar orçamento                        | Manter contato disponível durante toda a navegação |
| Hero                | Conhecer os produtos / Solicitar orçamento | Atender usuários em diferentes níveis de intenção  |
| Categorias          | Ver cada linha                             | Direcionar para áreas específicas do catálogo      |
| Pós-categorias      | Pedir ajuda pelo WhatsApp                  | Captar visitantes indecisivos                      |
| Produtos            | Ver detalhes / Ver catálogo completo       | Aumentar interesse pelos itens                     |
| Sobre               | Conhecer nossos produtos                   | Converter a confiança gerada                       |
| Como comprar        | Solicitar atendimento pelo WhatsApp        | Transformar interesse em contato                   |
| FAQ                 | Tirar uma dúvida pelo WhatsApp             | Reduzir objeções                                   |
| Contato e CTA final | Solicitar orçamento agora                  | Realizar a chamada final de conversão              |

Use variações coerentes de texto, sem alterar o objetivo:

- Conhecer os produtos;
- Ver catálogo;
- Explorar categorias;
- Solicitar orçamento;
- Consultar valores;
- Falar com um atendente;
- Pedir ajuda para escolher;
- Chamar no WhatsApp;
- Ver linha residencial;
- Ver linha profissional;
- Ver linha automotiva;
- Encontrar o produto ideal.

Não transforme todos os botões em links para o WhatsApp. Alguns devem navegar para categorias, produtos ou catálogo.

---

## 7. Acessibilidade

A implementação deve atender, no mínimo, aos seguintes pontos:

- HTML semântico;
- Um único `h1`;
- Hierarquia correta de títulos;
- Links e botões utilizados conforme sua função;
- Navegação completa por teclado;
- Foco visível;
- Contraste adequado;
- `alt` descritivo para imagens úteis;
- `alt=""` para imagens puramente decorativas;
- Menu mobile acessível;
- Accordion com ARIA;
- Formas de contato identificadas por texto;
- Áreas clicáveis adequadas para toque;
- Respeito a `prefers-reduced-motion`;
- Não depender apenas de cor para transmitir informação.

---

## 8. SEO e compartilhamento

Configure:

- idioma `pt-BR`;
- título da página;
- meta description;
- canonical configurável;
- Open Graph;
- Twitter Card;
- favicon, quando houver asset;
- metadados de compartilhamento;
- estrutura correta de headings;
- textos alternativos;
- links internos;
- sitemap e robots, caso a stack e o escopo do projeto suportem.

### Sugestão de título

`BrilhoFlex | Produtos de Limpeza Residencial, Profissional e Automotiva`

### Sugestão de descrição

`Produtos de limpeza para sua casa, empresa ou centro automotivo, com praticidade, atendimento próximo e excelente custo-benefício.`

Implemente dados estruturados apenas com informações confirmadas. Caso os dados da empresa estejam incompletos, mantenha os campos como configuração pendente e não publique valores fictícios.

---

## 9. Performance

A página deve priorizar bons resultados no Lighthouse.

Requisitos:

- Otimização de imagens;
- Dimensões explícitas para evitar CLS;
- Carregamento prioritário apenas para imagens realmente importantes;
- Lazy loading abaixo da dobra;
- Fontes otimizadas;
- Pouco JavaScript no cliente;
- Componentes de servidor quando aplicável;
- Evitar dependências pesadas;
- Evitar vídeos automáticos;
- Evitar carrosséis complexos;
- Evitar animações que causem mudanças de layout;
- Código sem erros ou avisos relevantes no console.

---

## 10. Comportamento dos links

Crie funções ou utilitários para gerar links corretamente.

### WhatsApp

A URL deve ser formada a partir do número configurado, contendo apenas dígitos.

Mensagem sugerida:

`Olá! Gostaria de conhecer os produtos da BrilhoFlex e solicitar mais informações.`

### Categorias e catálogo

Se as páginas ainda não existirem:

- use rotas configuráveis;
- não crie páginas vazias sem necessidade;
- use âncoras temporárias coerentes;
- marque no código onde os links definitivos devem ser adicionados.

Não use `href="#"` sem tratamento.

---

## 11. Qualidade do código

- TypeScript sem uso desnecessário de `any`;
- Componentes pequenos e legíveis;
- Dados separados da apresentação;
- Nomes de componentes e variáveis claros;
- Reutilização adequada;
- Evitar duplicação;
- Evitar estilos inline repetidos;
- Sem código morto;
- Sem imports não utilizados;
- Sem logs de depuração;
- Sem comentários óbvios;
- Tratamento correto de links externos;
- Uso de `rel="noopener noreferrer"` quando necessário.

---

## 12. Validação final obrigatória

Antes de concluir:

1. Execute a instalação das dependências, quando necessário;
2. Execute o lint;
3. Execute a verificação de tipos;
4. Execute o build de produção;
5. Corrija todos os erros encontrados;
6. Verifique a página em larguras mobile, tablet e desktop;
7. Confirme que os links de âncora funcionam;
8. Confirme que o menu mobile funciona;
9. Confirme que o accordion funciona por teclado;
10. Confirme que os links de WhatsApp e telefone são válidos;
11. Confirme que não há rolagem horizontal;
12. Confirme que nenhum conteúdo foi inventado;
13. Confirme que os placeholders comerciais estão centralizados;
14. Confirme que não há erros relevantes no console;
15. Confirme que a página está pronta para receber as imagens e dados reais.

---

## 13. Formato da entrega

Ao finalizar, apresente:

1. Resumo objetivo do que foi implementado;
2. Lista dos principais arquivos criados ou alterados;
3. Tecnologias utilizadas;
4. Comandos para instalar e executar o projeto;
5. Resultado das validações de lint, tipos e build;
6. Lista curta dos dados que ainda precisam ser substituídos:
   - WhatsApp;
   - telefone;
   - endereço;
   - CNPJ;
   - links do catálogo;
   - links das categorias;
   - links de políticas;
   - imagens reais;
   - produtos em destaque.

Não encerre a tarefa apenas com instruções. **Implemente efetivamente a landing page no projeto.**
