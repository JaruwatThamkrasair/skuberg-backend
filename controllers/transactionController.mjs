import { GetTransaction, TransactionDetails, findMany, createTransaction } from "../models/transactionModels.mjs";
import { Router } from "express";

const router = Router();

router.get('/transactions', function(req, res){
    try{
        const transactions = findMany();
        res.send({ transactions });
    }catch(err){
        res.send(err.message);
    }
})

router.get('/transactions/:id', (req, res) => {
  try{
    const { id } = req.params;
    const transaction = GetTransaction(id);
    res.send({ transaction })
  }catch(err){
    res.send(err.message);
  }
})

router.get('/transactions/details/:id', (req, res) => {
    try{
      const { id } = req.params;
      const transaction = TransactionDetails(id);
      res.send({ transaction })
    }catch(err){
      res.send(err.message);
    }
})

export default router;