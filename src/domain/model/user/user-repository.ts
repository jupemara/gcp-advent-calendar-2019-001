import { User } from './User';

export interface IUserRepository {
  store(user: User): Promise<void>;
}
