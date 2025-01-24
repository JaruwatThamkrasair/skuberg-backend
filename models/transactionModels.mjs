import { TransactionData, OrderData, userData, CryptocurrencyData, TransactionDataAll } from "../seed.mjs";


export const findMany = () => {
    const transactions = TransactionDataAll();
    return transactions;
}
export const GetTransaction = (id) => {
    const transactions = TransactionData(id);
    if (!transactions) {
        return { error: "Transaction not found" };
    }
    return transactions;
}


export const TransactionDetails = (id) => {
    const transactions = TransactionData(id);
    const Order = OrderData();
    const User = userData();
    const Cryto = CryptocurrencyData();

  if (!transactions) {
    return { error: "Transaction not found" };
  }
    const transaction = transactions.map((item) => {
        const userSendder = User.find((user) => user.id === item.sendder.sendderId);
        const cryptocurrencySendder = Cryto.find((crypto) => crypto.id === item.sendder.cryptocurrencyId);
        const order = Order.find((order) => order.id === item.orderId);
        const userReceiver = User.find((user) => user.id === item.receiver.sendderId);
  
        return { 
            TransactionId : item.TransactionId,
            OrderId: item.orderId,
            sendder: {
                sendderId: userSendder.name + " " + userSendder.lastname,
                receiverId: userReceiver.name + " " + userReceiver.lastname,
                sendderTo: userReceiver.walletAddress,
                coin: cryptocurrencySendder.name,
                amount: order.quantity,
                type: item.sendder.type
            },
            receiver: {
                sendderId: userReceiver.name + " " + userReceiver.lastname,
                receiverId: userSendder.name + " " + userSendder.lastname,
                sendderTo: userSendder.bookbank,
                price: item.receiver.price,
                quantity: item.receiver.quantity,
                totalPay: item.receiver.totalPrice,
                type: item.receiver.type
            },
            creationTime: new Date(),
            transaction_status: "Successful",
            deleted_at: null
        }
    })

    return transaction;
};

export const createTransaction = (order, customerid) => {
    try{
        const transaction = {
            TransactionId: TransactionDataAll().length + 1,
            orderId: order.id,
            sendder: {
                sendderId: order.userId,
                receiverId: customerid,
                cryptocurrencyId: order.cryptocurrencyId,
                quantity: order.quantity,
                type: "sell",
                createion_time: new Date(),
                deleted_at: new Date(),
            },
            receiver: {
                sendderId: customerid,
                receiverId: order.userId,
                price: order.price,
                quantity: order.quantity,
                totalPrice: order.price * order.quantity,
                type: "buy"
            },
            creation_time: new Date(),
            transaction_status: "Successful",
            deleted_at: null
        };
        TransactionDataAll().push(transaction);
        return TransactionDetails(transaction.TransactionId);
    }catch(err){
        return { error: err.message };
    }
}