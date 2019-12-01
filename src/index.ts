import { RegisterUserController } from './adapter/controller/cloud-functions-http/register-user';
import { RegisterUserUseCase } from './usecase/register-user';
import { UserFirestoreRepository } from './adapter/repository/user/firestore';
import * as admin from 'firebase-admin';

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});

const controller = new RegisterUserController(
  new RegisterUserUseCase(
    new UserFirestoreRepository(admin.firestore().collection('user')),
  ),
);

export const registerUserSync = async function(req, res) {
  await controller.handle(req, res);
};
