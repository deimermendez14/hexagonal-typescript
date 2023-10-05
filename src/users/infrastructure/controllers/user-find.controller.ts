import { Request, Response } from "express";

import { UserFinder } from "../../application/find-user/user-finder";

export class UserFindController {
  constructor(private readonly userFinder: UserFinder) {}

  async run(req: Request, res: Response) {
    const users = await this.userFinder.run();

    res.status(201).send(users);
  }
}
