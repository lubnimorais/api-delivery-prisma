import { Router } from 'express';

import { clientsRouter } from '../../../../modules/clients/infra/http/routes/clients.routes';
import { authenticateClientRouter } from '../../../../modules/clients/infra/http/routes/authenticate.client.routes';

import { deliverymanRouter } from '../../../../modules/deliveryman/infra/http/routes/deliveryman.routes';
import { authenticateDeliverymanRouter } from '../../../../modules/deliveryman/infra/http/routes/authenticate.deliveryman.routes';

import { deliveriesRouter } from '../../../../modules/deliveries/infra/http/routes/deliveries.routes';

const routes = Router();

routes.use('/clients', clientsRouter);
routes.use('/authenticate_client', authenticateClientRouter);

routes.use('/deliveryman', deliverymanRouter);
routes.use('/authenticate_deliveryman', authenticateDeliverymanRouter);

routes.use('/deliveries', deliveriesRouter);

export { routes };
