import { Router } from "express";

import { CreateClientController } from "../../../useCases/createClient/CreateClientController";

const clientsRouter = Router();
const createClientController = new CreateClientController();

clientsRouter.post('/', createClientController.create);

export { clientsRouter }