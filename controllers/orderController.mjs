import { Router } from "express";
import { Orders, createOrder, OrdersConfirm } from "../models/orderModels.mjs";

const router = Router();
router.get("/orders", function (req, res) {
  const data = Orders();
  res.send({ data: data });
});

router.post("/orders/create", function (req, res) {
  try {
    const { customer_id, product_id, quantity, status } = req.body;
    const newOrder = { customer_id, product_id, quantity, status };
    const createdOrder = createOrder(newOrder);
    res.send({ data: createdOrder });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});
export default router;

router.post("/orders/confirm", function(req, res){
  try{
    const { orderid, customer_id } = req.body;
    const order = OrdersConfirm(orderid, customer_id);
    res.send({ order });    
  }catch (error) {
    res.status(500).send({ error: error.message });
  }
})