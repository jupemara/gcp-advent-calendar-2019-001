import { IPublisher } from '../../../domain/model/user/publisher';
import { RegisterUserRequest } from '../../../domain/model/user/register-user-request';
import { Topic } from '@google-cloud/pubsub';

export class RegisterUserPublisher implements IPublisher {
  constructor(private readonly pubsubTopic: Topic) {}
  public async publish(request: RegisterUserRequest): Promise<void> {
    const payload = {
      userId: request.userId.value,
    };
    await this.pubsubTopic.publish(Buffer.from(JSON.stringify(payload)));
  }
}
