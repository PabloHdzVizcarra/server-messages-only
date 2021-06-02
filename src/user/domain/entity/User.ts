import { Entity } from "../../../shared/Entity";
import { Name } from "../valueObjects/Name";
import { LastName } from "../valueObjects/LastName";

interface UserProps {
  name: Name
  lastname: LastName
}

class User extends Entity<UserProps> {
    private constructor(props: UserProps) {
    super(props);
    this.props.name = props.name;
  }

  public getName(): string {
    return this.props.name.getValue();
  }

  public static create(name: Name, lastname: LastName): User {
    return new User({name, lastname})
  }
}

export { User };
