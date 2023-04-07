import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import { prismaClient } from '../../../../database/prismaClient';

interface IPayload {
  sub: string;
}

async function ensureAuthenticateClient(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({
      message: 'Token is missing!',
    });
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub } = verify(
      token,
      'dc228da399faf3f401d115771b3a4ab1',
    ) as IPayload;

    const client_id = sub;

    const client = await prismaClient.clients.findFirst({
      where: {
        id: client_id,
      },
    });

    if (!client) {
      return response.status(401).json({
        message: 'Invalid tokne!',
      });
    }

    request.client = {
      id: client_id,
    };

    next();
  } catch {
    return response.status(401).json({
      message: 'Invalid token!',
    });
  }
}

export { ensureAuthenticateClient };
