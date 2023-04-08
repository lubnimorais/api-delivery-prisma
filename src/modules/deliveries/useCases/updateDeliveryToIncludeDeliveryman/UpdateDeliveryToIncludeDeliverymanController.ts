import { Request, Response } from 'express';

import { UpdateDeliveryToIncludeDeliverymanUseCase } from './UpdateDeliveryToIncludeDeliverymanUseCase';

class UpdateDeliveryToIncludeDeliverymanController {
  public async update(request: Request, response: Response): Promise<Response> {
    const { delivery_id } = request.params;
    const { id } = request.deliveryman;

    const updateDeliveryToIncludeDeliverymanUseCase =
      new UpdateDeliveryToIncludeDeliverymanUseCase();

    const delivery = await updateDeliveryToIncludeDeliverymanUseCase.execute({
      delivery_id,
      deliveryman_id: id,
    });

    return response.status(200).json(delivery);
  }
}

export { UpdateDeliveryToIncludeDeliverymanController };
