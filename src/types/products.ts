export interface Products {
  id: number
  name: string
  description: string
  descriptionShort: string
  size: string
  imagePath: string
  category:
    | '#categoria-residencial'
    | '#categoria-profissional'
    | '#categoria-automotiva'
}

export const products: Products[] = [
  {
    id: 1,
    name: 'Sapólio Cremoso',
    description:
      'Sapólio Cremoso é um limpador cremoso de alta eficiência, desenvolvido para remover sujeiras difíceis, gorduras, manchas e resíduos incrustados em diversas superfícies. Sua fórmula combina alto poder de limpeza com ação delicada, proporcionando excelente desempenho sem danificar os materiais quando utilizado conforme as instruções. É indicado para a limpeza de cozinhas, banheiros, pisos, azulejos, inox, louças sanitárias, pias, fogões e outras superfícies laváveis. Possui fácil aplicação e enxágue, proporciona brilho e aspecto renovado, oferece excelente rendimento e é indicado para uso diário. Está disponível nas embalagens de 500 ml e 1000 ml.',
    descriptionShort:
      'Sapólio Cremoso é um limpador de alta eficiência para remover sujeiras, gorduras e manchas, proporcionando alto poder de limpeza, brilho e aspecto renovado.',
    size: '500 ml e 1000 ml',
    imagePath: './assets/products/sapolio_cremoso.webp',
    category: '#categoria-residencial',
  },
  {
    id: 2,
    name: 'Pasta Limpeza a Seco',
    description:
      'Pasta Limpeza a Seco é uma pasta desengraxante de alta eficiência, desenvolvida para a remoção de graxa, óleo, fuligem e sujeiras pesadas sem a necessidade de água durante a aplicação. Sua fórmula promove limpeza profunda, facilita a remoção de resíduos impregnados e deixa as superfícies e as mãos com sensação de limpeza e cuidado. É amplamente utilizada por mecânicos, oficinas e profissionais da manutenção, além de ser indicada para uso doméstico na limpeza de superfícies engorduradas, como fogões, fornos, grelhas e áreas de preparo de alimentos. Possui alto rendimento, fácil aplicação e proporciona limpeza profunda sem agredir as superfícies quando utilizada conforme as instruções. Está disponível nas embalagens de 1 kg e 3,5 kg.',
    descriptionShort:
      'Pasta Limpeza a Seco é uma pasta desengraxante de alta eficiência para remover graxa, óleo, fuligem e sujeiras pesadas, sem necessidade de água durante a aplicação.',
    size: '1 kg e 3,5 kg',
    imagePath: './assets/products/pasta_limpeza_a_seco.webp',
    category: '#categoria-residencial',
  },
  {
    id: 3,
    name: 'Detergente Neutro',
    description:
      'Detergente Neutro é um detergente de alta eficiência, desenvolvido para a limpeza diária de utensílios, louças, superfícies e equipamentos laváveis. Sua fórmula balanceada remove com facilidade gorduras e sujeiras, proporcionando limpeza eficiente sem agredir as superfícies. Produz espuma abundante, possui fácil enxágue e excelente rendimento, sendo ideal para uso doméstico, comercial e profissional. É indicado para a limpeza de louças e utensílios, pias, bancadas, vidros, superfícies laváveis, equipamentos de cozinha e limpeza geral de ambientes. Está disponível nas embalagens de 5 L, 20 L, 25 L e 50 L.',
    descriptionShort:
      'Detergente Neutro é um detergente de alta eficiência para limpeza diária de louças, utensílios e superfícies laváveis, com espuma abundante e excelente rendimento.',
    size: '5 L, 20 L, 25 L e 50 L',
    imagePath: './assets/products/detergente_neutro.webp',
    category: '#categoria-residencial',
  },
  {
    id: 4,
    name: 'Lava Roupas',
    description:
      'Lava Roupas é um detergente líquido concentrado desenvolvido para proporcionar limpeza profunda e cuidado com os tecidos. Sua fórmula de alto desempenho remove sujeiras, manchas e odores, preservando as fibras e as cores das roupas, deixando-as limpas, macias e agradavelmente perfumadas. É indicado para uso em lavagens manuais e em máquinas, oferecendo excelente rendimento e economia no dia a dia. Também é indicado para roupas brancas e coloridas, roupas delicadas, conforme orientação da etiqueta da peça, além de lençóis, toalhas, roupas de cama, uniformes e peças em geral. Está disponível nas embalagens de 5 L e 20 L.',
    descriptionShort:
      'Lava Roupas é um detergente líquido concentrado que remove sujeiras, manchas e odores, preservando as fibras e as cores dos tecidos.',
    size: '5 L e 20 L',
    imagePath: './assets/products/lava_roupas.webp',
    category: '#categoria-residencial',
  },
  {
    id: 5,
    name: 'Lava Roupas Coco',
    description:
      'Lava Roupas é um detergente líquido concentrado desenvolvido para proporcionar limpeza profunda e cuidado com os tecidos. Sua fórmula de alto desempenho remove sujeiras, manchas e odores, preservando as fibras e as cores das roupas, deixando-as limpas, macias e agradavelmente perfumadas. É indicado para uso em lavagens manuais e em máquinas, oferecendo excelente rendimento e economia no dia a dia. Também é indicado para roupas brancas e coloridas, roupas delicadas, conforme orientação da etiqueta da peça, além de lençóis, toalhas, roupas de cama, uniformes e peças em geral. Está disponível nas embalagens de 5 L e 20 L.',
    descriptionShort:
      'Lava Roupas é um detergente líquido concentrado que remove sujeiras, manchas e odores, preservando as fibras e as cores dos tecidos.',
    size: '5 L e 20 L',
    imagePath: './assets/products/lava_roupas_coco.webp',
    category: '#categoria-residencial',
  },
  {
    id: 6,
    name: 'Amaciante de roupas Confort Soft',
    description:
      'Amaciante de Roupas é um amaciante concentrado desenvolvido para proporcionar maciez, perfumação prolongada e cuidado com os tecidos. Sua fórmula reduz o atrito entre as fibras, facilitando o passar das roupas, ajudando a preservar sua aparência e proporcionando uma agradável sensação de frescor. É indicado para todos os tipos de tecidos laváveis e para uso doméstico e profissional, oferecendo excelente rendimento e deixando as roupas macias e delicadamente perfumadas. Também é indicado para roupas do dia a dia, roupas de cama, mesa e banho, uniformes e tecidos em geral, conforme orientação da etiqueta da peça. Está disponível na embalagem de 5 L, nas fragrâncias Coco e Baunilha, Soft Carícia, Confort Soft e Conforto Original.',
    descriptionShort:
      'Amaciante de Roupas proporciona maciez, perfumação prolongada e cuidado com os tecidos, facilitando o passar das roupas e preservando sua aparência.',
    size: '5 L',
    imagePath: './assets/products/amaciante_roupas_confort_soft.webp',
    category: '#categoria-residencial',
  },
  {
    id: 7,
    name: 'Amaciante de roupas Soft Caricia',
    description:
      'Amaciante de Roupas é um amaciante concentrado desenvolvido para proporcionar maciez, perfumação prolongada e cuidado com os tecidos. Sua fórmula reduz o atrito entre as fibras, facilitando o passar das roupas, ajudando a preservar sua aparência e proporcionando uma agradável sensação de frescor. É indicado para todos os tipos de tecidos laváveis e para uso doméstico e profissional, oferecendo excelente rendimento e deixando as roupas macias e delicadamente perfumadas. Também é indicado para roupas do dia a dia, roupas de cama, mesa e banho, uniformes e tecidos em geral, conforme orientação da etiqueta da peça. Está disponível na embalagem de 5 L, nas fragrâncias Coco e Baunilha, Soft Carícia, Confort Soft e Conforto Original.',
    descriptionShort:
      'Amaciante de Roupas proporciona maciez, perfumação prolongada e cuidado com os tecidos, facilitando o passar das roupas e preservando sua aparência.',
    size: '5 L',
    imagePath: './assets/products/amaciante_roupas_soft_caricia.webp',
    category: '#categoria-residencial',
  },
  {
    id: 8,
    name: 'Amaciante de roupas Conforto Original',
    description:
      'Amaciante de Roupas é um amaciante concentrado desenvolvido para proporcionar maciez, perfumação prolongada e cuidado com os tecidos. Sua fórmula reduz o atrito entre as fibras, facilitando o passar das roupas, ajudando a preservar sua aparência e proporcionando uma agradável sensação de frescor. É indicado para todos os tipos de tecidos laváveis e para uso doméstico e profissional, oferecendo excelente rendimento e deixando as roupas macias e delicadamente perfumadas. Também é indicado para roupas do dia a dia, roupas de cama, mesa e banho, uniformes e tecidos em geral, conforme orientação da etiqueta da peça. Está disponível na embalagem de 5 L, nas fragrâncias Coco e Baunilha, Soft Carícia, Confort Soft e Conforto Original.',
    descriptionShort:
      'Amaciante de Roupas proporciona maciez, perfumação prolongada e cuidado com os tecidos, facilitando o passar das roupas e preservando sua aparência.',
    size: '5 L',
    imagePath: './assets/products/amaciante_roupas_conforto_orginal.webp',
    category: '#categoria-residencial',
  },
  {
    id: 9,
    name: 'Amaciante de roupas Coco e Baunilha',
    description:
      'Amaciante de Roupas é um amaciante concentrado desenvolvido para proporcionar maciez, perfumação prolongada e cuidado com os tecidos. Sua fórmula reduz o atrito entre as fibras, facilitando o passar das roupas, ajudando a preservar sua aparência e proporcionando uma agradável sensação de frescor. É indicado para todos os tipos de tecidos laváveis e para uso doméstico e profissional, oferecendo excelente rendimento e deixando as roupas macias e delicadamente perfumadas. Também é indicado para roupas do dia a dia, roupas de cama, mesa e banho, uniformes e tecidos em geral, conforme orientação da etiqueta da peça. Está disponível na embalagem de 5 L, nas fragrâncias Coco e Baunilha, Soft Carícia, Confort Soft e Conforto Original.',
    descriptionShort:
      'Amaciante de Roupas proporciona maciez, perfumação prolongada e cuidado com os tecidos, facilitando o passar das roupas e preservando sua aparência.',
    size: '5 L',
    imagePath: './assets/products/amaciante_roupas_coco_e_baunilha.webp',
    category: '#categoria-residencial',
  },
  {
    id: 10,
    name: 'Álcool Perfumado',
    description:
      'Álcool Perfumado é um limpador de uso geral desenvolvido para higienizar e perfumar superfícies laváveis com eficiência. Sua fórmula auxilia na remoção de sujeiras leves e resíduos do dia a dia, promovendo rápida secagem e deixando um agradável perfume no ambiente. É ideal para uso doméstico e profissional, proporcionando praticidade na limpeza e sensação prolongada de frescor. É indicado para aplicação em bancadas, mesas, vidros, espelhos, pisos, azulejos, pias e demais superfícies laváveis, além de ambientes residenciais, comerciais e institucionais. Está disponível na embalagem de 5 L, nas fragrâncias Lavanda, Floral e Talco.',
    descriptionShort:
      'Álcool Perfumado é um limpador de uso geral que higieniza e perfuma superfícies laváveis, proporcionando secagem rápida e agradável fragrância.',
    size: '5 L',
    imagePath: './assets/products/alcool_perfumado_lavanda.webp',
    category: '#categoria-residencial',
  },
  {
    id: 11,
    name: 'Multiuso',
    description:
      'Multiuso é um limpador de uso geral de alta eficiência, desenvolvido para remover sujeiras, gorduras, poeira e resíduos do dia a dia em diversas superfícies laváveis. Sua fórmula proporciona limpeza rápida e eficaz, deixando os ambientes limpos, com agradável fragrância e aspecto renovado. Não deixa resíduos quando utilizado conforme as instruções, oferece excelente rendimento e é indicado para uso doméstico, comercial e institucional, sendo uma solução para a limpeza diária. É indicado para aplicação em bancadas, mesas, pias, azulejos, armários, móveis, eletrodomésticos, pisos, paredes e superfícies laváveis em geral. Está disponível na embalagem de 5 L.',
    descriptionShort:
      'Multiuso é um limpador de uso geral de alta eficiência que remove sujeiras, gorduras e poeira, deixando superfícies limpas e com agradável fragrância.',
    size: '5 L',
    imagePath: '/imagem/multi_uso_limao.webp',
    category: '#categoria-residencial',
  },
  {
    id: 12,
    name: 'Cloro Gel',
    description:
      'Cloro Gel é um limpador clorado de alta eficiência, desenvolvido para proporcionar limpeza profunda, ação desengordurante e higienização de superfícies laváveis. Sua fórmula em gel adere por mais tempo às superfícies, potencializando a remoção de sujeiras, manchas e limo, além de auxiliar na eliminação de odores. Garante praticidade, fácil aplicação e excelente rendimento, sendo indicado para uso doméstico, comercial e institucional. É indicado para aplicação em vasos sanitários, pias, bancadas, azulejos, pisos, box de banheiro, cozinhas, lavanderias e demais superfícies laváveis. Está disponível na embalagem de 5 L.',
    descriptionShort:
      'Cloro Gel é um limpador clorado de alta eficiência que promove limpeza profunda, auxilia na higienização e remove manchas, gordura e limo.',
    size: '5 L',
    imagePath: './assets/products/cloro_gel.webp',
    category: '#categoria-residencial',
  },
  {
    id: 13,
    name: 'Alvejante sem cloro (Para roupas brancas e coloridas)',
    description:
      'Alvejante sem Cloro é um aditivo para lavagem de roupas desenvolvido para potencializar a remoção de manchas e sujeiras sem agredir as fibras dos tecidos. Sua fórmula sem cloro ajuda a preservar as cores das peças, proporcionando limpeza eficiente e maior cuidado com os tecidos. Também auxilia na eliminação de odores e oferece excelente rendimento, sendo indicado para roupas coloridas e delicadas, conforme orientação da etiqueta da peça. Pode ser utilizado tanto em lavagens manuais quanto em máquinas, sendo indicado também para roupas do dia a dia e roupas de cama, mesa e banho. Está disponível na embalagem de 5 L.',
    descriptionShort:
      'Alvejante sem Cloro potencializa a remoção de manchas e sujeiras, preservando as cores e as fibras dos tecidos em lavagens manuais e em máquinas.',
    size: '5 L',
    imagePath: './assets/products/alvejante_sem_cloro_roupas_brancas_coloridas.webp',
    category: '#categoria-residencial',
  },
  {
    id: 14,
    name: 'Alvejante sem Cloro (Para Roupas Brancas)',
    description:
      'Alvejante sem Cloro para Roupas Brancas é um aditivo de lavagem desenvolvido para potencializar a remoção de manchas e sujeiras difíceis, preservando a integridade das fibras dos tecidos. Sua fórmula sem cloro ajuda a manter a brancura das peças, evitando o desgaste causado por alvejantes clorados e proporcionando uma limpeza eficiente e segura. Também auxilia na eliminação de odores, oferece excelente rendimento e é indicado para roupas brancas, uniformes, roupas de cama, mesa e banho e tecidos laváveis, conforme orientação da etiqueta da peça. Pode ser utilizado em lavagens manuais ou em máquinas. Está disponível na embalagem de 5 L.',
    descriptionShort:
      'Alvejante sem Cloro para Roupas Brancas potencializa a remoção de manchas, ajuda a manter a brancura das peças e preserva as fibras dos tecidos.',
    size: '5 L',
    imagePath: './assets/products/alvejante_sem_cloro_roupas_brancas.webp',
    category: '#categoria-residencial',
  },
  {
    id: 15,
    name: 'Água Sanitária',
    description:
      'Água Sanitária é um alvejante à base de hipoclorito de sódio, desenvolvido para a limpeza e higienização de superfícies laváveis e para o alvejamento de tecidos brancos. Sua fórmula atua na remoção de manchas, sujeiras e odores, proporcionando ambientes mais limpos e roupas com aspecto renovado. Possui alto poder de limpeza, excelente rendimento e é indicada para uso doméstico, comercial e institucional. É indicada para aplicação em pisos, azulejos, banheiros, cozinhas, pias, vasos sanitários, áreas de serviço e para o alvejamento de roupas brancas, conforme as instruções de uso. Está disponível na embalagem de 5 L.',
    descriptionShort:
      'Água Sanitária é um alvejante à base de hipoclorito de sódio para limpeza, higienização de superfícies laváveis e alvejamento de roupas brancas.',
    size: '5 L',
    imagePath: './assets/products/agua_sanitaria.webp',
    category: '#categoria-residencial',
  },
  {
    id: 16,
    name: 'Limpa vidros',
    description:
      'Limpa Vidros é um limpador de alta eficiência, desenvolvido para proporcionar transparência, brilho e limpeza impecável em superfícies de vidro. Sua fórmula remove com facilidade poeira, marcas de dedos, gordura, manchas e resíduos, secando rapidamente sem deixar manchas ou resíduos. Proporciona excelente acabamento, máxima transparência, fácil aplicação e excelente rendimento, sendo indicado para uso doméstico, comercial e automotivo. É indicado para aplicação em vidros, espelhos, janelas, portas de vidro, boxes de banheiro, para-brisas, vidros automotivos, mesas e tampos de vidro. Está disponível na embalagem de 5 L.',
    descriptionShort:
      'Limpa Vidros é um limpador de alta eficiência que remove sujeiras, proporciona brilho, transparência e secagem rápida sem deixar resíduos.',
    size: '5 L',
    imagePath: './assets/products/limpa_vidros.webp',
    category: '#categoria-residencial',
  },
  {
    id: 17,
    name: 'Limpador Perfumado Lavanda',
    description:
      'Limpador Perfumado Desinfetante é um produto desenvolvido para promover limpeza, desinfecção e perfumação de ambientes em uma única aplicação. Sua fórmula remove sujeiras do dia a dia, auxilia no controle de microrganismos* e elimina odores, deixando um agradável perfume de longa duração. Proporciona higienização eficiente de superfícies laváveis, excelente rendimento e é indicado para uso doméstico, comercial e institucional, deixando os ambientes limpos, higienizados e com sensação prolongada de frescor. É indicado para aplicação em pisos, revestimentos, banheiros, lavabos, cozinhas, azulejos, paredes laváveis, pias, bancadas e superfícies laváveis em geral. Está disponível na embalagem de 5 L, nas fragrâncias Lavanda, Floral, Algas Marinhas e Eucalipto.',
    descriptionShort:
      'Limpador Perfumado Desinfetante limpa, desinfeta e perfuma ambientes, elimina odores e auxilia no controle de microrganismos* em superfícies laváveis.',
    size: '5 L',
    imagePath: '/imagem/limpador_perfumado_lavanda.webp',
    category: '#categoria-residencial',
  },
  {
    id: 18,
    name: 'Limpador Perfumado Eucalipto',
    description:
      'Limpador Perfumado Desinfetante é um produto desenvolvido para promover limpeza, desinfecção e perfumação de ambientes em uma única aplicação. Sua fórmula remove sujeiras do dia a dia, auxilia no controle de microrganismos* e elimina odores, deixando um agradável perfume de longa duração. Proporciona higienização eficiente de superfícies laváveis, excelente rendimento e é indicado para uso doméstico, comercial e institucional, deixando os ambientes limpos, higienizados e com sensação prolongada de frescor. É indicado para aplicação em pisos, revestimentos, banheiros, lavabos, cozinhas, azulejos, paredes laváveis, pias, bancadas e superfícies laváveis em geral. Está disponível na embalagem de 5 L, nas fragrâncias Lavanda, Floral, Algas Marinhas e Eucalipto.',
    descriptionShort:
      'Limpador Perfumado Desinfetante limpa, desinfeta e perfuma ambientes, elimina odores e auxilia no controle de microrganismos* em superfícies laváveis.',
    size: '5 L',
    imagePath: '/imagem/limpador_perfumado_eucalipto.webp',
    category: '#categoria-residencial',
  },
  {
    id: 19,
    name: 'Limpador Perfumado Algas Marinhas',
    description:
      'Limpador Perfumado Desinfetante é um produto desenvolvido para promover limpeza, desinfecção e perfumação de ambientes em uma única aplicação. Sua fórmula remove sujeiras do dia a dia, auxilia no controle de microrganismos* e elimina odores, deixando um agradável perfume de longa duração. Proporciona higienização eficiente de superfícies laváveis, excelente rendimento e é indicado para uso doméstico, comercial e institucional, deixando os ambientes limpos, higienizados e com sensação prolongada de frescor. É indicado para aplicação em pisos, revestimentos, banheiros, lavabos, cozinhas, azulejos, paredes laváveis, pias, bancadas e superfícies laváveis em geral. Está disponível na embalagem de 5 L, nas fragrâncias Lavanda, Floral, Algas Marinhas e Eucalipto.',
    descriptionShort:
      'Limpador Perfumado Desinfetante limpa, desinfeta e perfuma ambientes, elimina odores e auxilia no controle de microrganismos* em superfícies laváveis.',
    size: '5 L',
    imagePath: '/imagem/limpador_perfumado_algas_marinhas.webp',
    category: '#categoria-residencial',
  },
  {
    id: 20,
    name: 'Intercap (Desincrustante ácido)',
    description:
      'Intercap (Desincrustante Ácido) é uma solução para limpezas pesadas. Sua fórmula ácida e altamente concentrada proporciona excelente desempenho na remoção de graxa, lama, óxidos, fuligem e sujeiras incrustadas. É amplamente utilizado em centros automotivos, transportadoras, oficinas, indústrias e lava-rápidos.',
    descriptionShort:
      'Intercap é um desincrustante ácido para limpezas pesadas, com fórmula altamente concentrada e excelente desempenho na remoção de sujeiras incrustadas. Está disponível nas embalagens de 5 L, 20 L, 25 L e 50 L.',
    size: '5 L, 20 L, 25 L e 50 L',
    imagePath: './assets/products/intercap.webp',
    category: '#categoria-automotiva',
  },
  {
    id: 21,
    name: 'Solupan Amarelo (Desengraxante alcalino)',
    description:
      'O Solupan é um desengraxante alcalino altamente concentrado, ideal para limpezas pesadas. Sua fórmula possui alto poder desengraxante, sendo indicada para a remoção de graxas, óleos e gorduras incrustadas. Oferece excelente rendimento e economia, sendo indicado para uso automotivo e industrial. É amplamente utilizado na limpeza de motores, chassis, pisos industriais, caçambas, peças mecânicas e equipamentos. Está disponível nas embalagens de 5 L, 20 L, 25 L e 50 L.',
    descriptionShort:
      'Solupan é um desengraxante alcalino altamente concentrado para limpezas pesadas, indicado para remover graxas, óleos e gorduras incrustadas em aplicações automotivas e industriais.',
    size: '5 L, 20 L, 25 L e 50 L',
    imagePath: './assets/products/desengraxante_solupan_amarelo.webp',
    category: '#categoria-automotiva',
  },
  {
    id: 22,
    name: 'Solupan Azul (Desengraxante alcalino)',
    description:
      'O Solupan é um desengraxante alcalino altamente concentrado, ideal para limpezas pesadas. Sua fórmula possui alto poder desengraxante, sendo indicada para a remoção de graxas, óleos e gorduras incrustadas. Oferece excelente rendimento e economia, sendo indicado para uso automotivo e industrial. É amplamente utilizado na limpeza de motores, chassis, pisos industriais, caçambas, peças mecânicas e equipamentos. Está disponível nas embalagens de 5 L, 20 L, 25 L e 50 L.',
    descriptionShort:
      'Solupan é um desengraxante alcalino altamente concentrado para limpezas pesadas, indicado para remover graxas, óleos e gorduras incrustadas em aplicações automotivas e industriais.',
    size: '5 L, 20 L, 25 L e 50 L',
    imagePath: './assets/products/desengraxante_solupan_azul.webp',
    category: '#categoria-automotiva',
  },
  {
    id: 23,
    name: 'Pneu Pretinho',
    description:
      'Pneu Pretinho é um revitalizador de pneus de alta performance, desenvolvido para restaurar a aparência original da borracha e proporcionar acabamento uniforme e duradouro. Sua fórmula protege contra o ressecamento e o desgaste causado pela ação do tempo e pelos raios UV, além de criar uma película que auxilia na repulsão de poeira e sujeiras, mantendo os pneus com aspecto renovado por mais tempo. Possui fácil aplicação, excelente rendimento e é indicado para uso profissional e doméstico, sendo ideal para centros automotivos, lava-rápidos e estéticas automotivas. Está disponível nas embalagens de 1 L, 5 L, 20 L e 50 L.',
    descriptionShort:
      'Pneu Pretinho revitaliza a aparência dos pneus, proporciona acabamento uniforme e duradouro, protege a borracha e auxilia na repulsão de poeira e sujeiras.',
    size: '5 L, 20 L, 25 L e 50 L',
    imagePath: './assets/products/pneu_pretinho_gel.webp',
    category: '#categoria-automotiva',
  },
  {
    id: 24,
    name: 'ALKA-FLEX -100 (Limpa Carpete)',
    description:
      'ALKA-FLEX -100 (Limpa Carpete) é um detergente concentrado de baixa espuma, desenvolvido para a limpeza profissional de carpetes, estofados, bancos automotivos e revestimentos têxteis. Sua formulação promove alto poder de limpeza, removendo manchas, poeira, gordura e resíduos impregnados, preservando as fibras dos tecidos e proporcionando excelente rendimento, rápida secagem e acabamento impecável. Deixa uma agradável fragrância e é indicado para uso automotivo, residencial e profissional, sendo ideal para utilização em extratoras e pulverizadores. Está disponível nas embalagens de 5 L, 20 L, 25 L e 50 L.',
    descriptionShort:
      'ALKA-FLEX -100 é um detergente concentrado de baixa espuma para limpeza de carpetes, estofados e revestimentos têxteis, com alto poder de limpeza e secagem rápida.',
    size: '5 L, 20 L, 25 L e 50 L',
    imagePath: './assets/products/alka_flex_100_limpa_carpete_brilho_flex.webp',
    category: '#categoria-automotiva',
  },
  {
    id: 25,
    name: 'Silicone Gel Tutti Frutti',
    description:
      'Silicone Gel é um revitalizador de superfícies desenvolvido para proteger, conservar e realçar o acabamento de componentes automotivos. Sua fórmula em gel proporciona excelente aderência, formando uma película protetora que devolve o brilho e ajuda a preservar plásticos, borrachas, vinil e couro sintético contra o ressecamento e a ação do tempo. Não escorre durante a aplicação, oferece acabamento uniforme e duradouro e proporciona excelente rendimento, deixando o veículo com aspecto renovado. É ideal para painéis, para-choques, frisos, pneus e acabamentos internos e externos. Está disponível nas embalagens de 250 g, 800 g e 3,5 kg, nas fragrâncias Tutti Frutti e Carro Novo.',
    descriptionShort:
      'Silicone Gel revitaliza superfícies automotivas, realça o brilho, protege plásticos, borrachas, vinil e couro sintético e proporciona acabamento uniforme e duradouro.',
    size: '250 g, 800 g e 3,5 kg',
    imagePath: './assets/products/silicone_gel_tutti_frutti.webp',
    category: '#categoria-automotiva',
  },
  {
    id: 26,
    name: 'Silicone Gel Carro Novo',
    description:
      'Silicone Gel é um revitalizador de superfícies desenvolvido para proteger, conservar e realçar o acabamento de componentes automotivos. Sua fórmula em gel proporciona excelente aderência, formando uma película protetora que devolve o brilho e ajuda a preservar plásticos, borrachas, vinil e couro sintético contra o ressecamento e a ação do tempo. Não escorre durante a aplicação, oferece acabamento uniforme e duradouro e proporciona excelente rendimento, deixando o veículo com aspecto renovado. É ideal para painéis, para-choques, frisos, pneus e acabamentos internos e externos. Está disponível nas embalagens de 250 g, 800 g e 3,5 kg, nas fragrâncias Tutti Frutti e Carro Novo.',
    descriptionShort:
      'Silicone Gel revitaliza superfícies automotivas, realça o brilho, protege plásticos, borrachas, vinil e couro sintético e proporciona acabamento uniforme e duradouro.',
    size: '250 g, 800 g e 3,5 kg',
    imagePath: './assets/products/silicone_gel_carro_novo.webp',
    category: '#categoria-automotiva',
  },
  {
    id: 27,
    name: 'Lava Autos',
    description:
      'Lava Autos é um shampoo automotivo de alta performance, desenvolvido para proporcionar uma limpeza eficiente e segura da pintura veicular. Sua fórmula concentrada remove poeira, barro, fuligem, gordura leve e demais impurezas sem agredir a pintura, preservando o brilho e o acabamento original do veículo. Produz espuma abundante, facilita o deslizamento da luva ou esponja durante a lavagem e garante excelente rendimento, sendo indicado para uso profissional e doméstico. É indicado para aplicação em pintura automotiva, vidros, rodas, para-choques e superfícies metálicas e pintadas. Está disponível nas embalagens de 5 L, 20 L, 25 L e 50 L, nas versões com cera e sem cera.',
    descriptionShort:
      'Lava Autos é um shampoo automotivo de alta performance, com fórmula concentrada que limpa a pintura, preserva o brilho e proporciona excelente rendimento.',
    size: '5 L, 20 L, 25 L e 50 L',
    imagePath: './assets/products/lava_autos.webp',
    category: '#categoria-automotiva',
  },
  {
    id: 28,
    name: 'Limpa Alumínio',
    description:
      'Limpa Alumínio é um limpador concentrado de alto desempenho, desenvolvido para remover manchas, oxidação, gordura e sujeiras incrustadas em superfícies de alumínio. Sua fórmula promove limpeza profunda, restaurando o brilho natural do metal e proporcionando excelente acabamento com rapidez e eficiência. Possui alto rendimento, fácil aplicação e excelente desempenho, sendo indicado para uso doméstico, comercial e industrial. É ideal para panelas e utensílios de alumínio, esquadrias, portas, rodas e peças automotivas em alumínio, superfícies, equipamentos, tanques e demais objetos de alumínio. Está disponível na embalagem de 5 L.',
    descriptionShort:
      'Limpa Alumínio é um limpador concentrado de alto desempenho que remove manchas, oxidação, gordura e sujeiras, restaurando o brilho natural do alumínio.',
    size: '5 L',
    imagePath: './assets/products/limpa_alumio.webp',
    category: '#categoria-automotiva',
  },
  {
    id: 29,
    name: 'Limpa vidros',
    description:
      'Limpa Vidros é um limpador de alta eficiência, desenvolvido para proporcionar transparência, brilho e limpeza impecável em superfícies de vidro. Sua fórmula remove com facilidade poeira, marcas de dedos, gordura, manchas e resíduos, secando rapidamente sem deixar manchas ou resíduos. Proporciona excelente acabamento, máxima transparência, fácil aplicação e excelente rendimento, sendo indicado para uso doméstico, comercial e automotivo. É indicado para aplicação em vidros, espelhos, janelas, portas de vidro, boxes de banheiro, para-brisas, vidros automotivos, mesas e tampos de vidro. Está disponível na embalagem de 5 L.',
    descriptionShort:
      'Limpa Vidros é um limpador de alta eficiência que remove sujeiras, proporciona brilho, transparência e secagem rápida sem deixar resíduos.',
    size: '5 L',
    imagePath: './assets/products/limpa_vidros.webp',
    category: '#categoria-automotiva',
  },
  {
    id: 30,
    name: 'Aromatizante Automotivo',
    description:
      'Aromatizante Automotivo é um odorizador desenvolvido para perfumar o interior dos veículos com fragrâncias agradáveis e duradouras. Sua fórmula proporciona sensação de frescor, auxilia na neutralização de odores desagradáveis e mantém o ambiente interno mais agradável durante o uso diário. É indicado para automóveis, caminhões, ônibus, utilitários, cabines e interiores de veículos. Possui fácil aplicação, excelente rendimento e está disponível nas fragrâncias Tutti Frutti e Carro Novo. É comercializado nas embalagens de 200 ml e 250 ml.',
    descriptionShort:
      'Aromatizante Automotivo perfuma o interior dos veículos, auxilia na neutralização de odores e proporciona sensação de frescor com fragrâncias duradouras.',
    size: '200 ml e 250 ml',
    imagePath: './assets/products/aromatizante_automotivo.webp',
    category: '#categoria-automotiva',
  },
  {
    id: 31,
    name: 'Cera de Carnaúba',
    description:
      'Cera de Carnaúba é uma cera automotiva de alta performance, formulada com cera de carnaúba para proporcionar brilho intenso, proteção e acabamento de alto padrão à pintura do veículo. Sua fórmula cria uma película protetora que auxilia na repelência à água, poeira e impurezas, preservando o brilho e valorizando a aparência da pintura por mais tempo. Possui fácil aplicação, excelente rendimento e é indicada para uso profissional e doméstico. Pode ser utilizada em automóveis, motocicletas, caminhões, utilitários e superfícies pintadas em geral. Está disponível na embalagem de 200 g.',
    descriptionShort:
      'Cera de Carnaúba proporciona brilho intenso, proteção e acabamento à pintura, auxiliando na repelência à água, poeira e impurezas.',
    size: '200 g',
    imagePath: './assets/products/cera_de_carnauba.webp',
    category: '#categoria-automotiva',
  },
  {
    id: 32,
    name: 'Cera Automotiva Brilhoflex',
    description:
      'Cera Automotiva Brilhoflex é desenvolvida para proporcionar proteção, brilho intenso e acabamento superior à pintura automotiva. Sua fórmula auxilia na remoção de pequenas marcas superficiais, realça a cor do veículo e forma uma camada protetora que contribui para repelir água, poeira e agentes externos. É ideal para a manutenção e conservação da pintura, deixando o veículo com aspecto renovado, toque suave e brilho duradouro. É recomendada para uso em carros, motos e demais superfícies automotivas pintadas.',
    descriptionShort:
      'Cera Automotiva Brilhoflex proporciona proteção, brilho intenso e acabamento superior, realçando a cor da pintura e auxiliando na repelência à água e poeira.',
    size: '',
    imagePath: '/imagem/cera_automotiva.webp',
    category: '#categoria-automotiva',
  },
  {
    id: 33,
    name: 'Intercap (Desincrustante ácido)',
    description:
      'Intercap (Desincrustante Ácido) é uma solução para limpezas pesadas. Sua fórmula ácida e altamente concentrada proporciona excelente desempenho na remoção de graxa, lama, óxidos, fuligem e sujeiras incrustadas. É amplamente utilizado em centros automotivos, transportadoras, oficinas, indústrias e lava-rápidos.',
    descriptionShort:
      'Intercap é um desincrustante ácido para limpezas pesadas, com fórmula altamente concentrada e excelente desempenho na remoção de sujeiras incrustadas. Está disponível nas embalagens de 5 L, 20 L, 25 L e 50 L.',
    size: '5 L, 20 L, 25 L e 50 L',
    imagePath: './assets/products/intercap.webp',
    category: '#categoria-profissional',
  },
  {
    id: 34,
    name: 'Solupan Amarelo (Desengraxante alcalino)',
    description:
      'O Solupan é um desengraxante alcalino altamente concentrado, ideal para limpezas pesadas. Sua fórmula possui alto poder desengraxante, sendo indicada para a remoção de graxas, óleos e gorduras incrustadas. Oferece excelente rendimento e economia, sendo indicado para uso automotivo e industrial. É amplamente utilizado na limpeza de motores, chassis, pisos industriais, caçambas, peças mecânicas e equipamentos. Está disponível nas embalagens de 5 L, 20 L, 25 L e 50 L.',
    descriptionShort:
      'Solupan é um desengraxante alcalino altamente concentrado para limpezas pesadas, indicado para remover graxas, óleos e gorduras incrustadas em aplicações automotivas e industriais.',
    size: '5 L, 20 L, 25 L e 50 L',
    imagePath: './assets/products/desengraxante_solupan_amarelo.webp',
    category: '#categoria-profissional',
  },
  {
    id: 35,
    name: 'Solupan Azul (Desengraxante alcalino)',
    description:
      'O Solupan é um desengraxante alcalino altamente concentrado, ideal para limpezas pesadas. Sua fórmula possui alto poder desengraxante, sendo indicada para a remoção de graxas, óleos e gorduras incrustadas. Oferece excelente rendimento e economia, sendo indicado para uso automotivo e industrial. É amplamente utilizado na limpeza de motores, chassis, pisos industriais, caçambas, peças mecânicas e equipamentos. Está disponível nas embalagens de 5 L, 20 L, 25 L e 50 L.',
    descriptionShort:
      'Solupan é um desengraxante alcalino altamente concentrado para limpezas pesadas, indicado para remover graxas, óleos e gorduras incrustadas em aplicações automotivas e industriais.',
    size: '5 L, 20 L, 25 L e 50 L',
    imagePath: './assets/products/desengraxante_solupan_azul.webp',
    category: '#categoria-profissional',
  },
  {
    id: 36,
    name: 'Lava Autos',
    description:
      'Lava Autos é um shampoo automotivo de alta performance, desenvolvido para proporcionar uma limpeza eficiente e segura da pintura veicular. Sua fórmula concentrada remove poeira, barro, fuligem, gordura leve e demais impurezas sem agredir a pintura, preservando o brilho e o acabamento original do veículo. Produz espuma abundante, facilita o deslizamento da luva ou esponja durante a lavagem e garante excelente rendimento, sendo indicado para uso profissional e doméstico. É indicado para aplicação em pintura automotiva, vidros, rodas, para-choques e superfícies metálicas e pintadas. Está disponível nas embalagens de 5 L, 20 L, 25 L e 50 L, nas versões com cera e sem cera.',
    descriptionShort:
      'Lava Autos é um shampoo automotivo de alta performance, com fórmula concentrada que limpa a pintura, preserva o brilho e proporciona excelente rendimento.',
    size: '5 L, 20 L, 25 L e 50 L',
    imagePath: './assets/products/lava_autos.webp',
    category: '#categoria-profissional',
  },
]
