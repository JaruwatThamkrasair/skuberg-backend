<h1>How to run project</h1>

1. Clone the  repository :
<div style="padding:3;background-color:'black';color:'white'">git clone https://github.com/JaruwatThamkrasair/skuberg-backend.git</div>

3. in command line : cd skuberg-backend
4. in command line : npm install
5. in command line : node server.mjs

[Users]
// ดึงข้อมูล Users ทั้งหมด
GetAllUser : localhost:3000/api/users @ method GET

// สร้าง User
Create User : localhost:3000/api/user/register @ method POST
    {   
        "name" : "test",
        "lastname": "test",
        "email" : "test@test.com",
        "phone": "0808080808",
        "walletAddress": "0xFc4D1e84E8193a942Ec88ec89BD887Dd10D281cA",
        "bookbank": "0009875432"
    }
    
// Approve Status สำหรับ Verify ข้อมูล User
Approve User : localhost:3000/api/user/approve @ method POST

{
    "user_id": 3
}

// ดึงข้อมูล Transaction ที่เกี่ยวข้องกับ User__id นั้น ๆ
User Transactions : localhost:3000/api/user/Transaction @ method POST

{
    "user_id": 3
}

---------------------------------------------------------------------------------------------
[Orders]

// ดึงข้อมูล Order ทั้งหมด
GetAllOrder : localhost:3000/api/orders @ method GET

// สร้าง Order เช่น ตั้งขายเหรียญ Bitcoin, รับซื้อเหรียญ Bitcoin
Create Order : localhost:3000/api/orders/create @ method POST
    {   
        "user_id": 2, \\ ยูสเซอร์ที่ตั้งการขายเหรียญ
        "cryptoId": 1, \\ เหรียญ Bitcoin
        "price": 3200000, \\ จำนวนที่ต้องการซื้อ หรือ ต้องการขาย
        "quantity": 2, \\ จำนวน
        "status": "pending" \\ สถานะ
    }

---------------------------------------------------------------------------------------------

[Transactions]

// ดึงข้อมูล Transaction ทั้งหมด
Transactions : localhost:3000/api/transactions @ method GET

// ข้อมูล Transaction ที่บันทึกไว้ ก่อนนำไปแจงรายละเอียดเป็น Transaction Detail
Transaction Raw Data : localhost:3000/api/transactions/1 @ method GET

{
    "transaction": [
        {
            "TransactionId": 1, \\ TransactionId
            "orderId": 1, \\ OrderId
            "sendder": { \\ ผู้ขาย
                "sendderId": 1, \\ user_id ของผู้ขาย
                "receiverId": 2, \\ user_id ของผู้รับ
                "cryptocurrencyId": 1, \\ cryptocurrencyId
                "quantity": 2, \\ จำนวนที่ขาย
                "type": "ownerpost", \\ ขายสินค้า
                "createion_time": "2025-01-24T02:51:58.468Z",
                "deleted_at": "2025-01-24T02:51:58.468Z"
            },
            "receiver": { \\ ผู้ทำธุรกรรม
                "sendderId": 2, \\ user_id ของซื้อ
                "receiverId": 1, \\ user_id ของผู้ขาย
                "price": 3000000, \\ ราคาที่ผู้ขายตั้งไว้
                "quantity": 2, \\ จำนวนที่ซื้อ
                "totalPrice": 6000000, \\ จำนวนเงินทั้งหมดที่ต้องจ่าย
                "type": "buyyer", \\ ผู้ซื้อเหรียญ
                "createion_time": "2025-01-24T02:51:58.468Z",
                "deleted_at": "2025-01-24T02:51:58.468Z"
            },
                "creationTime": "2025-01-24T09:41:36.032Z",
                "transaction_status": "Successful",
                "deleted_at": null
        }
    ]
}

// ข้อมูล Transaction แบบ Map ข้อมูลจาก Unique Key เรียบร้อยแล้ว
Transactions Detail : localhost:3000/api/transactions/details/1

