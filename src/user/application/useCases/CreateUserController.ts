import { Request, Response } from "express";
import { BaseController } from "../../../shared/BaseController";
import { Name } from "../../domain/valueObjects/Name";
import { User } from "../../domain/entity/User";
import { LastName } from "../../domain/valueObjects/LastName";

class CreateUserController extends BaseController {

  constructor() {
    super();
  }

  protected async executeImpl(req: Request, res: Response): Promise<void | any> {
    try {
      const { name, lastname } = req.body;
      const nameObject = Name.create(name);
      const lastnameValue = LastName.create(lastname);
      const user = User.create(name, lastname);
      console.log(user);
      return this.ok(res);

    } catch (e) {
      return this.fail(res, e.toString());
    }
  }
}

export { CreateUserController };
