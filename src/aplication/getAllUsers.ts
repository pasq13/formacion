import { Email } from "../domain/DTO/Entities/Email";
import { User } from "../domain/DTO/Entities/User";
import { UserRepository } from "../infrastructure/userRepository";

export class GetAllUsers {
    constructor(private readonly repository: UserRepository) {
    }
    run(): User[] {
        try {
            return this.repository.getAllUsers();
        } catch (error: any) {
            throw new Error(error.toString())
        }
    }

}