import { User } from "../../../domain/Entities/User.entity";
import { UserInputRepository } from "../../repositories/implementations/userInputRepository";
import { UserOutputRepository } from "../../repositories/implementations/userOutputRepository";

export class AddUser {
  repository: UserInputRepository = new UserInputRepository();
  getRepository: UserOutputRepository = new UserOutputRepository();
  constructor(

  ) { }
  run(user: User): void {
    try {
      const isRegisteredIDUser = this.getRepository.getUserById(user.id as number);
      if (isRegisteredIDUser) {
        throw new Error("Misma id");
      }
      const isRegisteredEmailUser = this.getRepository.getUserByEmail(user.email);
      if (isRegisteredEmailUser) {
        throw new Error("Email repetido");
      }
      user.id = user.id ?? this.getRepository.getLastId() + 1;
      this.repository.addUser(user);
    } catch (error: any) {
      throw error;
    }
  }
}
