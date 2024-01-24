import { User } from "../../../domain/Entities/User.entity";
import { UserOutputRepository } from "../../repositories/implementations/userOutputRepository";

export class GetAllUsers {
  repository: UserOutputRepository = new UserOutputRepository();
  constructor() { }
  run(): User[] {
    try {
      return this.repository.getAllUsers();
    } catch (error: any) {
      throw error;
    }
  }
}
