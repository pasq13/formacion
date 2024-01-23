import { User } from "../../domain/Entities/User.entity";
import { Email } from "../../domain/ValueObjects/Email.valueObject";

export interface IUserOutputPort {
    getAllUsers(): User[];
    getUserById(id: number): User | undefined;
    getLastId(): number;
    getUserByEmail(email: Email): User | undefined;
}
