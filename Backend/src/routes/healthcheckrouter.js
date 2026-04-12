import { healthCheck } from '../controllers/healthcheckcontroller.js';
import { Router } from 'express';

const router = Router();

router.get("/", healthCheck);

export default router;