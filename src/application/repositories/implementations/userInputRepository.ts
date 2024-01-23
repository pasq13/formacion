import { User } from "../../../domain/Entities/User.entity";
import { users } from "../../../Test/Mocks/MockUserRepository";
import { IUserInputRepository } from "../interfaces/IUserInputRepository";

export class UserInputRepository implements IUserInputRepository {
  addUser(user: User) {
    users.push(user);
  }
}
