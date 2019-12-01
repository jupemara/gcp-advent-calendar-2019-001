import { assertionError } from '../error/assertion-error';

export class UserId {
  constructor(public readonly value: string) {
    if (
      ![
        value.length >= 4,
        value.length <= 16,
        /^[a-zA-Z]/.test(value),
        /[\W-.]*/.test(value),
      ].every(v => v)
    ) {
      assertionError();
    }
  }
}
