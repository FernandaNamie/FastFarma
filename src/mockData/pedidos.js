export const pedidos = [
  {
    client: "Leticia Cohen Ferrari",
    orderNumber: "A821AJKSD90",
    status: "Novo",
    message: "Clique para aceitar",
    minDeliveryTime: "12h50",
    maxDeliveryTime: "13h00",
    products: [
      {
        productName: "Spray de Tantum Verde para aplicação tópica, 30ml",
        amount: 1,
        price: 50.0,
      },
      {
        productName: "Comprimidos Arpeflu, 100 mg, 30pcs",
        amount: 2,
        price: 25.0,
      },
    ],
    shipping: 6.0,
    total: 106.0,
  },
  {
    client: "Guilherme Mariano",
    orderNumber: "A821AJKSF57",
    status: "Atrasado",
    message: "Entregue o pedido",
    minDeliveryTime: "14h20",
    maxDeliveryTime: "14h40",
    products: [
      { productName: "Band-aid Compeed 10 unidades", amount: 2, price: 5.0 },
    ],
    shipping: 4.0,
    total: 14.0,
  },
];
