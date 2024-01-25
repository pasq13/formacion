import { User } from "../../../domain/Entities/User.entity";
import { IUserOutputRepository } from "../../../domain/repositories/outputs/IUserOutputRepository";

export class GetAllUsers {
  constructor(private readonly repository: IUserOutputRepository) { }
  async run(): Promise<User[]> {
    try {
      return await this.repository.getAllUsers();
    } catch (error: any) {
      throw error;
    }
  }
}
