import { User } from "../../../domain/Entities/User.entity";
import { IUserInputRepository } from "../../../domain/repositories/inputs/IUserInputRepository";
import { users } from "../../../Test/Mocks/MockUserRepository";

export class UserInputRepository implements IUserInputRepository {
    async addUser(user: User): Promise<void> {
        return new Promise((resolve, reject) => {
            users.push(user);
            resolve();
        })
    }
}