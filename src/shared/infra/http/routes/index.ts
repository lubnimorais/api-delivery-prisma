import { Router } from 'express';

import { clientsRouter } from '../../../../modules/clients/infra/http/routes/clients.routes';

import { authenticateClientRouter } from '../../../../modules/clients/infra/http/routes/authenticate.client.routes';

const routes = Router();

routes.use('/clients', clientsRouter);

routes.use('/authenticate_client', authenticateClientRouter);

export { routes };
