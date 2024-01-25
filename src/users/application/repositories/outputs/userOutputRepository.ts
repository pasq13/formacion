import { readerData } from "../../../../common/domain/repositories/repositoryConnection";
import { User } from "../../../domain/Entities/User.entity";
import { Email } from "../../../domain/ValueObjects/Email.valueObject";
import { IUserOutputRepository } from "../../../domain/repositories/outputs/IUserOutputRepository";

export class UserOutputRepository implements IUserOutputRepository {
    users: User[] = []
    constructor() { }

    async getAllUsers(): Promise<User[]> {
        return readerData();
    }
    async getUserById(id: number): Promise<User> {
        const users = await readerData()
        return users.find((user: User) => user.id === id);
    }
    async getLastId(): Promise<number> {
        const users = await readerData()
        return users[users?.length - 1]?.id ?? 1;
    }
    async getUserByEmail(email: Email): Promise<User> {
        const users = await readerData()
        return users.find((user: User) => user.email.email === email.email);
    }
}
