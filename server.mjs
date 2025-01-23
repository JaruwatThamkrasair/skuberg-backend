import express from 'express';
import userRoutes from './controllers/userController.mjs'
import orderRoutes from './controllers/orderController.mjs'
import transRoutes from './controllers/transactionController.mjs'

const app = express();
const port = 3000;
app.use(express.json());

app.use('/api', userRoutes);
app.use('/api', orderRoutes);
app.use('/api', transRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});