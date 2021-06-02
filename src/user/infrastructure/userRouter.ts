import { Request, Response } from "express";
import { Router } from "express";
import { CreateUserController } from "../application/useCases/CreateUserController";

const userRouter: Router = Router();

const createUserController = new CreateUserController();
userRouter.post("/",
    (req: Request, res: Response) => createUserController.execute(req, res)
);

export { userRouter };
