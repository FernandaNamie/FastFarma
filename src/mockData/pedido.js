export const pedido =
{
    id: 7, 
    
    orderSchedule: "19:11", 
    
    freight: 20, 
    
    price: 96.45, 
    
    status: "ORDERED", 
    
    minDeliveryTime: "19:11",
    
    maxDeliveryTime: "19:51",
    
    orderProducts: [{
        id: 13,
        produto:{
            cosmetico: true,
            id: 1,
            medicamento: true,
            nome: "medicamento1",
            peso: 45,
            preco: 53,
            quantidade: 1,
            receitado: true
        },
        quantity: 1
    },
    {
        id: 14,
        produto: {
            cosmetico: true,
            id: 2,
            medicamento: true,
            nome: "medicamento2",
            peso: 1,
            preco: 23.45,
            quantidade: 1,
            receitado: true
        },
        quantity: 1
    }]
};
