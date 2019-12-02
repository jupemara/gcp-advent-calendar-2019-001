import { RegisterUserUseCase } from '../../../usecase/request-retister-user';

export class RegisterUserController {
  constructor(private readonly usecase: RegisterUserUseCase) {}
  public async handle(event: Event) {
    const userId = this.toPayload(event).userId;
    await this.usecase.execute(userId);
  }
  private toPayload(event: Event): Payload {
    return JSON.parse(Buffer.from(event.data, 'base64').toString()) as Payload;
  }
}

interface Event {
  data: string;
}

interface Payload {
  userId: string;
}
