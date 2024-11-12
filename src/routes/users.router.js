import { Router } from 'express';
import usersController from '../controllers/users.controller.js';
import errorHandler from '../utils/errorHandler.js';

const router = Router();

router.get('/',usersController.getAllUsers);
router.get('/:uid',usersController.getUser);
router.put('/:uid',usersController.updateUser);
router.delete('/:uid',usersController.deleteUser);

router.use(errorHandler);

export default router;