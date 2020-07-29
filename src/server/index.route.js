import {Router} from 'express';
const router = Router();

import userRoutes from './user/routes/user.route';
router.use('/users',userRoutes);

export default router;