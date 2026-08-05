/* 
  =================================================================
  GUÍA SÚPER FÁCIL PARA AGREGAR UN NUEVO COMPONENTE:
  1. El código de la flor (ej: "AD") va como clave dentro de "flores".
  2. Recordá que "codigo" es una lista entre corchetes [ ] con el 
     código principal y el secundario entre comillas.
  3. No te olvides de poner una coma (,) al cerrar cada bloque de objeto.
  =================================================================
*/
const datosEstrella = {
  "cristales": {
    "01": {
      "nombre": "Cuarzo Rosa",
      "codigo": [
        "01"
      ],
      "frase": "Amor - Ternura - Armonía",
      "descripcion": "Piedra del amor incondicional y la paz infinita. Conecta con la energía del corazón, fomentando la compasión, la autoaceptación y la sanación emocional."
    },
    "02": {
      "nombre": "Cuarzo Cristal",
      "codigo": [
        "02"
      ],
      "frase": "Claridad - Energía - Amplificación",
      "descripcion": "Cristal maestro que amplifica las intenciones, purifica la energía y aporta la claridad necesaria para materializar los proyectos con fuerza y luz propia."
    },
    "03": {
      "nombre": "Amatista",
      "codigo": [
        "03"
      ],
      "frase": "Transmutación - Calma - Espiritualidad",
      "descripcion": "Piedra de alta vibración que protege, calma la mente y transmuta las energías densas en serenidad, favoreciendo la intuición y el equilibrio interior."
    },
    "04": {
      "nombre": "Pirita",
      "codigo": [
        "04"
      ],
      "frase": "Abundancia - Prosperidad - Éxito",
      "descripcion": "Asociada a la energía solar, la vitalidad y la riqueza. Actúa como un escudo protector y estimula la confianza, la acción y la atracción de nuevos logros."
    },
    "05": {
      "nombre": "Cuarzo Verde (Aventurina)",
      "codigo": [
        "05"
      ],
      "frase": "Salud - Bienestar - Oportunidades",
      "descripcion": "Piedra de la buena suerte y la vitalidad. Aporta bienestar general, calma la ansiedad y abre los caminos hacia nuevas oportunidades de crecimiento."
    },
    "06": {
      "nombre": "Ónix",
      "codigo": [
        "06"
      ],
      "frase": "Protección - Fortaleza - Enraizamiento",
      "descripcion": "Piedra de profunda protección y estabilidad. Aporta fuerza interior, ayuda a mantener el foco y otorga seguridad para sostener cualquier proceso de crecimiento."
    }
  },
  "figuras": {
    "AA": {
      "nombre": "Estrella",
      "codigo": [
        "AA",
        "17"
      ],
      "frase": "Esperanza - Guía - Luz",
      "descripcion": "Símbolo de esperanzas y guía. Representa la luz que orienta el camino, inspira a seguir adelante y recuerda que siempre existe un rumbo hacia el cual avanzar."
    },
    "AC": {
      "nombre": "Luna",
      "codigo": [
        "AC",
        "19"
      ],
      "frase": "Intuición - Ciclos - Calma",
      "descripcion": "Símbolo de los ciclos, la intuición y la calma. Representa la capacidad de renovarse en la quietud y la guía suave en los momentos de transición."
    },
    "SN001": {
      "nombre": "Sol Naciente",
      "codigo": [
        "SN001",
        "21",
        "01",
        "02",
        "03",
        "04",
        "05",
        "06"
      ],
      "frase": "Cristales con los que trabajamos",
      "descripcion": "Catálogo principal de cristales y piedras energéticas utilizadas para dar vida y armonía a cada creación."
    }
  },
  "flores": {
    "AB": {
      "nombre": "Siempreviva",
      "codigo": [
        "AB",
        "18"
      ],
      "frase": "Permanencia - Fortaleza - Recuerdo",
      "descripcion": "Símbolo de aquello que perdura en el tiempo. Representa la fortaleza, los recuerdos que permanecen vivos y la belleza de lo que deja una huella en el corazón."
    },
    "AD": {
      "nombre": "Arvejilla (Lepidium)",
      "codigo": [
        "AD",
        "20"
      ],
      "frase": "Potencial - Nuevos comienzos - Crecimiento",
      "descripcion": "Símbolo del potencial y los nuevos comienzos. Sus pequeñas semillas recuerdan que toda gran transformación nace de algo simple. Inspira confianza en los procesos de crecimiento y nos invita a creer en aquello que aunque aún no podamos verlo ya comenzó a florecer."
    }
  }
};

window.componentesAgregadosCLC = datosEstrella;
window.agregadosCLC = datosEstrella;
window.bclcAgregados = datosEstrella;



