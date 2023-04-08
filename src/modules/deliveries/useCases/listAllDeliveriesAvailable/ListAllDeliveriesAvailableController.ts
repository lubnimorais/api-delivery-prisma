import { Request, Response } from 'express';

import { ListAllDeliveriesAvailableUseCase } from './ListAllDeliveriesAvailableUseCase';

class ListAllDeliveriesAvailableController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listAllDeliveriesAvailableUseCase =
      new ListAllDeliveriesAvailableUseCase();

    const deliveries = await listAllDeliveriesAvailableUseCase.execute();

    return response.status(200).json(deliveries);
  }
}

export { ListAllDeliveriesAvailableController };
