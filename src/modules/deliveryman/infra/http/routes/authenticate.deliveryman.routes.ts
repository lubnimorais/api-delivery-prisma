import { Router } from 'express';

import { AuthenticateDeliverymanController } from '../../../useCases/authenticateDeliveryman/AuthenticateDeliverymanController';

const authenticateDeliverymanRouter = Router();

const authenticateDeliverymanController =
  new AuthenticateDeliverymanController();

authenticateDeliverymanRouter.post(
  '/session',
  authenticateDeliverymanController.create,
);

export { authenticateDeliverymanRouter };
