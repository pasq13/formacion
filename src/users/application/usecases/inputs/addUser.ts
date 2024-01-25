import { User } from "../../../domain/Entities/User.entity";
import { UserInputRepository } from "../../repositories/implementations/userInputRepository";
import { UserOutputRepository } from "../../repositories/implementations/userOutputRepository";

export class AddUser {
  repository: UserInputRepository = new UserInputRepository();
  getRepository: UserOutputRepository = new UserOutputRepository();
  constructor(

  ) { }
  async run(user: User): Promise<void> {
    try {
      const isRegisteredIDUser = this.getRepository.getUserById(user.id as number);
      if (isRegisteredIDUser) {
        throw new Error("Misma id");
      }
      const isRegisteredEmailUser = this.getRepository.getUserByEmail(user.email);
      if (isRegisteredEmailUser) {
        throw new Error("Email repetido");
      }
      user.id = await user.id ?? await this.getRepository.getLastId() + 1;
      await this.repository.addUser(user);
    } catch (error: any) {
      throw error;
    }
  }
}
