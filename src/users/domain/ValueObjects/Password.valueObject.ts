import { ValidatorString } from "../../../common/domain/valueObject/validatorString";

const regex = new RegExp(/^(?=.*\d).{8,}$/)
export class Password extends ValidatorString {
    password!: string;
    constructor(password: string) {
        super(regex);
        this.password = password;
        //this._regex = regex;
    }
    public comparePassword?(password: Password): boolean | undefined{
        if (password == null) {
            throw new Error("password null");
        };
        const key = 'password'
        return this.compareString?.(password.password, key);
    }
    public checkPassword?(): boolean | undefined{
        return this.checkString?.(this.password);
    }
}

