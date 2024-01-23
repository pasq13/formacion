import { ValidatorString } from "../../common/domain/valueObject/validatorString";

const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "g");
export class Email extends ValidatorString {
  email!: string;
  constructor(email: string) {
    super(regex);
    this.email = email;
    //this._regex = regex;
  }
  compareEmail?(email: Email): boolean | undefined {
    if (email == null) {
      throw new Error("email null");
    }
    const key = "email";
    return this.compareString?.(email.email, key);
  }
  checkEmail?(): boolean | undefined {
    return this.checkString?.(this.email);
  }
}
