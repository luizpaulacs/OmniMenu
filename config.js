const CONFIG = {
  nomeNegocio: "Doceria Bella 🍪",
  corPrincipal: "#e84393", // Vermelho para Pizzaria (mude para #e84393 se for Doceria)
  whatsapp: "5515997675372", // Coloque seu número com DDD (apenas números)
  
  // Lista de produtos dinamicamente carregada
  produtos: [
    { id: 1, nome: "Pizza Calabresa", preco: 45.00, desc: "Molho, calabresa, cebola e muçarela." },
    { id: 2, nome: "Pizza Quatro Queijos", preco: 50.00, desc: "Muçarela, catupiry, provolone e gorgonzola." },
    { id: 3, nome: "Refrigerante Lata", preco: 6.00, desc: "Coca-cola ou Guaraná 350ml." }
    // Se fosse doceria, bastaria trocar por: { id: 1, nome: "Bolo de Pote", preco: 12.00, ... }
  ]
};