import express from 'express'
import { addOrderItems, getOrderById, updateOrderToPaid } from '../controllers/orderController.js'
const router = express.Router()

 
router.route('/').post(addOrderItems)

router.route('/:id').get(getOrderById)


export default router