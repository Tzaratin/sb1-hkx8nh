import { Auction } from '../types';

export const mockAuctions: Auction[] = [
  {
    id: '1',
    source: 'Mega Leilões',
    propertyTitle: 'Apartamento 120m² - Jardins',
    firstAuctionDate: '2023-06-15',
    firstAuctionValue: 1250000,
    secondAuctionDate: '2023-07-01',
    secondAuctionValue: 875000,
    court: '4ª Vara Cível de São Paulo',
    location: 'São Paulo, SP',
    status: 'no_bids',
    propertyType: 'apartment',
    auctioneerName: 'Fernando Silva',
    auctioneerWebsite: 'megaleiloes.com.br',
    squareMeters: 120,
    description: 'Apartamento de alto padrão com 3 dormitórios, 2 suítes, 3 vagas'
  },
  {
    id: '2',
    source: 'Sold Leilões',
    propertyTitle: 'Casa em Condomínio - Alphaville',
    firstAuctionDate: '2023-05-20',
    firstAuctionValue: 2200000,
    secondAuctionDate: '2023-06-05',
    secondAuctionValue: 1540000,
    court: '2ª Vara Cível de Barueri',
    location: 'Barueri, SP',
    status: 'no_bids',
    propertyType: 'house',
    auctioneerName: 'Ana Rodrigues',
    auctioneerWebsite: 'soldleiloes.com.br',
    squareMeters: 350,
    description: 'Casa em condomínio fechado com 4 suítes, piscina e área gourmet'
  },
  {
    id: '3',
    source: 'Zukerman Leilões',
    propertyTitle: 'Galpão Industrial',
    firstAuctionDate: '2023-07-10',
    firstAuctionValue: 4500000,
    secondAuctionDate: '2023-07-25',
    secondAuctionValue: 3150000,
    court: '1ª Vara Empresarial de Guarulhos',
    location: 'Guarulhos, SP',
    status: 'no_bids',
    propertyType: 'commercial',
    auctioneerName: 'Daniel Zukerman',
    auctioneerWebsite: 'zukerman.com.br',
    squareMeters: 2000,
    description: 'Galpão industrial com docas, escritórios e área de manobra'
  },
  {
    id: '4',
    source: 'Biasi Leilões',
    propertyTitle: 'Terreno Comercial - Área Central',
    firstAuctionDate: '2023-08-05',
    firstAuctionValue: 1800000,
    secondAuctionDate: '2023-08-20',
    secondAuctionValue: 1260000,
    court: '3ª Vara Cível de Campinas',
    location: 'Campinas, SP',
    status: 'no_bids',
    propertyType: 'land',
    auctioneerName: 'Roberto Biasi',
    auctioneerWebsite: 'biasileiloes.com.br',
    squareMeters: 1000,
    description: 'Terreno comercial em zona de alto fluxo, ideal para empreendimentos'
  },
  {
    id: '5',
    source: 'Leilão Judicial Paulista',
    propertyTitle: 'Cobertura Duplex - Moema',
    firstAuctionDate: '2023-09-01',
    firstAuctionValue: 3200000,
    secondAuctionDate: '2023-09-15',
    secondAuctionValue: 2240000,
    court: '7ª Vara Cível de São Paulo',
    location: 'São Paulo, SP',
    status: 'no_bids',
    propertyType: 'apartment',
    auctioneerName: 'Marcos Paulo',
    auctioneerWebsite: 'leilaojudicialpaulista.com.br',
    squareMeters: 280,
    description: 'Cobertura duplex com 4 suítes, terraço gourmet, 4 vagas'
  },
  {
    id: '6',
    source: 'D1 Lance Leilões',
    propertyTitle: 'Prédio Comercial - Centro',
    firstAuctionDate: '2023-08-25',
    firstAuctionValue: 5800000,
    secondAuctionDate: '2023-09-10',
    secondAuctionValue: 4060000,
    court: '2ª Vara Empresarial do Rio de Janeiro',
    location: 'Rio de Janeiro, RJ',
    status: 'no_bids',
    propertyType: 'commercial',
    auctioneerName: 'Diana Lance',
    auctioneerWebsite: 'd1lance.com.br',
    squareMeters: 1500,
    description: 'Prédio comercial com 8 andares, elevadores, estacionamento'
  },
  {
    id: '7',
    source: 'Leilões Brasil',
    propertyTitle: 'Fazenda Produtiva',
    firstAuctionDate: '2023-07-30',
    firstAuctionValue: 8500000,
    secondAuctionDate: '2023-08-15',
    secondAuctionValue: 5950000,
    court: '1ª Vara Cível de Ribeirão Preto',
    location: 'Ribeirão Preto, SP',
    status: 'no_bids',
    propertyType: 'land',
    auctioneerName: 'Carlos Santos',
    auctioneerWebsite: 'leiloesbrasil.com.br',
    squareMeters: 1200000,
    description: 'Fazenda com 120 hectares, infraestrutura completa, sede'
  },
  {
    id: '8',
    source: 'Lance Já',
    propertyTitle: 'Casa de Vila - Pinheiros',
    firstAuctionDate: '2023-09-05',
    firstAuctionValue: 980000,
    secondAuctionDate: '2023-09-20',
    secondAuctionValue: 686000,
    court: '5ª Vara Cível de São Paulo',
    location: 'São Paulo, SP',
    status: 'no_bids',
    propertyType: 'house',
    auctioneerName: 'Patricia Lins',
    auctioneerWebsite: 'lanceja.com.br',
    squareMeters: 150,
    description: 'Casa de vila reformada, 3 quartos, 2 vagas, área gourmet'
  },
  {
    id: '9',
    source: 'Leilões Judiciais Serrano',
    propertyTitle: 'Loja em Shopping',
    firstAuctionDate: '2023-08-15',
    firstAuctionValue: 750000,
    secondAuctionDate: '2023-08-30',
    secondAuctionValue: 525000,
    court: '3ª Vara Cível de Santos',
    location: 'Santos, SP',
    status: 'no_bids',
    propertyType: 'commercial',
    auctioneerName: 'Ricardo Serrano',
    auctioneerWebsite: 'leiloesserrano.com.br',
    squareMeters: 85,
    description: 'Loja em shopping de alto fluxo, piso térreo, ar condicionado'
  },
  {
    id: '10',
    source: 'Leilão VIP',
    propertyTitle: 'Mansão - Condomínio Fechado',
    firstAuctionDate: '2023-09-10',
    firstAuctionValue: 4200000,
    secondAuctionDate: '2023-09-25',
    secondAuctionValue: 2940000,
    court: '4ª Vara Cível de Campinas',
    location: 'Campinas, SP',
    status: 'no_bids',
    propertyType: 'house',
    auctioneerName: 'Vicente Pereira',
    auctioneerWebsite: 'leilaovip.com.br',
    squareMeters: 650,
    description: 'Mansão com 5 suítes, cinema, piscina, quadra de tênis'
  }
];