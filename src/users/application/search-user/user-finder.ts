import { User } from "../../domain/entities/user";
import { UserRepository } from "../../domain/repositories/user-repository";

export class UserFinder {
  constructor(private readonly userRepository: UserRepository) {}
  async run(): Promise<User[]> {
    const users = await this.userRepository.get();

    return users;
  }
}
