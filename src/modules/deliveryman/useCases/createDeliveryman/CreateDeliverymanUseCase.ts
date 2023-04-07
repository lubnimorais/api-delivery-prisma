import { hash } from 'bcryptjs';

import { prismaClient } from '../../../../database/prismaClient';

interface IRequest {
  username: string;
  password: string;
}

class CreateDeliverymanUseCase {
  public async execute({ username, password }: IRequest) {
    const deliverymanExists = await prismaClient.deliveryman.findFirst({
      where: {
        username: {
          mode: 'insensitive',
        },
      },
    });

    if (deliverymanExists) {
      throw new Error('Deliveryman already exists!');
    }

    const passwordHash = await hash(password, 10);

    const deliveryman = await prismaClient.deliveryman.create({
      data: {
        username,
        password: passwordHash,
      },
    });

    return deliveryman;
  }
}

export { CreateDeliverymanUseCase };
