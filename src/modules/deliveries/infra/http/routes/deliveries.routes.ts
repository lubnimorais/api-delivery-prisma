import { Router } from 'express';

import { ensureAuthenticateClient } from '../../../../../shared/infra/http/middlewares/ensureAuthenticateClient';

import { CreateDeliveryController } from '../../../useCases/createDelivery/CreateDeliveryController';

const deliveriesRouter = Router();

const createDeliveryController = new CreateDeliveryController();

deliveriesRouter.post(
  '/',
  ensureAuthenticateClient,
  createDeliveryController.create,
);

export { deliveriesRouter };
