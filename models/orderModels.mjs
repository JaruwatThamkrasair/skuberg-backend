import { OrderData, CryptocurrencyData, userData } from "../seed.mjs";
import { createTransaction } from "./transactionModels.mjs";

export const Orders = () => {
    const order = OrderData();
    return order;
}

export const createOrder = (req) => {
    try{
    const user = userData();
    const Crypto = CryptocurrencyData();
    const order = OrderData();
    const newId = order.length + 1;

    const findUser = user.find((user) => user.id === req.user_id);
    if(!findUser){
        return { Message: 'User not found' };
    }

    if(findUser.status !== 'Approved'){
        return { Message: 'User not approved' };
    }
    
    const findProduct = Crypto.find((item) => item.id === req.cryptoId);
    if(!findProduct){
        return { Message: 'Product not found' };
    }

    const price = findProduct.price;
    const priceSum = price * req.quantity;

    const newOrder = {
        id: newId,
        userId: req.user_id,
        cryptocurrencyId: req.cryptoId,
        quantity: req.quantity,
        price: req.price,
        status: req.status,
        created_at: new Date(),
        updated_at: new Date(),
    };
    order.push(newOrder);
    return { Message : 'Order created', Order : newOrder};
}catch(error){
    return { Message: 'Error creating order', Error: error };
}
};

export const OrdersConfirm = (id, user_id) => {
    const order = OrderData();
    const findOrder = order.find((item) => item.id === id);
    if(!findOrder){
        return { Message: 'Order not found' };
    }
    findOrder.status = 'completed';
    const newTransaction = createTransaction(findOrder, user_id);
    return { Message: 'Order completed', Transaction: newTransaction };
}