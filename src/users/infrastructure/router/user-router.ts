import express from "express";

import { userCreateController, userFindController } from "../dependencies";

const userRouter = express.Router();

userRouter.put("/:id", userCreateController.run.bind(userCreateController));

userRouter.get("", userFindController.run.bind(userFindController));

export { userRouter };
