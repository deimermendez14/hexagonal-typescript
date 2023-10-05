import { Request, Response } from "express";

import { UserCreator } from "../../application/create-user/user-creator";

export class UserCreateController {
  constructor(private readonly userCreator: UserCreator) {}

  async run(req: Request, res: Response) {
    const { id } = req.params;
    const { email } = req.body;

    await this.userCreator.run({
      id,
      email,
    });

    res.status(201).send();
  }
}
