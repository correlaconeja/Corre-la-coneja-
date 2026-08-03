// ===============================================
// CODIFICADOR BASADO EN DICCIONARIO (CLC)
// ===============================================

const CodificadorCLC = (function () {

  /**
   * Recibe un código largo y busca si tiene un código corto asignado en el diccionario.
   * Si lo encuentra, devuelve el código corto. Si no, devuelve el código largo tal cual.
   */
  function acortar(codigoLargo) {
    if (!codigoLargo) return "";
    let largo = codigoLargo.toUpperCase().trim();
    
    if (window.diccionarioCLC) {
      let encontrado = Object.keys(window.diccionarioCLC).find(
        key => window.diccionarioCLC[key] === largo
      );
      if (encontrado) {
        return encontrado;
      }
    }
    
    return largo;
  }

  /**
   * Recibe un código corto y lo expande al código largo usando el diccionario.
   * Si no lo encuentra en el diccionario, lo devuelve tal cual.
   */
  function expandir(codigoCorto) {
    if (!codigoCorto) return "";
    let corto = codigoCorto.toUpperCase().trim();
    
    if (window.diccionarioCLC && window.diccionarioCLC[corto]) {
      return window.diccionarioCLC[corto];
    }
    
    return corto;
  }

  return {
    acortar: acortar,
    expandir: expandir
  };
})();






