import { UIController } from './adapter/controller/cloud-functions-http/ui/ui-controller';
import { RegisterUserRequestController } from './adapter/controller/cloud-functions-http/register-user-request';
import { RegisterUserRequestUseCase } from './usecase/register-user-request';
import { RegisterUserPublisher } from './adapter/repository/user/publisher';
import { RegisterUserSubscriber } from './adapter/controller/cloud-functions-pubsub/register-user';
import { RegisterUserUseCase } from './usecase/register-user';
import { UserFirestoreRepository } from './adapter/repository/user/firestore';
import { PubSub } from '@google-cloud/pubsub';
import * as admin from 'firebase-admin';

export const ui = function(_, res) {
  new UIController().handle(res);
};

const topic = new PubSub().topic('register-user-request'),
  handler = new RegisterUserRequestController(
    new RegisterUserRequestUseCase(new RegisterUserPublisher(topic)),
  );

export const registerUserRequest = async function(req, res) {
  await handler.handle(req, res);
};

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});

const subscriber = new RegisterUserSubscriber(
  new RegisterUserUseCase(
    new UserFirestoreRepository(admin.firestore().collection('user')),
  ),
);

export const registerUser = async function(event, _) {
  await subscriber.handle(event);
};
