export function GetPratos() {
  return {
    url: 'http://localhost:3000/pratos',
    options: {
      method: 'GET',
    },
  };
}
export function GetPratosFiltered(category) {
  return {
    url: `http://localhost:3000/pratos?category=${category}`,
    options: {
      method: 'GET',
    },
  };
}
