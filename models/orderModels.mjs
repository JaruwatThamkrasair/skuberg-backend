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

    const findUser = user.find((user) => user.id === req.customer_id);
    if(!findUser){
        return { Message: 'User not found' };
    }    
    const findProduct = Crypto.find((item) => item.id === req.product_id);
    if(!findProduct){
        return { Message: 'Product not found' };
    }

    const price = findProduct.price;
    const priceSum = price * req.quantity;

    const newOrder = {
        id: newId,
        userId: req.customer_id,
        cryptocurrencyId: req.product_id,
        quantity: req.quantity,
        totalPrice: priceSum,
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

export const OrdersConfirm = (id, customer_id) => {
    const order = OrderData();
    const findOrder = order.find((item) => item.id === id);
    if(!findOrder){
        return { Message: 'Order not found' };
    }
    findOrder.status = 'completed';
    const newTransaction = createTransaction(findOrder, customer_id);
    return { Message: 'Order completed', Transaction: newTransaction };
}