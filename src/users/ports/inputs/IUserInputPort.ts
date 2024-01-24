import { User } from "../../domain/Entities/User.entity";

export interface IUserInputPort {
  addUser(user: User): void;
}
