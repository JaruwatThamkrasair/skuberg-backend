# Skuberg Backend

This project is a backend system designed to handle cryptocurrency transactions, including creating orders, confirming transactions, and managing user information. The system provides APIs for users, orders, and transactions with detailed transaction mapping.

## Table of Contents

- [Getting Started](#getting-started)
- [Concept Overview](#concept-overview)
- [API Endpoints](#api-endpoints)
  - [User Endpoints](#user-endpoints)
  - [Order Endpoints](#order-endpoints)
  - [Transaction Endpoints](#transaction-endpoints)
- [Data Structures](#data-structures)

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

Data Storage Concept

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


This data provides detailed information about:

• Sender and receiver details.

• Amount of cryptocurrency and price.

• Status of the transaction.

Transaction Details Mapping

Each transaction includes additional details, such as wallet addresses and payment amounts:
    ```bash
