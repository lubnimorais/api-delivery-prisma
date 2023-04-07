import { Router } from 'express';

import { AuthenticateClientController } from '../../../useCases/authenticateClient/AuthenticateClientController';

const authenticateClientRouter = Router();

const authenticateClientController = new AuthenticateClientController();

authenticateClientRouter.post('/session', authenticateClientController.create);

export { authenticateClientRouter };
