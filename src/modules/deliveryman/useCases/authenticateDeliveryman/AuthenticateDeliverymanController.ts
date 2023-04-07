import { Request, Response } from 'express';

import { AuthenticateDeliverymanUseCase } from './AuthenticateDeliverymanUseCase';

class AuthenticateDeliverymanController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { username, password } = request.body;

    const authenticateDeliverymanUseCase = new AuthenticateDeliverymanUseCase();

    const deliveryman = await authenticateDeliverymanUseCase.execute({
      username,
      password,
    });

    return response.status(201).json(deliveryman);
  }
}

export { AuthenticateDeliverymanController };
