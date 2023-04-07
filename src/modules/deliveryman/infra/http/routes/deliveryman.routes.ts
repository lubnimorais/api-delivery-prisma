import { Router } from 'express';

import { CreateDeliverymanController } from '../../../useCases/createDeliveryman/CreateDeliverymanController';

const deliverymanRouter = Router();

const createDeliverymanController = new CreateDeliverymanController();

deliverymanRouter.post('/', createDeliverymanController.create);

export { deliverymanRouter };
