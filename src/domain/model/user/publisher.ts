import { RegisterUserRequest } from './register-user-request';

export interface IPublisher {
  publish(request: RegisterUserRequest): Promise<void>;
}
