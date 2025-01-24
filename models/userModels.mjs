import { TransactionData, OrderData, userData, CryptocurrencyData, TransactionDataAll } from "../seed.mjs";
import { UserTransactionData } from "../seed.mjs";
const Data = userData();

export const findMany = () => {
  const Data = userData();
  return Data;
};

export const create = (req) => {

  try {
    const exitsEmail = Data.find((item) => item.email === req.email);
    if (exitsEmail) {
      return { Message: "This email is already Used", Email: exitsEmail.email };
    }

    const newId = Data.length + 1;
    const newData = 
      {
        id: newId,
        name: req.name,
        lastname: req.lastname,
        email: req.email,
        phone: req.phone,
        walletAddress: req.walletAddress,
        bookbank: req.bookbank,
        status: "New",
        createion_time: new Date(),
        deleted_at: null,
      }
    ;
    Data.push(newData);
    return { Message: "Create new User Success", Data: newData };
  } catch (e) {
    throw new Error(e.message);
  }
};

export const ApproveUser = (id) => {
  const Data = userData();
  const findUser = Data.find((item) => item.id === id);
  if (!findUser) {
    return { Message: "User not found" };
  }
  findUser.status = "Approved";
  return { Message: "User Approved", User: findUser };
};

export const userTransaction = (id) => {
  const transactions = UserTransactionData(id);
  const Order = OrderData();
  const User = userData();
  const Cryto = CryptocurrencyData();
if (!transactions) {
  return { error: "Transaction not found" };
}

  const transaction = transactions.map((item) => {
      const userSendder = User.find((user) => user.id === item.sendder.sendderId);
      const cryptocurrencySendder = Cryto.find((crypto) => crypto.id === item.sendder.cryptocurrencyId);
      const order = Order.find((order) => order.userId === id);
      const userReceiver = User.find((user) => user.id === item.receiver.sendderId);

      return { 
          TransactionId : item.TransactionId,
          OrderId: item.orderId,
          sendder: {
              sendderId: userSendder.name + " " + userSendder.lastname,
              receiverId: userReceiver.name + " " + userReceiver.lastname,
              sendderTo: userReceiver.walletAddress,
              coin: cryptocurrencySendder.name,
              amount: item.sendder.quantity,
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
          creationTime: new Date()
      }
  })

  return transaction;
}
