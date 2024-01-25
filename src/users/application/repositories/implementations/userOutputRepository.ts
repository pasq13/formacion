import { readerData } from "../../../../common/repositories/repositoryConnection";
import { User } from "../../../domain/Entities/User.entity";
import { Email } from "../../../domain/ValueObjects/Email.valueObject";
import { IUserOutputRepository } from "../interfaces/IUserOutputRepository";

export class UserOutputRepository implements IUserOutputRepository {
    users: User[] = []
    constructor() { }

    async getAllUsers(): Promise<User[]> {
        return readerData();
    }
    getUserById(id: number) {
        return this.users.find(user => user.id === id);
    }
    async getLastId(): Promise<number> {
        const users = await readerData()
        return users[users?.length - 1]?.id ?? 1;
    }
    getUserByEmail(email: Email) {
        return this.users.find(user => user.email.email === email.email);
    }
}
