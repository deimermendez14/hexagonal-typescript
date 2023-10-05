import "./load-env-vars";

import express from "express";

import { config } from "./config";
import { userRouter } from "./users/infrastructure/router/user-router";

function boostrap() {
  const app = express();

  app.use(express.json());

  app.use("/users", userRouter);

  const { port } = config.server;

  app.listen(port, () => {
    console.log(`[APP] - Started application on port ${port}`);
  });
}

boostrap();
