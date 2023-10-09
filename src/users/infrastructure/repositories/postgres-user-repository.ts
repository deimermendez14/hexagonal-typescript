import { UserEmail } from "src/users/domain/value-objects/user-email";
import { UserId } from "src/users/domain/value-objects/user-id";

import { User } from "../../domain/entities/user";
import { UserRepository } from "../../domain/repositories/user-repository";

export const USERS: User[] = [
  {
    id: new UserId("1"),
    email: new UserEmail("mendezd@utb.edu.co"),
  },
  {
    id: new UserId("1"),
    email: new UserEmail("mendezd@utb.edu.co"),
  },
  {
    id: new UserId("1"),
    email: new UserEmail("mendezd@utb.edu.co"),
  },
];

export class PostgresUserRepository implements UserRepository {
  async get(): Promise<User[]> {
    const users = USERS;
    return users;
  }

  async save(user: User): Promise<void> {
    const newUser = new User(user.id, user.email);

    USERS.push(newUser);
  }

  async getById(userId: UserId): Promise<User | null> {
    const user = USERS.find(user => user.id === userId);

    return user ? new User(user.id, user.email) : null;
  }
}
