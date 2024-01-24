import { Email } from "../../../domain/ValueObjects/Email.valueObject";
import { User } from "../../../domain/Entities/User.entity";
import { UserOutputRepository } from "../../repositories/implementations/userOutputRepository";
export class GetUserByEmail {
  constructor(private readonly repository: UserOutputRepository) {}
  run(email: Email): User | undefined {
    try {
      if (!email.checkEmail?.()) {
        throw new Error("La id no es un number");
      }
      return this.repository.getUserByEmail(email);
    } catch (error: any) {
      throw error;
    }
  }
}
