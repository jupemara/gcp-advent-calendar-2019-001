import { IPublisher } from '../domain/model/user/publisher';
import { UserId } from '../domain/model/user/user-id';

export class RegisterUserRequestUseCase {
  constructor(private readonly publisher: IPublisher) {}
  public async execute(userId: string): Promise<void> {
    await this.publisher.publish({ userId: new UserId(userId) });
  }
}
