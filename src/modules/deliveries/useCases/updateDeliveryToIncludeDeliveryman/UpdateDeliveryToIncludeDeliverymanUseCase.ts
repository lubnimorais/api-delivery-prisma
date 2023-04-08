import { prismaClient } from '../../../../database/prismaClient';

interface IRequest {
  delivery_id: string;
  deliveryman_id: string;
}

class UpdateDeliveryToIncludeDeliverymanUseCase {
  public async execute({ delivery_id, deliveryman_id }: IRequest) {
    const deliveryman = await prismaClient.deliveryman.findFirst({
      where: {
        id: deliveryman_id,
      },
    });

    if (!deliveryman) {
      throw new Error('Deliveryman not found!');
    }

    const delivery = prismaClient.deliveries.update({
      where: {
        id: delivery_id,
      },
      data: {
        deliveryman_id,
      },
    });

    return delivery;
  }
}

export { UpdateDeliveryToIncludeDeliverymanUseCase };
