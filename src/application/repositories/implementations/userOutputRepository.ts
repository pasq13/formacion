import { User } from "../../../domain/Entities/User.entity";
import { Email } from "../../../domain/ValueObjects/Email.valueObject";
import { IUserOutputRepository } from "../interfaces/IUserOutputRepository";
import { users } from "../../../Test/Mocks/MockUserRepository";

export class UserOutputRepository implements IUserOutputRepository {
    getAllUsers() {
        return users;
    }
    getUserById(id: number) {
        return users.find(user => user.id === id);
    }
    getLastId(): number {
        return users[users?.length - 1]?.id ?? 1;
    }
    getUserByEmail(email: Email) {
        return users.find(user => user.email.email === email.email);
    }
}
