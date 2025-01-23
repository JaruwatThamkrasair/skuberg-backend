const TransactionMockData = [
    {
    TransactionId: 1,
    orderId: 1,
      sendder: {
        sendderId: 1,
        receiverId: 2,
        cryptocurrencyId: 1,
        quantity: 2,
        type: "sell",
        createion_time: new Date(),
        deleted_at: new Date(),
      }, receiver: {
        sendderId: 2,
        receiverId: 1,
        totalPrice: 6800000,
        quantity: 2,
        type: "buy",
        createion_time: new Date(),
        deleted_at: new Date(),
      }
    },
    {
        TransactionId: 2,
        orderId: 2,
          sendder: {
            sendderId: 2,
            receiverId: 1,
            cryptocurrencyId: 3,
            quantity: 2,
            type: "sell",
            createion_time: new Date(),
            deleted_at: new Date(),
          }, receiver: {
            sendderId: 1,
            receiverId: 2,
            totalPrice: 315,
            quantity: 3,
            type: "buy",
            createion_time: new Date(),
            deleted_at: new Date(),
          }
        }
  ];

  
const orderdatadetail = [
    {
      id: 1,
      userId: 1,
      cryptocurrencyId: 1,
      quantity: 2,
      totalPrice: 6800000,
      status: "completed",
      createion_time: new Date(),
      deleted_at: new Date(),
    },
    {
        id: 2,
        userId: 2,
        cryptocurrencyId: 3,
        quantity: 3,
        totalPrice: 315,
        status: "completed",
        createion_time: new Date(),
        deleted_at: new Date(),
      },
  ];

  const CryptoData = [
    {
      id: 1,
      name: "Bitcoin",
      symbol: "BTC",
      price: 3400000,
      createion_time: new Date(),
      deleted_at: new Date(),
    },
    {
      id: 2,
      name: "Ethcoint",
      symbol: "ETH",
      price: 110000,
      createion_time: new Date(),
      deleted_at: new Date(),
    },
    {
      id: 3,
      name: "Xrpcoint",
      symbol: "XRP",
      price: 105,
      createion_time: new Date(),
      deleted_at: new Date(),
    },
    {
      id: 4,
      name: "Dogecoin",
      symbol: "DOGE",
      price: 12,
      createion_time: new Date(),
      deleted_at: new Date(),
    },
  ];

  const UserData = [
    {
      id: 1,
      name: "jaruwat",
      lastname: "thamkrasair",
      email: "jaruwat@test.com",
      password: "testtest",
      phone: "0971302225",
      walletAddress: "0xFc4D1e84E8193a942Ec88ec89BD887Dd10D281cA",
      createion_time: new Date(),
      deleted_at: new Date(),
    },
    {
      id: 2,
      name: "game",
      lastname: "test",
      email: "test@test.com",
      password: "testtest",
      phone: "0971302225",
      walletAddress: "0x77bCcB0f03e115Ee1e4ae305d6A14Fd7092913b3",
      createion_time: new Date(),
      deleted_at: new Date(),
    },
  ];


export default {
    TransactionMockData,
    orderdatadetail,
    CryptoData,
    UserData
}