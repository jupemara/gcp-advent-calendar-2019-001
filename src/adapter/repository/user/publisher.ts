import { IPublisher } from '../../../domain/model/user/publisher';
import { RegisterUserMessage } from '../../../domain/model/user/register-user-request';
import { Topic } from '@google-cloud/pubsub';
import { User } from '../../../domain/model/user/User';

export class RegisterUserPublisher implements IPublisher {
  constructor(private readonly pubsubTopic: Topic) {}
  public async publish(user: User): Promise<void> {
    const message: RegisterUserMessage = {
      userId: user.userId,
    };
    await this.pubsubTopic.publish(Buffer.from(JSON.stringify(message)));
  }
}
