const API_URL = 'http://localhost:8080';
const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFuaXRhLmJvcmdAc3lzdGVycy54eXoiLCJpYXQiOjE2ODQ0MjM3NTUsImV4cCI6MTY4NDQyNzM1NSwic3ViIjoiMSJ9.W2AIJMMYky4lGTmIiDGhlqrfabCYhHoknq98wMK63QA';

export const adicionarProdutos = async (nomeProduto, precoProduto, tipoProduto, categoriaProduto, idProduto) => {

  const response = await fetch(`${API_URL}/products`, {
      method: "POST",
      headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${AUTH_TOKEN}`,
      },
      body: JSON.stringify({ 
          name: nomeProduto,
          price: precoProduto,
           type: tipoProduto, 
           category: categoriaProduto,
          id: idProduto })
  });
  const products = await response.json();
  console.log(products);

  return products;
}

export const obterProdutos = async () => {
  
  try {
    const response = await fetch(`${API_URL}/products`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${AUTH_TOKEN}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};