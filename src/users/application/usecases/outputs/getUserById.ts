import { User } from "../../../domain/Entities/User.entity";
import { IUserOutputRepository } from "../../../domain/repositories/outputs/IUserOutputRepository";
export class GetUserById {
  constructor(private readonly repository: IUserOutputRepository) { }

  async run(id: number): Promise<User> {
    try {
      if (isNaN(id)) {
        throw new Error("La id no es un number");
      }
      return await this.repository.getUserById(id);
    } catch (error: any) {
      throw error;
    }
  }
}
