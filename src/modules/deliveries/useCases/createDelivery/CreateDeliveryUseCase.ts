import { prismaClient } from '../../../../database/prismaClient';

interface IRequest {
  item_name: string;
  client_id: string;
}

class CreateDeliveryUseCase {
  public async execute({ item_name, client_id }: IRequest) {
    const client = await prismaClient.clients.findFirst({
      where: {
        id: client_id,
      },
    });

    if (!client) {
      throw new Error('Client not found!');
    }

    const delivery = await prismaClient.deliveries.create({
      data: {
        item_name,
        client_id: client.id,
      },
    });

    return delivery;
  }
}

export { CreateDeliveryUseCase };
