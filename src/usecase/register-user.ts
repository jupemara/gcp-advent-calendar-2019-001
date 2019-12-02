import { IUserRepository } from '../domain/model/user/user-repository';
import { User } from '../domain/model/user/User';
import { UserId } from '../domain/model/user/user-id';

export class RegisterUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}
  public async execute(userId: string): Promise<void> {
    const user = new User(new UserId(userId));
    await this.userRepository.store(user);
  }
}
