import { UserId } from "src/users/domain/value-objects/user-id";

import { User } from "../../domain/entities/user";
import { UserNotFound } from "../../domain/entities/user-not-found";
import { UserRepository } from "../../domain/repositories/user-repository";

export class UserByIdFinder {
  constructor(private readonly userRepository: UserRepository) {}

  async run(id: UserId): Promise<User> {
    const user = await this.userRepository.getById(id);

    if (!user) {
      throw new UserNotFound(id);
    }
    return user;
  }
}
