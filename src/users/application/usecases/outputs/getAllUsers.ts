import { Email } from "../../../domain/ValueObjects/Email.valueObject";
import { User } from "../../../domain/Entities/User.entity";
import { UserOutputRepository } from "../../repositories/implementations/userOutputRepository";

export class GetAllUsers {
  constructor(private readonly repository: UserOutputRepository) {}
  run(): User[] {
    try {
      return this.repository.getAllUsers();
    } catch (error: any) {
      throw error;
    }
  }
}
