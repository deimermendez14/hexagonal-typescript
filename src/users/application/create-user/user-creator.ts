import { UserEmail } from "src/users/domain/value-objects/user-email";
import { UserId } from "src/users/domain/value-objects/user-id";

import { User } from "../../domain/entities/user";
import { UserSaver } from "../../domain/repositories/user-repository";
import { createUser } from "./dto/create-user.dto";

export class UserCreator {
  constructor(private readonly userSaver: UserSaver) {}

  async run({ email, id }: createUser): Promise<void> {
    const user = new User(new UserId(id), new UserEmail(email));

    await this.userSaver.save(user);
  }
}
