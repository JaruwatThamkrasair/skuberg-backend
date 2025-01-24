const TransactionMockData = [
    {
    TransactionId: 1,
    orderId: 1,
      sendder: {
        sendderId: 1,
        receiverId: 2,
        cryptocurrencyId: 1,
        quantity: 2,
        type: "ownerpost",
        createion_time: new Date(),
        deleted_at: new Date(),
      }, receiver: {
        sendderId: 2,
        receiverId: 1,
        price: 3000000,
        quantity: 2,
        totalPrice: 9000000,
        type: "buyyer",
        createion_time: new Date(),
        deleted_at: new Date(),
      },
      creationTime: new Date(),
      transaction_status: "Successful",
      deleted_at: null
    },
    {
        TransactionId: 2,
        orderId: 2,
          sendder: {
            sendderId: 2,
            receiverId: 1,
            cryptocurrencyId: 3,
            quantity: 2,
            type: "ownerpost",
            createion_time: new Date(),
            deleted_at: new Date(),
          }, receiver: {
            sendderId: 1,
            receiverId: 2,
            price: 100,
            quantity: 3,
            totalPrice: 300,
            type: "buyyer",
            createion_time: new Date(),
            deleted_at: new Date(),
          },
          creationTime: new Date(),
          transaction_status: "Successful",
          deleted_at: null
        },
        {
          TransactionId: 3,
          orderId: 3,
            sendder: {
              sendderId: 3,
              receiverId: 1,
              cryptocurrencyId: 1,
              quantity: 1,
              type: "ownerpost",
              createion_time: new Date(),
              deleted_at: new Date(),
            }, receiver: {
              sendderId: 1,
              receiverId: 3,
              price: 3000000,
              quantity: 1,
              totalPrice: 3000000,
              type: "buyyer",
              createion_time: new Date(),
              deleted_at: new Date(),
            },
            creationTime: new Date(),
            transaction_status: "Successful",
            deleted_at: null
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
      {
        id: 3,
        userId: 3,
        cryptocurrencyId: 1,
        quantity: 1,
        totalPrice: 3000000,
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
      bookbank: "0009875432",
      status: "Approved",
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
      bookbank: "9550124789",
      status: "Approved",
      createion_time: new Date(),
      deleted_at: new Date(),
    },
    {
      id: 3,
      name: "test3",
      lastname: "lasttest",
      email: "test3@test.com",
      password: "testtest",
      phone: "0971302225",
      walletAddress: "0x77bCcB0f03e115Ee1e4ae305d6A14Fd7092913b3",
      bookbank: "9550124789",
      status: "Approved",
      createion_time: new Date(),
      deleted_at: new Date(),
    },
    {
      id: 4,
      name: "test4",
      lastname: "lasttest4",
      email: "test4@test.com",
      password: "testtest",
      phone: "0971302225",
      walletAddress: "0x77bCcB0f03e115Ee1e4ae305d6A14Fd702231s23",
      bookbank: "9101651651",
      status: "New",
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