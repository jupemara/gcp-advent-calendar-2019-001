import test from 'ava';
import { UserId } from '../../../../src/domain/model/user/user-id';

test('UserId.constractor with valid user id, it succeeds to create new UserId instance', t => {
  const value = 'user-id_001',
    userId = new UserId(value);
  t.is(userId.value, value);
});
