import { Router } from 'express';

import { ensureAuthenticateClient } from '../../../../../shared/infra/http/middlewares/ensureAuthenticateClient';
import { ensureAuthenticateDeliveryman } from '../../../../../shared/infra/http/middlewares/ensureAuthenticateDeliveryman';

import { CreateDeliveryController } from '../../../useCases/createDelivery/CreateDeliveryController';
import { ListAllDeliveriesAvailableController } from '../../../useCases/listAllDeliveriesAvailable/ListAllDeliveriesAvailableController';
import { UpdateDeliveryToIncludeDeliverymanController } from '../../../useCases/updateDeliveryToIncludeDeliveryman/UpdateDeliveryToIncludeDeliverymanController';

const deliveriesRouter = Router();

const createDeliveryController = new CreateDeliveryController();
const listAllDeliveriesAvailableController =
  new ListAllDeliveriesAvailableController();
const updateDeliveryToIncludeDeliverymanController =
  new UpdateDeliveryToIncludeDeliverymanController();

deliveriesRouter.post(
  '/',
  ensureAuthenticateClient,
  createDeliveryController.create,
);

deliveriesRouter.get(
  '/available',
  ensureAuthenticateDeliveryman,
  listAllDeliveriesAvailableController.index,
);

deliveriesRouter.patch(
  '/update/deliveryman/:delivery_id',
  ensureAuthenticateDeliveryman,
  updateDeliveryToIncludeDeliverymanController.update,
);

export { deliveriesRouter };
