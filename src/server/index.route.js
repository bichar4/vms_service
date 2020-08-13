import {Router} from 'express';
const router = Router();

import userRoutes from './user/routes/user.route';
import deviceRoutes from './device/routes/device.route';

router.use('/users',userRoutes);
router.use('/device',deviceRoutes);

export default router;