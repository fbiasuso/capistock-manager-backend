import express from 'express';
import usersRoutes from './usersRoutes.js';
import productsRoutes from './productsRoutes.js';

const router = express.Router();

router.use('/api/users', usersRoutes);
router.use('/api/products', productsRoutes);

export default router;