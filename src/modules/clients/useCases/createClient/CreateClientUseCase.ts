import { hash } from 'bcryptjs';

import { prismaClient } from '../../../../database/prismaClient';

interface IRequest {
  username: string;
  password: string;
}

class CreateClientUseCase {
  public async execute({ username, password }: IRequest) {
    const clientExists = await prismaClient.clients.findFirst({
      where: {
        username: {
          mode: 'insensitive',
        },
      },
    });

    if (clientExists) {
      throw new Error('Client already exists');
    }

    const hashPassword = await hash(password, 10);

    const client = await prismaClient.clients.create({
      data: {
        username,
        password: hashPassword,
      },
    });

    return client;
  }
}

export { CreateClientUseCase };
