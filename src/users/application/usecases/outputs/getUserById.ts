import { Email } from "../../../domain/ValueObjects/Email.valueObject";
import { User } from "../../../domain/Entities/User.entity";
import { UserOutputRepository } from "../../repositories/implementations/userOutputRepository";
export class GetUserById {
  constructor(private readonly repository: UserOutputRepository) {}

  run(id: number): User | undefined {
    try {
      if (isNaN(id)) {
        throw new Error("La id no es un number");
      }
      return this.repository.getUserById(id);
    } catch (error: any) {
      throw error;
    }
  }
}
