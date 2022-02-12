//Funcion que recibe un array, y devuelve un elemento al azar.

export const randomItem = (items) => {
    return items[Math.floor(Math.random() * items.length)];
  };