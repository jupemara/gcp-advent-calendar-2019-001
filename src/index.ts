import { RegisterUserController } from './adapter/controller/cloud-functions-http/register-user';
import { RegisterUserUseCase } from './usecase/register-user';
import { RegisterUserPublisher } from './adapter/repository/user/publisher';
import { PubSub } from '@google-cloud/pubsub';

const topic = new PubSub().topic('register-user-request'),
  controller = new RegisterUserController(
    new RegisterUserUseCase(new RegisterUserPublisher(topic)),
  );

export const registerUserSync = async function(req, res) {
  await controller.handle(req, res);
};
