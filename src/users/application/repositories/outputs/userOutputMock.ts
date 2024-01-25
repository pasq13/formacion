import { User } from "../../../domain/Entities/User.entity";
import { IUserOutputRepository } from "../../../domain/repositories/outputs/IUserOutputRepository";
import { Email } from "../../../domain/ValueObjects/Email.valueObject";
import { users } from "../../../Test/Mocks/MockUserRepository";
export class UserOutputRepository implements IUserOutputRepository {
    constructor() { }

    async getAllUsers(): Promise<User[]> {
        return await new Promise((resolve, reject) => {
            resolve(users);
        })
    }
    async getUserById(id: number): Promise<User> {
        return await new Promise((resolve, reject) => {
            const user = users.find((user: User) => user.id === id);
            if (user) {
                resolve(user)
            }
        })
    }
    async getLastId(): Promise<number> {
        return await new Promise((resolve, reject) => {
            const id = users[users?.length - 1]?.id ?? 1;
            if (id) {
                resolve(id)
            }
        })
    }
    async getUserByEmail(email: Email): Promise<User> {
        return await new Promise((resolve, reject) => {
            const user = users.find((user: User) => user.email.email === email.email);
            if (user) {
                resolve(user)
            }
        })
    }
}
