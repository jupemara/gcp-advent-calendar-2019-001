import { IUserRepository } from '../../../domain/model/user/user-repository';
import { firestore } from 'firebase-admin';
import { User } from '../../../domain/model/user/User';
import { UserRecord } from './record';

export class UserFirestoreRepository implements IUserRepository {
  constructor(private readonly firestore: firestore.CollectionReference) {}
  public async store(user: User): Promise<void> {
    const doc = this.firestore.doc(user.userId),
      record: UserRecord = {
        userId: user.userId,
      };
    await doc.set(record);
  }
}
