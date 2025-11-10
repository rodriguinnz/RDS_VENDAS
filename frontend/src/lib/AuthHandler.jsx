export const isLogged = () => {
    return localStorage.getItem('token') !== null;
}

export const doLogin = (token, user) => {
}

export const doLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
}

export const getUser = () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
}
export async function getProducts() {
    // simulação de produtos
    return [
      { id: 1, name: "Casa no Centro", price: 350000, image: "/images/casa1.jpg" },
      { id: 2, name: "Apartamento Frente Mar", price: 590000, image: "/images/apto.jpg" },
      { id: 3, name: "Terreno 10x25", price: 150000, image: "/images/terreno.jpg" },
    ];
  }
  