response = {
    "transaction": [
        {
            "TransactionId": 1, // TransactionId
            "OrderId": 1, // OrderId ref OrderId
            "sendder": {
                "sendderBy": "jaruwat thamkrasair", // ชื่อผู้ส่งเหรียญ
                "receiverBy": "game test", // ชื่อผู้รับเหรียญ
                "sendderTo": "0x77bCcB0f03e115Ee1e4ae305d6A14Fd7092913b3", // จ่ายเงินให้กับกระเป๋าผู้ซื้อ
                "coin": "Bitcoin", // เหรียญที่ส่ง
                "amount": 2, // จำนวนเหรียญที่ส่ง
                "type": "sell" // ผู้ขาย
            },
            "receiver": {
                "sendderBy": "game test", // ผู้จ่ายเงิน
                "receiverBy": "jaruwat thamkrasair", // ผู้รับเงิน
                "sendderTo": "0xFc4D1e84E8193a942Ec88ec89BD887Dd10D281cA", // จ่ายเงินให้กับกระเป๋าผู้ขาย
                "price": "3400000", // ราคาที่ผู้ขายตั้งไว้
                "quantity": "2", // จำนวนที่ซื้อ
                "totalPay": 6800000, // จำนวนเงินรวมที่ต้องจ่ายทั้งหมด
                "type": "buy" // ผู้ซื้อ
            },
            "creationTime": "2025-01-23T16:21:10.182Z"
        }
    ]
}

// สร้าง Order เช่น ตั้งขายเหรียญ Bitcoin, รับซื้อเหรียญ Bitcoin
[Create Transaction when OrderConfirm]

Create Order : localhost:3000/api/orders/create @ method POST
    {   
     "user_id": 2,
        "cryptoId": 1,
        "price": 3200000,
        "quantity": 2,
        "status": "pending"
    }

localhost:3000/api/orders/confirm @ method POST

// Confirm Order เพื่อสร้าง Transaction
Payload : 
{
    "orderid": 3, \\ confirm orderid = 3
    "user_id": 2 \\ confirm by user_id = 2
}

response :

{
    "order": {
        "Message": "Order completed",
        "Transaction": [
       {
            "TransactionId": 1, // TransactionId
            "OrderId": 1, // OrderId ref OrderId
            "sendder": { // ชื่อผู้ส่งเหรียญ
                "sendderBy": "jaruwat thamkrasair", // ชื่อผู้ส่งเหรียญ
                "receiverBy": "game test", // ชื่อผู้รับเหรียญ
                "sendderTo": "0x77bCcB0f03e115Ee1e4ae305d6A14Fd7092913b3", // จ่ายเงินให้กับกระเป๋าผู้ซื้อ
                "coin": "Bitcoin", // เหรียญที่ส่ง
                "amount": 2, // จำนวนเหรียญที่ส่ง
                "type": "sell" // ผู้ขาย
            },
                "receiver": { // ผู้จ่ายเงิน
                "sendderBy": "game test", // ผู้จ่ายเงิน
                "receiverBy": "jaruwat thamkrasair", // ผู้รับเงิน
                "sendderTo": "0xFc4D1e84E8193a942Ec88ec89BD887Dd10D281cA", // จ่ายเงินให้กับกระเป๋าผู้ขาย
                "price": "3400000", // ราคาที่ผู้ขายตั้งไว้
                "quantity": "2", // จำนวนที่ซื้อ
                "totalPay": 6800000, // จำนวนเงินรวมที่ต้องจ่ายทั้งหมด
                "type": "buy" // ผู้ซื้อ
                },
          "creationTime": "2025-01-24T09:41:36.032Z",
                "transaction_status": "Successful",
                "deleted_at": null
            }
            
        ]
    }
}

---------------------------------------------------------------------------------------------


---------------------------------------------------------------------------------------------

