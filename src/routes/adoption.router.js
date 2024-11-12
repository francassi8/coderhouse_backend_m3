import { Router} from 'express';
import adoptionsController from '../controllers/adoptions.controller.js';
import errorHandler from '../utils/errorHandler.js';

const router = Router();

router.get('/',adoptionsController.getAllAdoptions);
router.get('/:aid',adoptionsController.getAdoption);
router.post('/:uid/:pid',adoptionsController.createAdoption);

router.use(errorHandler);

export default router;