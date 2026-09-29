// ==========================================
// CONFIGURACIÓN GLOBAL MAYORISTA INTERNACIONAL
// ==========================================
const CONFIG_WHOLESALE = {
  MINIMUM_WHOLESALE_UNITS: 10,
  CURRENCY_DEFAULT: 'USD',
  WHATSAPP_NUMBER: "5492396614552",
  CONTACT_EMAIL: "wholesale@correlaconeja.com",
  TIER_PRICING_ENABLED: false
};

// ==========================================
// CATÁLOGO DE PRODUCTOS MAYORISTAS EN USD
// ==========================================
const productosMayoristasInt = [
  {
    id: "prod_aro_mini_atrapasol_p",
    nombre: "Mini Ring Suncatcher",
    descripcion: "Handcrafted mini ring suncatcher ideal for car rearview mirrors or small windows. Features delicate resin work, natural botanicals, and high-clarity crystal prisms that project rainbows in sunlight. Multiple figures available: hummingbird, star, kitten, angel, butterfly.",
    categoria: "Suncatchers",
    precioUSD: 3.50,
    sinStock: false,
    pesoGramos: 100,
    dimensionesCm: "10x10x2",
    imagenes: [
      "./miniaro.jpg",
      "./miniaro2.jpg"
    ]
  },
  {
    id: "prod_atrapasoles_mini",
    nombre: "Mini Suncatcher Collection",
    descripcion: "30 cm long suncatchers designed for cars, handbags, or small spaces. Includes charms like kittens, hummingbirds, angels, and butterflies with encapsulated dried flowers or glitter.",
    categoria: "Suncatchers",
    precioUSD: 4.20,
    sinStock: false,
    pesoGramos: 110,
    dimensionesCm: "10x10x2",
    imagenes: [
      "./auto1.jpg",
      "./auto2.jpg",
      "./auto3.jpg"
    ]
  },
  {
    id: "prod_angelitos",
    nombre: "Angel Suncatcher",
    descripcion: "Delicate angel-shaped suncatcher with faceted glass crystals. Lightweight and bright. Available colors: light blue, pink, lilac, violet, white, green.",
    categoria: "Suncatchers",
    precioUSD: 5.60,
    sinStock: false,
    pesoGramos: 130,
    dimensionesCm: "12x12x2",
    imagenes: [
      "./ange1.jpg",
      "./ange2.jpg",
      "./ange3.jpg",
      "./ange4.jpgg",
      "./ange5.jpg",
      "./ange7.jpg"
    ]
  },
  {
    id: "prod_piedras_naturales_mi",
    nombre: "Natural Stones Mini",
    descripcion: "Handcrafted suncatcher made with raw natural gemstones (Rose Quartz, Amethyst, Pyrite, Clear Quartz, Blue Selenite, Tourmaline, Citrine). Approx 30 cm long.",
    categoria: "Stones & Crystals",
    precioUSD: 5.15,
    sinStock: false,
    pesoGramos: 150,
    dimensionesCm: "12x12x2",
    imagenes: [
      "./minicristal.jpg",
      "./miniamatista.jpg",
      "./miniturma.jpg",
      "./minicitrino.jpg",
      "./minipirita.jpg",
      "./minicelenita.jpg",
      "./minirodocrosita.jpg"
    ]
  },
  {
    id: "prod_alas_de_luz",
    nombre: "Wings of Light (Alas de Luz)",
    descripcion: "Delicate resin butterflies with natural dried flowers and small light-capturing crystals. Available in light blue, pink, lilac, violet, white, and green.",
    categoria: "Suncatchers",
    precioUSD: 5.60,
    sinStock: false,
    pesoGramos: 140,
    dimensionesCm: "14x14x2",
    imagenes: [
      "./maribarateza1.jpg",
      "./maribarateza2.jpg"
    ]
  },
  {
    id: "prod_luz_astral",
    nombre: "Astral Light Stars",
    descripcion: "Resin star design with natural encapsulated flowers and clear rock crystals. Available colors: light blue, pink, lilac, violet, white, and green.",
    categoria: "Suncatchers",
    precioUSD: 5.60,
    sinStock: false,
    pesoGramos: 140,
    dimensionesCm: "14x14x2",
    imagenes: [
      "./estrebarateza3.jpg",
      "./estrebarateza1.jpg"
    ]
  },
  {
    id: "prod_pequenas_mariposas",
    nombre: "Small Butterflies",
    descripcion: "Handcrafted resin butterflies with natural botanical details. Available in Pink, Light Blue, Navy, Lilac, Violet, Green, and White.",
    categoria: "Suncatchers",
    precioUSD: 11.20,
    sinStock: false,
    pesoGramos: 150,
    dimensionesCm: "14x14x2",
    imagenes: [
      "./mariposi.jpg"
    ]
  },
  {
    id: "prod_pequenas_estrellas",
    nombre: "Small Resin Stars",
    descripcion: "Epoxy resin stars with real flowers and rock crystal to enhance sparkle and rainbow reflections. Available in Pink, Lilac, Violet, Light Blue, Navy, Green.",
    categoria: "Suncatchers",
    precioUSD: 11.20,
    sinStock: false,
    pesoGramos: 150,
    dimensionesCm: "14x14x2",
    imagenes: [
      "./estrellas.jpg"
    ]
  },
  {
    id: "prod_pequena_flor_de_loto",
    nombre: "Small Lotus Flower",
    descripcion: "Suncatcher with delicate lotus flower elements, rock crystals, and natural power stones (Rose Quartz, Amethyst, Blue Quartz, Sodalite, Aventurine, Turquoise, Moonstone).",
    categoria: "Sacred Geometry",
    precioUSD: 13.30,
    sinStock: false,
    pesoGramos: 180,
    dimensionesCm: "15x15x2",
    imagenes: [
      "./basicofl.jpg"
    ]
  },
  {
    id: "prod_colibri_minimalista",
    nombre: "Minimalist Hummingbird",
    descripcion: "Epoxy resin hummingbird with dried flowers and rock crystals for optical light diffraction. Available in Pink, Lilac, Violet, Light Blue, Navy, Green.",
    categoria: "Minimalist",
    precioUSD: 13.30,
    sinStock: false,
    pesoGramos: 160,
    dimensionesCm: "15x15x2",
    imagenes: [
      "./coliminimalista.jpg",
      "./coliminimalista2.jpg"
    ]
  },
  {
    id: "prod_mariposa_minimalista",
    nombre: "Minimalist Butterfly",
    descripcion: "Epoxy resin butterfly suncatcher with real dried flowers or glitter and rock crystals. Available in Pink, Lilac, Violet, Light Blue, Navy, Green.",
    categoria: "Minimalist",
    precioUSD: 13.30,
    sinStock: false,
    pesoGramos: 160,
    dimensionesCm: "15x15x2",
    imagenes: [
      "./mariminimalista.jpg"
    ]
  },
  {
    id: "prod_aros",
    nombre: "Botanical Double Rings",
    descripcion: "Double ring structure with rock crystals and resin element with natural encapsulated flowers. Choice of hummingbird, butterfly, kitten, or moon.",
    categoria: "Suncatchers",
    precioUSD: 17.50,
    sinStock: false,
    pesoGramos: 200,
    dimensionesCm: "18x18x2",
    imagenes: [
      "./componentes.jpg",
      "./Aros.jpg",
      "./Aros2.jpg"
    ]
  },
  {
    id: "prod_carrusel_de_colibrie",
    nombre: "Hummingbird Carousel",
    descripcion: "Encapsulated real flowers in resin with rock crystals and glass prisms. Available in various custom color palettes.",
    categoria: "Suncatchers",
    precioUSD: 18.20,
    sinStock: false,
    pesoGramos: 210,
    dimensionesCm: "18x18x2",
    imagenes: [
      "./carrusel.jpg"
    ]
  },
  {
    id: "prod_pequena_luna",
    nombre: "Little Moon Suncatcher",
    descripcion: "Resin crescent moon with braided double ring, natural gemstones, and rock crystals. Stone options: Amethyst, Rose Quartz, Blue Quartz, Moonstone, Sodalite, Aventurine, Turquoise.",
    categoria: "Moons",
    precioUSD: 18.90,
    sinStock: false,
    pesoGramos: 210,
    dimensionesCm: "18x18x2",
    imagenes: [
      "./lunada.jpg",
      "./lunada2.jpg",
      "./lunada3.jpg"
    ]
  },
  {
    id: "prod_mariposa_clasica",
    nombre: "Classic Resin Butterfly",
    descripcion: "Handcrafted resin butterfly with natural dried botanicals. Braided double ring with natural power stones and rock crystals.",
    categoria: "Suncatchers",
    precioUSD: 19.60,
    sinStock: false,
    pesoGramos: 220,
    dimensionesCm: "18x18x2",
    imagenes: [
      "./maripoda.jpg"
    ]
  },
  {
    id: "prod_aros_de_luz",
    nombre: "Rings of Light",
    descripcion: "Double ring structure with rock crystals and resin flower center. Central power crystal choices: Clear Quartz, Amethyst, Tourmaline, Pyrite, Black Kyanite, Blue Kyanite, Rose Quartz.",
    categoria: "Suncatchers",
    precioUSD: 19.60,
    sinStock: false,
    pesoGramos: 220,
    dimensionesCm: "18x18x2",
    imagenes: [
      "./Arosdeluz.jpg",
      "./Arosdeluz2.jpg"
    ]
  },
  {
    id: "prod_hermoso_colibri",
    nombre: "Beautiful Hummingbird",
    descripcion: "Artisanal hummingbird figure made of resin and encapsulated real botanicals. Double braided ring with raw gemstones and rock crystals.",
    categoria: "Suncatchers",
    precioUSD: 19.60,
    sinStock: false,
    pesoGramos: 220,
    dimensionesCm: "18x18x2",
    imagenes: [
      "./colibrida.jpg"
    ]
  },
  {
    id: "prod_gatitos_energeticos",
    nombre: "Energy Kittens",
    descripcion: "Handcrafted resin kitten figure with real flowers/glitter. Braided ring with gemstones, rock crystal, and glass prism drop. Stone options: Clear Quartz, Rose Quartz, Tourmaline, Black Kyanite, Amethyst, Pyrite.",
    categoria: "Figures",
    precioUSD: 22.40,
    sinStock: false,
    pesoGramos: 230,
    dimensionesCm: "18x18x2",
    imagenes: [
      "./gatitocuar.jpg",
      "./gatotur.jpg"
    ]
  },
  {
    id: "prod_luna_creciente",
    nombre: "Crescent Moon Suncatcher",
    descripcion: "Large resin crescent moon with dried botanicals, rock crystal, and optical glass prisms. Colors: Pink, Light Blue, Navy, Lilac, Violet, Green, White.",
    categoria: "Moons",
    precioUSD: 23.10,
    sinStock: false,
    pesoGramos: 240,
    dimensionesCm: "20x20x2",
    imagenes: [
      "./Lunagrande2.jpg",
      "./Lunagrande.jpg",
      "./Lunagrande3.jpg"
    ]
  },
  {
    id: "prod_colibri_de_alpaca",
    nombre: "Nickel Silver Hummingbird (Alpaca)",
    descripcion: "Hand-soldered nickel silver (alpaca) hummingbird with resin-encapsulated natural flowers and crystal prisms. Color options available.",
    categoria: "Metal Craft",
    precioUSD: 23.80,
    sinStock: false,
    pesoGramos: 250,
    dimensionesCm: "20x20x2",
    imagenes: [
      "./colialp.jpg"
    ]
  },
  {
    id: "prod_arbol_de_la_abundanc",
    nombre: "Tree of Abundance",
    descripcion: "Tree of Life suncatcher wrapped with natural stones. Double braided ring with rock crystal and glass drops. Stone options: Rose Quartz, Amethyst, Light Blue Quartz, Sodalite, Aventurine, Turquoise.",
    categoria: "Sacred Symbols",
    precioUSD: 24.50,
    sinStock: false,
    pesoGramos: 250,
    dimensionesCm: "20x20x2",
    imagenes: [
      "./avpirita.jpg"
    ]
  },
  {
    id: "prod_dulce_libelula",
    nombre: "Sweet Dragonfly Suncatcher",
    descripcion: "Hand-soldered nickel silver dragonfly frame with real encapsulated flowers and high-sparkle glass prism.",
    categoria: "Metal Craft",
    precioUSD: 24.50,
    sinStock: false,
    pesoGramos: 250,
    dimensionesCm: "20x20x2",
    imagenes: [
      "./libelula.jpg"
    ]
  },
  {
    id: "prod_bola_magica",
    nombre: "Magic Sphere Suncatcher",
    descripcion: "Intertwined double ring braided with natural gemstones and rock crystals. Central options: Clear Quartz, Rose Quartz, Pyrite, Tourmaline, Black Kyanite, Blue Kyanite, Amethyst.",
    categoria: "Suncatchers",
    precioUSD: 25.90,
    sinStock: false,
    pesoGramos: 270,
    dimensionesCm: "22x22x2",
    imagenes: [
      "./bolachica.jpg",
      "./Bolachica2.jpg"
    ]
  },
  {
    id: "prod_piramide_de_energia",
    nombre: "Energy Pyramid Suncatcher",
    descripcion: "Handmade bronze pyramid intertwined with raw gemstones and rock crystal. Center choices: Amethyst, Clear Quartz, Rose Quartz, Pyrite, Tourmaline.",
    categoria: "Sacred Geometry",
    precioUSD: 26.60,
    sinStock: false,
    pesoGramos: 280,
    dimensionesCm: "22x22x2",
    imagenes: [
      "./reflejos-atrapasol11.jpg"
    ]
  },
  {
    id: "prod_bola_magica_gigante",
    nombre: "Giant Magic Sphere Suncatcher",
    descripcion: "Large statement piece with double braided ring, rock crystals, and power stones (Amethyst, Rose Quartz, Clear Quartz, Pyrite, Tourmaline).",
    categoria: "Statement Pieces",
    precioUSD: 40.60,
    sinStock: true,
    pesoGramos: 350,
    dimensionesCm: "25x25x2",
    imagenes: [
      "./Bolagrande.jpg",
      "./Bola grande.jpg"
    ]
  }
];
