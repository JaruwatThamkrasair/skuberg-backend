import { Router } from "express";
import { findMany, create, ApproveUser } from "../models/userModels.mjs";

const router = Router(); 
router.get('/users', function (req, res) {
    const data = findMany();
    res.send({ data: data });
})

router.post('/user/register', function (req, res){
try{
    const { name, lastname, email, phone, walletAddress } = req.body;
    const newUser = {
        name,
        lastname,
        email,
        phone,
        walletAddress
    }
    const createUser = create(newUser);
    res.send({ createUser })
}catch(err){
    res.status(500).send({ error: err.message })
}
});


router.post('/user/approve', function (req, res){
try{
    const { user_id } = req.body;
    const approveUser = ApproveUser(user_id);
    res.send({ approveUser })
}catch(err){
    res.status(500).send({ error: err.message })
}
})
export default router;