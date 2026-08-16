// ==========================================
// CATÁLOGO DE PRODUCTOS MAYORISTAS
// ==========================================
// Acá podés modificar precios, nombres, descripciones 
// o agregar nuevos productos fácilmente.
const productosMayoristas = [
  {
    id: 'prod_atrapasoles_mini',
    nombre: 'Atrapasoles mini',
    descripcion: `Pequeños atrapasoles de 30 cm de largo, pensados especialmente para colgar en el auto, aunque también pueden usarse como detalle decorativo en la cartera, mochila, celular o donde quieras llevar un pequeño destello de luz.
Hay diferentes diseños, como gatitos, colibríes, angelitos y mariposas, etc disponibles en distintos colores, con flores naturales o glitter.
EN LAS OFERTAS POR DOCENA COLORES Y DISEÑOS SON SURTIDOS SEGÚN STOCK (SIN ELECCIÓN)

LAS OFERTAS POR DOCENA NO INCLUYEN PACKAGING INDIVIDUAL NI CÓDIGO DE ORÁCULO.

CADA PIEZA ES ÚNICA. CONSULTAR COLORES Y STOCK DISPONIBLE.`,
    precioLista: 6000,
    ofertaDocena: {
      cantidad: 12,
      precio: 50000,
      etiquetaEconomica: true
    },
    imagenes:[
      './auto1.png',
      './auto2.png',
      './auto3.png'
    ]
  },
  {
    id: 'prod_angelitos',
    nombre: 'Angelitos',
    descripcion: `Delicados angelitos con cristal facetado, ideales para sumar un detalle especial y luminoso a cualquier espacio. Una pieza liviana, encantadora y fácil de ofrecer como regalo.
Perfectos para tiendas, regalerías y emprendimientos que buscan incorporar productos artesanales con un toque diferente. 🌈
Colores disponibles: azul celeste, rosa, lila, violeta, blanco y verde.

EN LAS OFERTAS POR DOCENA COLORES Y DISEÑOS SON SURTIDOS SEGÚN STOCK (SIN ELECCIÓN)

LAS OFERTAS POR DOCENA NO INCLUYEN PACKAGING INDIVIDUAL NI CÓDIGO DE ORÁCULO.

CADA PIEZA ES ÚNICA. CONSULTAR COLORES Y STOCK DISPONIBLE.`,
    precioLista: 6666,
    ofertaDocena: {
      cantidad: 12,
      precio: 50000,
      etiquetaEconomica: true
    },
    imagenes:[
      './ange1.png',
      './ange2.png',
      './ange3.png',
      './ange4.png',
      './ange5.png',
      './ange7.png'
    ]
  },
  {
    id: 'prod_piedras_naturales_mi',
    nombre: 'Piedras naturales mini',
    descripcion: `Atrapasoles con piedras naturales
Cada atrapasol está elaborado con piedras naturales, por lo que el tamaño, la forma, las tonalidades y las pequeñas características de cada piedra pueden variar. Al tratarse de materiales naturales, cada pieza es única e irregular, haciendo que no existan dos exactamente iguales.

MEDIDA APROXIMADA: 30 cm

Podés elegir entre diferentes piedras naturales:
Cuarzo rosa
Amatista
Pirita
Cuarzo cristal
Selenita azul
Turmalina
Citrino
Los cristales y piedras se combinan con piezas cuidadosamente seleccionadas para crear un atrapasol delicado y lleno de luz. Al recibir los rayos del sol, el cristal facetado inferior proyecta pequeños reflejos y arcoíris sobre el ambiente.
IMPORTANTE — OFERTAS POR DOCENA
EN LAS OFERTAS POR DOCENA, LOS COLORES Y LAS PIEDRAS SON SURTIDOS SIN ELECCIÓN.
Las piezas se envían combinadas de acuerdo con la disponibilidad, por lo que no es posible seleccionar individualmente el color o la piedra de cada atrapasol.

CADA PIEZA ES ÚNICA. CONSULTAR COLORES Y STOCK DISPONIBLE.`,
    precioLista: 7333,
    ofertaDocena: {
      cantidad: 12,
      precio: 55000,
      etiquetaEconomica: true
    },
    imagenes:[
      './minicristal.png',
      './miniamatista.png',
      './miniturma.png',
      './minicitrino.png',
      './minipirita.png',
      './minicelenita.png',
      './minirodocrosita.png'
    ]
  },
  {
    id: 'prod_alas_de_luz',
    nombre: 'Alas de Luz',
    descripcion: `Delicadas mariposas de resina con flores naturales y pequeños cristales que capturan la luz creando sutiles destellos. Un diseño sencillo y encantador, ideal para sumar un toque natural y luminoso a cualquier espacio.
Colores disponibles: azul celeste, rosa, lila, violeta, blanco y verdez con Flores naturales o glitter.

EN LAS OFERTAS POR DOCENA COLORES Y DISEÑOS SON SURTIDOS SEGÚN STOCK (SIN ELECCIÓN)

LAS OFERTAS POR DOCENA NO INCLUYEN PACKAGING INDIVIDUAL NI CÓDIGO DE ORÁCULO.

CADA PIEZA ES ÚNICA. CONSULTAR COLORES Y STOCK DISPONIBLE.`,
    precioLista: 8000,
    ofertaDocena: {
      cantidad: 12,
      precio: 60000,
      etiquetaEconomica: true
    },
    imagenes:[
      './maribarateza1.png',
      './maribarateza2.png'
    ]
  },
  {
    id: 'prod_luz_astral',
    nombre: 'Luz Astral',
    descripcion: `Delicada estrella de resina con flores naturales y pequeños cristales que capturan la luz y proyectan sutiles destellos. Un diseño sencillo y luminoso, ideal para sumar un detalle especial a cualquier espacio.
Colores disponibles: azul celeste, rosa, lila, violeta, blanco y verde. 🌈
Ideal para tiendas, regalerías y emprendimientos.
Las estrellas pueden ser con flores naturales o con glitter 

EN LAS OFERTAS POR DOCENA COLORES Y DISEÑOS SON SURTIDOS SEGÚN STOCK (SIN ELECCIÓN)

LAS OFERTAS POR DOCENA NO INCLUYEN PACKAGING INDIVIDUAL NI CÓDIGO DE ORÁCULO.

CADA PIEZA ES ÚNICA. CONSULTAR COLORES Y STOCK DISPONIBLE.`,
    precioLista: 8000,
    ofertaDocena: {
      cantidad: 12,
      precio: 60000,
      etiquetaEconomica: true
    },
    imagenes:[
      './estrebarateza3.png',
      './estrebarateza1.png'
    ]
  },
  {
    id: 'prod_pequenas_mariposas',
    nombre: 'Pequeñas Mariposas',
    descripcion: `Disponibles en Varios colores
Rosa
Celeste
Azul
Lila
Violeta 
Verde
Blanco

CADA PIEZA ES ÚNICA. CONSULTAR COLORES Y STOCK DISPONIBLE.`,
    precioLista: 16000,
    imagenes:[
      './mariposi.jpg'
    ]
  },
  {
    id: 'prod_pequenas_estrellas',
    nombre: 'Pequeñas estrellas',
    descripcion: `Pequeñas estrellas.

Estrellas de resina epóxica y flores naturales.
Cristal de roca para potenciar la cantidad de reflejos y destellos.
Podes elegir entre los siguientes colores:
- Rosa
- Lila
- Violeta 
- Celeste 
- Azul
- Verde

CADA PIEZA ES ÚNICA. CONSULTAR COLORES Y STOCK DISPONIBLE.`,
    precioLista: 16000,
    imagenes:[
      './estrellas.png'
    ]
  },
  {
    id: 'prod_pequena_flor_de_loto',
    nombre: 'Pequeña Flor de Loto',
    descripcion: `Atrapasol con pequeñas Flores de loto, piedras naturales y cristales de roca
Disponible con diferentes piedras:
Cuarzo Rosa
Amatista 
Cuarzo celeste
Sodalita 
Aventurina
Turquesa 
Piedra Luna.

CADA PIEZA ES ÚNICA. CONSULTAR COLORES Y STOCK DISPONIBLE.`,
    precioLista: 19000,
    imagenes:[
      './basicofl.jpg'
    ],
    videos: [
      'https://youtube.com/shorts/ylnTFpCVv4I?si=dd5bbCeJie3dsKER'
    ]
  },
  {
    id: 'prod_colibri_minimalista',
    nombre: 'Colibrí minimalista',
    descripcion: `Colibrí minimalista
Atrapasol con colibrí de resina epóxica y flores naturales 
Cristal de roca que aumenta la cantidad de reflejos y destellos.
Podes elegir entre los siguientes colores.
- Rosa
- Lila
- Violeta 
- Celeste 
- Azul
- Verde
Pueden ser con flores naturales o glitter.
EN LAS OFERTAS S POR DOCENA COLORES Y DISEÑOS SON SURTIDOS SEGÚN STOCK (SIN ELECCIÓN)

LAS OFERTAS POR DOCENA NO INCLUYEN PACKAGING INDIVIDUAL NI CÓDIGO DE ORÁCULO.

CADA PIEZA ES ÚNICA. CONSULTAR COLORES Y STOCK DISPONIBLE.`,
    precioLista: 19000,
    ofertaDocena: {
      cantidad: 12,
      precio: 150000,
      etiquetaEconomica: true
    },
    imagenes:[
      './coliminimalista.png',
      './coliminimalista2.png'
    ]
  },
  {
    id: 'prod_mariposa_minimalista',
    nombre: 'Mariposa minimalista',
    descripcion: `Mariposa minimalista
Atrapasol con maripsoa de resina epóxica y flores naturales o glitter 
Cristal de roca que aumenta la cantidad de reflejos y destellos.
Podes elegir entre los siguientes colores.
- Rosa
- Lila
- Violeta 
- Celeste 
- Azul
- Verde

EN LAS OFERTAS POR DOCENA COLORES Y DISEÑOS SON SURTIDOS SEGÚN STOCK (SIN ELECCIÓN).

LAS OFERTAS POR DOCENA NO INCLUYEN PACKAGING INDIVIDUAL NI CÓDIGO DE ORÁCULO.

CADA PIEZA ES ÚNICA. CONSULTAR COLORES Y STOCK DISPONIBLE.`,
    precioLista: 19000,
    ofertaDocena: {
      cantidad: 12,
      precio: 150000,
      etiquetaEconomica: true
    },
    imagenes:[
      './mariminimalista.png'
    ]
  },
  {
    id: 'prod_aros',
    nombre: 'Aros',
    descripcion: `Doble aro con cristales de roca y pieza de resina con flores naturales.
Podes elegir entre colibríes, mariposas, gatito o luna en diferentes colores

CADA PIEZA ES ÚNICA. CONSULTAR COLORES Y STOCK DISPONIBLE.`,
    precioLista: 25000,
    imagenes:[
      './componentes.png',
      './Aros.png',
      './Aros2.jpg'
    ],
    videos: [
      'https://youtube.com/shorts/pxrXe7BeolU?si=MJst9ekdkm-sunGS'
    ]
  },
  {
    id: 'prod_carrusel_de_colibrie',
    nombre: 'Carrusel de Colibríes',
    descripcion: `Flores naturales encapsuladas en resina.
Cristal de roca y caireles de vidrio.
Disponible en diferentes colores.
Consultar stock disponible

CADA PIEZA ES ÚNICA. CONSULTAR COLORES Y STOCK DISPONIBLE.`,
    precioLista: 26000,
    imagenes:[
      './carrusel.png'
    ]
  },
  {
    id: 'prod_pequena_luna',
    nombre: 'Pequeña Luna',
    descripcion: `Atrapasol con luna de resina epóxica y flores Naturales.
Con doble aro trenzado con piedras y cristal de roca.
Podes elegir entre las siguientes piedras y colores.
Amatista -lila/violeta 
Cuarzo Rosa - Rosa 
Cuarzo celeste - celeste
Piedra Luna - blanco
Sodalita - azul
Aventurina - verde
Turquesa - turquesa 

CADA PIEZA ES UNICA. CONSULTAR STOCK Y COLORES DISPONIBLES.`,
    precioLista: 27000,
    imagenes:[
      './lunada.png',
      './lunada2.png',
      './lunada3.png'
    ]
  },
  {
    id: 'prod_mariposa_clasica',
    nombre: 'Mariposa clásica',
    descripcion: `Mariposa de resina con flores Naturales.
Doble aro trenzado con piedras Naturales y cristal de Roca.
Varias piedras y colores disponibles:
Cuarzo Rosa - Rosa
Amatista - Lila/Violeta
Cuarzo celeste - celeste
Aventurina - Verde
Sodalita - Azul
Piedra Luna - Blanco 
Turquesa - turquesa

CADA PIEZA ES ÚNICA. CONSULTAR COLORES Y STOCK DISPONIBLE.`,
    precioLista: 28000,
    imagenes:[
      './maripoda.jpg'
    ],
    videos: [
      'https://youtube.com/shorts/HgWIG47mLDs?si=F0nqF_-VpLPdLNMR'
    ]
  },
  {
    id: 'prod_aros_de_luz',
    nombre: 'Aros de luz',
    descripcion: `Doble aro con cristales de roca y pieza de resina con flores naturales
Podés elegir para su centro cualquiera de estos cristales:
Cuarzo cristal 
Amatista 
Turmalina 
Pirita 
Turmalina 
Cianita negra 
Cianita Azul 
Cuarzo Rosa.
Valor 28000

CADA PIEZA ES ÚNICA. CONSULTAR COLORES Y STOCK DISPONIBLE.`,
    precioLista: 28000,
    imagenes:[
      './Arosdeluz.png',
      './Arosdeluz2.png'
    ],
    videos: [
      'https://youtube.com/shorts/x6VmrS_gsqI?si=Df2ecDUGVr8fwbuE'
    ]
  },
  {
    id: 'prod_hermoso_colibri',
    nombre: 'Hermoso Colibrí',
    descripcion: `Atrapasol con figura de colibrí realizada en Resina con flores naturales. 
Doble aro trenzado con piedras naturales y cristal de roca.
Piedras y colores disponibles: 
Cuarzo Rosa -  Rosa 
Amatista - Lila/Violeta 
Cuarzo celeste - Celeste
Piedra Luna - Blanco 
Sodalita - Azul 
Aventurina -Verde
Turquesa - Turquesa

CADA PIEZA ES ÚNICA. CONSULTAR COLORES Y STOCK DISPONIBLE.`,
    precioLista: 28000,
    imagenes:[
      './colibrida.png'
    ],
    videos: [
      'https://youtube.com/shorts/t9SP2TDjjaE?si=cpwhkk1SXCkbIvW7',
      'https://youtube.com/shorts/lbmntxlp6PU?si=0HJ3VMRQUBSk2yRe',
      'https://youtube.com/shorts/EyYBAXcJGu8?si=gxTlbEE8Lo6b1ZO_'
    ]
  },
  {
    id: 'prod_gatitos_energeticos',
    nombre: 'Gatitos energéticos',
    descripcion: `Gatito de resina con flores Naturales/glitter. Aro trenzado con piedras naturales y cristal de roca. Prisma de vidrio.
Podes elegir entre las siguientes piedras:
Cuarzo Cristal 
Cuarzo Rosa
Turmalina
Cianita negra (escoba de bruja)
Amatista 
Pirita

CADA PIEZA ES ÚNICA. CONSULTAR COLORES Y STOCK DISPONIBLE.`,
    precioLista: 32000,
    imagenes:[
      './gatitocuar.png',
      './gatotur.png'
    ],
    videos: [
      'https://youtube.com/shorts/QjRg9Rlw_fY?si=guAvYePqbJ6MI7R7',
      'https://youtube.com/shorts/RPveNQ1zTDM?si=ULB6u2lB8KCRCE8-'
    ]
  },
  {
    id: 'prod_luna_creciente',
    nombre: 'Luna Creciente',
    descripcion: `Luna en resina con flores Naturales, cristal de roca y prismas de vidrio.
Colores disponibles:
Rosa
Celeste
Azul 
Lila
Violeta 
Verde
Blanco

CADA PIEZA ES ÚNICA. CONSULTAR COLORES Y STOCK DISPONIBLE.`,
    precioLista: 33000,
    imagenes:[
      './Lunagrande2.png',
      './Lunagrande.jpg',
      './Lunagrande3.png'
    ],
    videos: [
      'https://youtube.com/shorts/DYCQ9rI-i8Q?si=MEZjZixKnoULYml_'
    ]
  },
  {
    id: 'prod_colibri_de_alpaca',
    nombre: 'Colibrí de Alpaca',
    descripcion: `Colibrí artesanal de alpaca soldados a mano con flores naturales encapsuladas en Resina.
Varios colores para elegir:
Rosa
Lila
Violeta
Celeste 
Azul
Blanco 
Verde

CADA PIEZA ES ÚNICA. CONSULTAR COLORES Y STOCK DISPONIBLE.`,
    precioLista: 34000,
    imagenes:[
      './colialp.jpg'
    ],
    videos: [
      'https://youtube.com/shorts/kwhj6klQrU0?si=4HzkDcXj8aiZzURo'
    ]
  },
  {
    id: 'prod_arbol_de_la_abundanc',
    nombre: 'Árbol de la abundancia',
    descripcion: `Atrapasol con árbol de la vida y piedras naturales Doble aro trenzado con piedras naturales y cristal de roca. Caireles de vidrio  PIEDRAS Y COLORES DISPONIBLES: • Cuarzo Rosa: Rosa • Amatista: Lila / Violeta • Cuarzo Celeste: Celeste • Sodalita: Azul • Aventurina: Verde • Turquesa: Turquesa  CADA PIEZA ES ÚNICA. CONSULTAR STOCK DISPONIBLE.`,
    precioLista: 35000,
    imagenes:[
      './avpirita.png'
    ]
  },
  {
    id: 'prod_dulce_libelula',
    nombre: 'Dulce libélula',
    descripcion: `Atrapasol con marco de alpaca soldada a mano. 
Flores naturales encapsuladas en resina.
Pueden personalizarse o realizarse en el color que más te guste o mejor combine con tu decoración.
Consultar stock disponible.

CADA PIEZA ES ÚNICA. CONSULTAR COLORES Y STOCK DISPONIBLE.`,
    precioLista: 35000,
    imagenes:[
      './libelula.png'
    ],
    videos: [
      'https://youtube.com/shorts/UHM9TO_VcW0?si=rdf0EzsxdfmdOAgZ'
    ]
  },
  {
    id: 'prod_bola_magica',
    nombre: 'Bola Mágica',
    descripcion: `Doble Aro entrelazado,.trenzado con piedras naturales y cristal de roca.
Podes elegir si en el centro querés piedra natural o prisma de vidrio.
Piedras centrales que podés elegir:
Cuarzo Cristal - Blanco cristalino 
Cuarzo Rosa - Rosa claro
Pirita - Dorado
Turmalina - Negro
Cianita negra - Negro
Cianita azul - Celeste oscuro 
Amatista Lila/violeta.

CADA PIEZA ES ÚNICA. CONSULTAR COLORES Y STOCK DISPONIBLE.`,
    precioLista: 37000,
    imagenes:[
      './bolachica.png',
      './Bolachica2.png'
    ],
    videos: [
      'https://youtube.com/shorts/7X0sjSqfJNo?si=SG1fykOqznwtXmcn',
      'https://youtube.com/shorts/HL-gqEeWqKw?si=gfTPGvL4usSlpB5k',
      'https://youtube.com/shorts/kWTCfn6IJmg?si=6E6agoB07oMxeX04'
    ]
  },
  {
    id: 'prod_piramide_de_energia',
    nombre: 'Pirámide de energía',
    descripcion: `Pirámide de bronce artesanal trenzada con piedras Narurales y cristal de roca.
podes elegir entre más siguientes piedras:
Amatista 
Cuarzo cristal 
Cuarzo Rosa 
Pirita
Turmalina.

CADA PIEZA ES ÚNICA. CONSULTAR COLORES Y STOCK DISPONIBLE.`,
    precioLista: 38000,
    imagenes:[
      './reflejos-atrapasol11.png'
    ],
    videos: [
      'https://youtube.com/shorts/8vLFoU4eRGo?si=Ep6_LQDqp4nGqEs7'
    ]
  },
  {
    id: 'prod_bola_magica_gigante',
    nombre: 'Bola Mágica gigante',
    descripcion: `Doble aro trenzado con piedras naturales y cristal de roca.
Podes elegir entre diferentes piedras:
Amatista 
Cuarzo Rosa
Cuarzo cristal 
Pirita 
Turmalina

CADA PIEZA ES ÚNICA. CONSULTAR COLORES Y STOCK DISPONIBLE.`,
    precioLista: 58000,
    sinStock: true,
    imagenes:[
      './Bolagrande.png',
      './Bola grande.jpg'
    ],
    videos: [
      'https://youtube.com/shorts/PjENaBqcFlo?si=-apFoSq0nQb4MOGy'
    ]
  }
];

