import { UserEmail } from "../value-objects/user-email";
import { UserId } from "../value-objects/user-id";

export class User {
  readonly id: UserId;
  readonly email: UserEmail;

  constructor(id: UserId, email: UserEmail) {
    this.id = id;
    this.email = email;
  }

  toPrimitives?() {
    return {
      id: this.id.value,
      email: this.email.value,
    };
  }
}
