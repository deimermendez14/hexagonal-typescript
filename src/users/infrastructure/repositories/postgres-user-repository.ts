import { User } from "../../domain/entities/user";
import { UserRepository } from "../../domain/repositories/user-repository";

export const USERS: User[] = [
  {
    id: "1",
    email: "mendezd@utb.edu.co",
  },
  {
    id: "2",
    email: "dpadilla@supre.com.co",
  },
  {
    id: "3",
    email: "pepe@gmail.com",
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

  async getById(userId: string): Promise<User | null> {
    const user = USERS.find(user => user.id === userId);

    return user ? new User(user.id, user.email) : null;
  }
}
