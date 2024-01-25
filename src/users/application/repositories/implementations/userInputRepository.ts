import { readerData, writeData } from "../../../../common/domain/repositories/repositoryConnection";
import { User } from "../../../domain/Entities/User.entity";
import { IUserInputRepository } from "../../../domain/repositories/interfaces/IUserInputRepository";
import { users } from "../../../Test/Mocks/MockUserRepository";

export class UserInputRepository implements IUserInputRepository {
  async addUser(user: User): Promise<void> {
    const users = await readerData()
    users.push(user);
    await writeData(users)
  }
}
