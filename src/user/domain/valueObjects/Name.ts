import { ValueObject } from "../../../shared/ValueObject";

interface NameProps {
  value: string
}

class Name extends ValueObject<NameProps> {
  public getValue(): string {
    return this.props.value;
  }

  private constructor(props: NameProps) {
    super(props);
  }

  public static create(name: string): Name {
    if (
        name === undefined ||
        name === null ||
        name.length < 3 ||
        name.length > 20
    ) {
      throw new Error("name user must be greater than 2 chars and less than 100");
    } else {
      return new Name({ value: name });
    }
  }
}

export { Name };
