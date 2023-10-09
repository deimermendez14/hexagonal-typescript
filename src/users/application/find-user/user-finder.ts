import { User } from "../../domain/entities/user";
import { UserGet } from "../../domain/repositories/user-repository";

export class UserFinder {
  constructor(private readonly userGet: UserGet) {}
  async run(): Promise<User[]> {
    const users = await this.userGet.get();

    return users;
  }
}
