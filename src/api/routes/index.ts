import { Router } from 'express';
import productController from '../controller/product.controller';

const apiRouter = Router();
apiRouter.get('/product', productController.findAll);

export default apiRouter;
