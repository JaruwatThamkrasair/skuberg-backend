import Data from "./data.mjs";

export const userData = () => {
  return Data.UserData;
};

export const CryptocurrencyData = () => {
  return Data.CryptoData;
};

export const OrderData = () => {
  return Data.orderdatadetail;
};

export const TransactionDataAll = () => {
  return Data.TransactionMockData;
};

export const TransactionData = (id) => {
  const MockData = Data.TransactionMockData;
  const numerric = parseInt(id, 10);
  const transactions = MockData.find((item) => item.TransactionId === numerric);

  if (!transactions) {
    return null;
  }
  return [transactions];
};
