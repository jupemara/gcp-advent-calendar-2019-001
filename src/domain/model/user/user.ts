import { UserId } from './user-id';

export class User {
  constructor(private readonly _userId: UserId) {}
  public get userId(): string {
    return this._userId.value;
  }
}
