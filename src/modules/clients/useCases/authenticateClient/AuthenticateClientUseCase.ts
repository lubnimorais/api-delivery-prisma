import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import { prismaClient } from '../../../../database/prismaClient';

interface IRequest {
  username: string;
  password: string;
}

interface IResponse {
  client: {
    username: string;
  };
  token: string;
}

class AuthenticateClientUseCase {
  public async execute({ username, password }: IRequest): Promise<IResponse> {
    const client = await prismaClient.clients.findFirst({
      where: {
        username,
      },
    });

    if (!client) {
      throw new Error('Username or password invalid!');
    }

    const passwordMatch = await compare(password, client.password);

    if (!passwordMatch) {
      throw new Error('Username or password invalid!');
    }

    const token = sign({ username }, 'dc228da399faf3f401d115771b3a4ab1', {
      subject: client.id,
      expiresIn: '1d',
    });

    return { client, token };
  }
}

export { AuthenticateClientUseCase };
