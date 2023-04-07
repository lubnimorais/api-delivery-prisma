import { Request, Response } from 'express';

import { AuthenticateClientUseCase } from './AuthenticateClientUseCase';

class AuthenticateClientController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { username, password } = request.body;

    const authenticateUserUseCase = new AuthenticateClientUseCase();

    const client = await authenticateUserUseCase.execute({
      username,
      password,
    });

    return response.status(201).json(client);
  }
}

export { AuthenticateClientController };
