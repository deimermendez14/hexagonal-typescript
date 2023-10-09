import { User } from "../entities/user";
import { UserId } from "../value-objects/user-id";

export interface UserRepository {
  get(): Promise<User[]>;

  getById(userId: UserId): Promise<User | null>;

  save(user: User): Promise<void>;
}
