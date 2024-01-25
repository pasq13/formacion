import { User } from "../../../domain/Entities/User.entity";
import { UserOutputRepository } from "../../repositories/implementations/userOutputRepository";

export class GetAllUsers {
  repository: UserOutputRepository = new UserOutputRepository();
  constructor() { }
  async run(): Promise<User[]> {
    try {
      return await this.repository.getAllUsers();
    } catch (error: any) {
      throw error;
    }
  }
}
