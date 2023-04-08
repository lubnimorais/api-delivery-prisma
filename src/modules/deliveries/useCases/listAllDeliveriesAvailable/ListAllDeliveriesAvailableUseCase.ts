import { prismaClient } from '../../../../database/prismaClient';

class ListAllDeliveriesAvailableUseCase {
  public async execute() {
    const deliveries = await prismaClient.deliveries.findMany({
      where: {
        end_at: null,
        deliveryman_id: null,
      },
    });

    return deliveries;
  }
}

export { ListAllDeliveriesAvailableUseCase };
