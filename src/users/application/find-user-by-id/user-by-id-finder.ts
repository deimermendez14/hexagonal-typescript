import { UserId } from "src/users/domain/value-objects/user-id";

import { User } from "../../domain/entities/user";
import { UserNotFound } from "../../domain/entities/user-not-found";
import { UserGetById } from "../../domain/repositories/user-repository";

export class UserByIdFinder {
  constructor(private readonly userGetById: UserGetById) {}

  async run(id: UserId): Promise<User> {
    const user = await this.userGetById.getById(id);

    if (!user) {
      throw new UserNotFound(id);
    }
    return user;
  }
}
