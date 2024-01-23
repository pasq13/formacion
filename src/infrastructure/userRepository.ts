import { User } from "../domain/DTO/Entities/User";
import { users } from "../Test/Mocks/MockUserRepository";
import { Email } from "../domain/DTO/Entities/Email";
import { IUserRepository } from "../domain/repository/IUserRepository";


export class UserRepository implements IUserRepository{
    getAllUsers() {
        return users;
    }
    getUserById(id: number) {
        return users.find(user => user.id === id);
    }
    addUser(user: User) {
        users.push(user);
    }
    getLastId(): number {
        return users[users?.length - 1]?.id ?? 1;
    }
    getUserByEmail(email: Email) {
        return users.find(user => user.email.email === email.email);
    }
}