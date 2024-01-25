import { User } from "../../domain/Entities/User.entity";
import { Email } from "../../domain/ValueObjects/Email.valueObject";

export interface IUserOutputPort {
    getAllUsers(): Promise<User[]>;
    getUserById(id: number): User | undefined;
    getLastId(): Promise<number>;
    getUserByEmail(email: Email): User | undefined;
}
