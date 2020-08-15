import {Router} from 'express';
import * as deviceController from '../controllers/device.controller'
const router = Router();

router.route('/health-check').get((req,res,next)=>{
    res.json({message:'device route health ok'})})

router.get('/',deviceController.getAllDevices)
router.post('/',deviceController.addNewDevice)
router.delete('/',deviceController.deleteAllDevice)


export default router;