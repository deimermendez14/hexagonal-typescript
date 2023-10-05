import { User } from "../../domain/entities/user";
import { UserRepository } from "../../domain/repositories/user-repository";
import { createUser } from "./dto/create-user.dto";

export class UserCreator {
  constructor(private readonly userRepository: UserRepository) {}

  async run(createUser: createUser): Promise<void> {
    const user = new User(createUser.id, createUser.email);

    await this.userRepository.save(user);
  }
}
