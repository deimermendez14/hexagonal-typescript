import { User } from "../entities/user";

export interface UserRepository {
  get(): Promise<User[]>;

  getById(userId: string): Promise<User | null>;

  save(user: User): Promise<void>;
}
