import { readerData, writeData } from "../../../../common/repositories/repositoryConnection";
import { User } from "../../../domain/Entities/User.entity";
import { users } from "../../../Test/Mocks/MockUserRepository";
import { IUserInputRepository } from "../interfaces/IUserInputRepository";

export class UserInputRepository implements IUserInputRepository {
  async addUser(user: User) {
    const users = await readerData()
    users.push(user);
    writeData(users)
  }
}
