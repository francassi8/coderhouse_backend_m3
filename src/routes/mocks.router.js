import { Router } from 'express';
import mockingController from '../controllers/mocking.controller.js';
import errorHandler from '../utils/errorHandler.js';

const router = Router();


router.post('/mockingPets',mockingController.mockingPets);
router.use('/mockingUsers', mockingController.mockingUsers);
router.post('/generateData', mockingController.mockingALLData);


router.use(errorHandler);

export default router;