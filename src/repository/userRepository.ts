import { User } from "../domain/DTO/Entities/User";
import { users } from "./Mocks/MockUserRepository";

export class UserRepository {
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
}