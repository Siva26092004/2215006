import express from 'express';
import shorten from '../controllers/shortenController.js'

const router=express.Router();
router.post('/shorten',shorten);
export default router;