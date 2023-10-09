import { UserId } from "../value-objects/user-id";

export class UserNotFound extends Error {
  constructor(id: UserId) {
    super(`User not found ${id}`);
  }
}
