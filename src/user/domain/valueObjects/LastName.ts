import { ValueObject } from "../../../shared/ValueObject";

type LastNameProp = {
  value: string
}

class LastName extends ValueObject<LastNameProp> {
  public getValue(): string {
    return this.props.value;
  }


  constructor(props: LastNameProp) {
    super(props);
  }

  public static create(lastname: string): LastName {
    if (
        lastname === undefined ||
        lastname === null ||
        lastname.length < 3 ||
        lastname.length > 20
    ) {
      throw new Error("lastname user must be greater than 2 chars and less than 100");
    } else {
      return new LastName({ value: lastname });
    }
  }
}

export { LastName };
