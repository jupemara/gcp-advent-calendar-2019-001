import { RegisterUserUseCase } from '../../../usecase/register-user';
import { Response } from 'express';

export class RegisterUserController {
  constructor(private readonly usecase: RegisterUserUseCase) {}
  public async handle(req: Request, res: Response): Promise<void> {
    try {
      const userId = req?.body?.userId;
      await this.usecase.execute(userId);
      res.status(201).send('');
    } catch (e) {
      console.warn(e.stack);
      res.status(400).send('');
    }
  }
}

interface Request {
  body: {
    userId: string;
  };
}
