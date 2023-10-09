import { User } from "../entities/user";
import { UserId } from "../value-objects/user-id";

export interface UserSaver {
  save(user: User): Promise<void>;
}

export interface UserGet {
  get(): Promise<User[]>;
}

export interface UserGetById {
  getById(userId: UserId): Promise<User | null>;
}
export interface UserRepository extends UserSaver, UserGet, UserGetById {}
