import { User } from "../../Entities/User.entity";
import { Email } from "../../ValueObjects/Email.valueObject";

export interface IUserOutputRepository {
    getAllUsers(): Promise<User[]>;
    getUserById(id: number): Promise<User>;
    getLastId(): Promise<number>;
    getUserByEmail(email: Email): Promise<User>;
}
