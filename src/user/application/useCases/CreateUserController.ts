import { Request, Response } from "express";
import { BaseController } from "../../../shared/application/BaseController";

class CreateUserController extends BaseController {

  constructor() {
    super();
  }

  protected async executeImpl(req: Request, res: Response): Promise<void | any> {
    try {

    } catch (e) {
      return this.fail(res, e.toString());
    }
  }
}

export { CreateUserController };
