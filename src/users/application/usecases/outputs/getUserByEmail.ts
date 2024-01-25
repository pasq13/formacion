import { Email } from "../../../domain/ValueObjects/Email.valueObject";
import { User } from "../../../domain/Entities/User.entity";
import { IUserOutputRepository } from "../../../domain/repositories/outputs/IUserOutputRepository";
export class GetUserByEmail {
  constructor(private readonly repository: IUserOutputRepository) {}
  async run(email: Email): Promise<User> {
    try {
      if (!email.checkEmail?.()) {
        throw new Error("email incorrecto");
      }
      return await this.repository.getUserByEmail(email);
    } catch (error: any) {
      throw error;
    }
  }
}
