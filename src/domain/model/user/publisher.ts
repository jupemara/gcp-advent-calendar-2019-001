import { User } from './User';

export interface IPublisher {
  publish(request: User): Promise<void>;
}
