//Peticion api , debe devolver imagenes ramdom
export function fetchRamdomImage(amount = 1) {
    return new Promise((resolve) =>
      setTimeout(() => resolve({ data: amount }), 500)
    );
  }