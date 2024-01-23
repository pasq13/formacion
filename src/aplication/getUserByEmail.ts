
import { Email } from "../domain/DTO/Entities/Email";
import { User } from "../domain/DTO/Entities/User";
import { UserRepository } from "../infrastructure/userRepository";
export class GetUserByEmail {
    constructor(private readonly repository: UserRepository) {
    }
    run(email: Email): User | undefined {
        try {
            if (!email.checkEmail?.()) {
                throw new Error("La id no es un number");
            }
            return this.repository.getUserByEmail(email);
        } catch (error: any) {
            throw new Error(error.toString())
        }

    }
}