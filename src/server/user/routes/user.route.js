import {Router} from 'express';

const router = Router();
router.route('/health-check').get((req,res,next)=>{
    res.json({message:'health ok'})})

export default router;