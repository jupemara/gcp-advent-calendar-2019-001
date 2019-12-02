import { RegisterUserRequestUseCase } from '../../../usecase/register-user-request';
import { Response } from 'express';

export class RegisterUserRequestController {
  constructor(private readonly usecase: RegisterUserRequestUseCase) {}
  public async handle(req: Request, res: Response): Promise<void> {
    try {
      const userId = req?.body?.userId;
      await this.usecase.execute(userId);
      res.status(202).send('');
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
