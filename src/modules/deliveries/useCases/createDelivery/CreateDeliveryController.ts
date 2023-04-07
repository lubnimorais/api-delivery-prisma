import { Request, Response } from 'express';

import { CreateDeliveryUseCase } from './CreateDeliveryUseCase';

class CreateDeliveryController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { item_name } = request.body;
    const { id } = request.client;

    const createDeliveryUseCase = new CreateDeliveryUseCase();

    const delivery = await createDeliveryUseCase.execute({
      item_name,
      client_id: id,
    });

    return response.status(201).json(delivery);
  }
}

export { CreateDeliveryController };
