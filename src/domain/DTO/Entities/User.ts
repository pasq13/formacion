import { ValidatorObject } from "../ValueObjects/validatorObject";
import { Email } from "./Email";
import { Password } from "./Password";

export class User extends ValidatorObject {
    id?: number;
    name!: string;
    email!: Email;
    password!: Password;
    constructor(name: string, email: Email, password: Password, id?: number) {
        super();
        this.name = name;
        this.email = email;
        this.password = password;
        this.id = id ?? this.generateId()
    }
    public compareUserById(user: User): boolean {
        if (user == null) {
            throw new Error("user null");
        }
        const id = 'id';
        if (!this.compareProperty(user, id)) return false;
        return this.compareObject(user);
    }
    private generateId(): number {
        return (Math.random() * 100)
    }
}
