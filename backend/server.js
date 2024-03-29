import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import colors from 'colors';

import poroductRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';

dotenv.config();

connectDB();

const app = express();

app.use(express.json())


app.get('/', (req, res) => {
    res.send('API is running');
})

app.use('/api/products', poroductRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)

app.get('/api/config/paypal', (req, res) => res.send(process.env.PAYPAL_CLIENT_ID))

app.use(notFound)

app.use(errorHandler)


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server is running in ${process.env.NODE_ENV} mode on ${PORT}`.yellow.bold.underline));