# Skuberg Backend

This project is a backend system designed to handle cryptocurrency transactions, including creating orders, confirming transactions, and managing user information. The system provides APIs for users, orders, and transactions with detailed transaction mapping.

## Table of Contents

- [Getting Started](#getting-started)
- [Concept Overview](#data-storage-concept)
- [API Endpoints](#api-endpoints)
  - [User Endpoints](#user-endpoints)
  - [Order Endpoints](#order-endpoints)
  - [Transaction Endpoints](#transaction-endpoints)
- [Data MockUp](#data-mockup-in-file-datamjs)
---

## Getting Started

Follow these steps to run the project on your local machine:

1. Clone the repository:
   ```bash
   git clone https://github.com/JaruwatThamkrasair/skuberg-backend.git
2. Navigate to the project directory:
   ```bash
   cd skuberg-backend
3. Install dependencies::
   ```bash
   npm install
4. Start the server:
   ```bash
   node server.mjs

## Data Storage Concept

This project focuses on handling Order and Transaction data, specifically for buying and selling cryptocurrency. Below is the flow of data:
Order Creation:
Orders are created when users post buy/sell requests for cryptocurrency.
Transaction Creation:
When an order is confirmed by another user, a Transaction is generated using the order details.
The transaction contains details of the sender (order creator) and the receiver (user who confirmed the order).
Transaction Data Structure

The transaction data is structured as follows:
```bash
"transaction": [
        {
        "TransactionId": 1,
        "orderId": 1,
        "sendder": {
            "sendderId": 1,
            "receiverId": 2,
            "cryptocurrencyId": 1,
            "quantity": 2,
            "type": "ownerpost",
            "creation_time": "2025-01-24T02:51:58.468Z",
            "deleted_at": null
        },
        "receiver": {
            "sendderId": 2,
            "receiverId": 1,
            "price": 3000000,
            "quantity": 2,
            "totalPrice": 6000000,
            "type": "buyer",
            "creation_time": "2025-01-24T02:51:58.468Z",
            "deleted_at": null
        },
        "creationTime": "2025-01-24T09:41:36.032Z",
        "transaction_status": "Successful",
        "deleted_at": null
      }
]
```

This data provides detailed information about:

  • Sender and receiver details.
  
  • Amount of cryptocurrency and price.
  
  • Status of the transaction.
  
Transaction Details Mapping

Each transaction includes additional details, such as wallet addresses and payment amounts:
  ```bash
    {
    "order": {
        "Message": "Order completed",
        "Transaction": [
            {
                "TransactionId": 1,
                "OrderId": 1,
                "sendder": {
                    "sendderBy": "jaruwat thamkrasair",
                    "receiverBy": "game test",
                    "sendderTo": "0x77bCcB0f03e115Ee1e4ae305d6A14Fd7092913b3",
                    "coin": "Bitcoin",
                    "amount": 2,
                    "type": "sell"
                },
                "receiver": {
                    "sendderBy": "game test",
                    "receiverBy": "jaruwat thamkrasair",
                    "sendderTo": "0xFc4D1e84E8193a942Ec88ec89BD887Dd10D281cA",
                    "price": "3400000",
                    "quantity": "2",
                    "totalPay": 6800000,
                    "type": "buy"
                },
                "creationTime": "2025-01-24T09:41:36.032Z",
                "transaction_status": "Successful",
                "deleted_at": null
            }
        ]
    }
}
```

# API Endpoints

## User Endpoints

1. Get All Users
   ```bash
   GET /api/users
2. Create User
   ```bash
   POST /api/user/register
   ```
   Payload:
   ```bash
    {
    "name": "test",
    "lastname": "test",
    "email": "test@test.com",
    "phone": "0808080808",
    "walletAddress": "0xFc4D1e84E8193a942Ec88ec89BD887Dd10D281cA",
    "bookbank": "0009875432"
    }
3. Approve User
   ```bash
   POST /api/user/register
      ```
   Payload:
   ```bash
    {
    "user_id": 3
    }
4. Approve User
   ```bash
   POST /api/user/Transaction
      ```
   Payload:
   ```bash
    {
    "user_id": 3
    }
***
## Order Endpoints

1. Get All Orders
   ```bash
   GET /api/orders
2. Create Order
   ```bash
   POST /api/orders/create
   ```
   Payload:
   ```bash
    {
    "user_id": 2,
    "cryptoId": 1,
    "price": 3200000,
    "quantity": 2,
    "status": "pending"
    }
3. Confirm Order (Creates a Transaction)
   ```bash
   POST /api/orders/create
      ```
   Payload:
   ```bash
    {
    "orderid": 4,
    "user_id": 2
    }
***
## Transaction Endpoints
1. Get All Transactions
   ```bash
   GET /api/transactions
2. Get Raw Transaction Data
   ```bash
   GET /api/transactions/:id
   ```
3. Get Transaction Details
   ```bash
   GET /api/transactions/details/:id
      ```
***
## Data Mockup In File Data.mjs
  ```bash
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

