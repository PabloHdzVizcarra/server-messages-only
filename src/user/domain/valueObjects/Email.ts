import { ValueObject } from "../../../shared/ValueObject";

type EmailType = {
  value: string
}

class Email extends ValueObject<EmailType> {

  private constructor(props: EmailType) {
    super(props);
  }

  public static create(email: string): Email {
    const regexEmail = /^\S+@\S+\.\S+$/;
    if (!regexEmail.test(email)) {
      throw new Error(`The ${email} email you provided is not valid`);
    } else {
      return new Email({ value: email });
    }
  }
}

export { Email };
