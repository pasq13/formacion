import { ValidatorString } from "../ValueObjects/validatorString";

const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,'g');
export class Email extends ValidatorString {
    email!: string;
    constructor(email: string) {
        super(regex);
        this.email = email;
        //this._regex = regex;
    }
    compareEmail(email: Email) {
        const key = 'email'
        return this.compareString(email.email, key)
    }
    checkEmail() {
        return this.checkString(this.email);
    }
}