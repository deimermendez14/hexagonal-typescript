import { User } from "../entities/user";
import { UserId } from "../value-objects/user-id";

export interface UserSaver {
  save(user: User): Promise<void>;
}
export interface UserRepository extends UserSaver {
  get(): Promise<User[]>;

  getById(userId: UserId): Promise<User | null>;
}
