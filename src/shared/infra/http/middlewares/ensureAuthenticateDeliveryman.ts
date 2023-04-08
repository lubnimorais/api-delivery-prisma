import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import { prismaClient } from '../../../../database/prismaClient';

interface IPayload {
  sub: string;
}

async function ensureAuthenticateDeliveryman(
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
      'dc228da345faf3f401d115771b3a4ab1',
    ) as IPayload;

    const deliveryman_id = sub;

    const deliveryman = await prismaClient.deliveryman.findFirst({
      where: {
        id: deliveryman_id,
      },
    });

    if (!deliveryman) {
      return response.status(401).json({
        message: 'Invalid token!',
      });
    }

    request.deliveryman = {
      id: deliveryman_id,
    };

    next();
  } catch {
    return response.status(401).json({
      message: 'Invalid token!',
    });
  }
}

export { ensureAuthenticateDeliveryman };
