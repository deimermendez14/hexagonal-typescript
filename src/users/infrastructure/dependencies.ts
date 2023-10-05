import { UserCreator } from "../application/create-user/user-creator";
import { UserFinder } from "../application/find-user/user-finder";
import { UserCreateController } from "./controllers/user-create.controller";
import { UserFindController } from "./controllers/user-find.controller";
import { MongoUserRepository } from "./repositories/mongo-user-repository";
import { PostgresUserRepository } from "./repositories/postgres-user-repository";

const postgresUserRepository = new PostgresUserRepository();

// const mongoUserRepository = new MongoUserRepository();

const userCreator = new UserCreator(postgresUserRepository);

const userFinder = new UserFinder(postgresUserRepository);

export const userCreateController = new UserCreateController(userCreator);

export const userFindController = new UserFindController(userFinder);
