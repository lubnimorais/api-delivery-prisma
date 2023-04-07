import { Request, Response } from 'express';

import { CreateDeliverymanUseCase } from './CreateDeliverymanUseCase';

class CreateDeliverymanController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { username, password } = request.body;

    const createDeliverymanUseCase = new CreateDeliverymanUseCase();

    const deliveryman = await createDeliverymanUseCase.execute({
      username,
      password,
    });

    return response.status(201).json(deliveryman);
  }
}

export { CreateDeliverymanController };
