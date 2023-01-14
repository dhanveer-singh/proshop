import express from 'express';
import { addOrderItems, getOrderById } from '../controllers/orderController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(protect, addOrderItems).get(getOrderById)
router.route('/:id').get(protect, getOrderById)


export default router;
