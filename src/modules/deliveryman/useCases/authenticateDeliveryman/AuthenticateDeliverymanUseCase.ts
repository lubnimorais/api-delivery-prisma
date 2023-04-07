import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import { prismaClient } from '../../../../database/prismaClient';

interface IRequest {
  username: string;
  password: string;
}

interface IResponse {
  deliveryman: {
    username: string;
  };
  token: string;
}

class AuthenticateDeliverymanUseCase {
  public async execute({ username, password }: IRequest): Promise<IResponse> {
    const deliveryman = await prismaClient.deliveryman.findFirst({
      where: {
        username,
      },
    });

    if (!deliveryman) {
      throw new Error('Username or password not found!');
    }

    const passwordMatch = await compare(password, deliveryman.password);

    if (!passwordMatch) {
      throw new Error('Username or password not found!');
    }

    const token = sign({ username }, 'dc228da345faf3f401d115771b3a4ab1', {
      subject: deliveryman.id,
      expiresIn: '1d',
    });

    return { deliveryman, token };
  }
}

export { AuthenticateDeliverymanUseCase };
