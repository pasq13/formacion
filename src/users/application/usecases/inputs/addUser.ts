import { User } from "../../../domain/Entities/User.entity";
import { IUserInputRepository } from "../../../domain/repositories/inputs/IUserInputRepository";
import { IUserOutputRepository } from "../../../domain/repositories/outputs/IUserOutputRepository";

export class AddUser {

  constructor(private readonly repository: IUserInputRepository,
    private readonly getRepository: IUserOutputRepository) { }

  async run(user: User): Promise<void> {
    try {
      const isRegisteredIDUser = await this.getRepository.getUserById(user.id as number);
      if (isRegisteredIDUser) {
        throw new Error("Misma id");
      }
      const isRegisteredEmailUser = await this.getRepository.getUserByEmail(user.email);
      if (isRegisteredEmailUser) {
        throw new Error("Email repetido");
      }
      user.id = user.id ?? await this.getRepository.getLastId() + 1;
      await this.repository.addUser(user);
    } catch (error: any) {
      throw error;
    }
  }
}
