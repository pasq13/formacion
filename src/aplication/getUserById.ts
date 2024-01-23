
import { Email } from "../domain/DTO/Entities/Email";
import { User } from "../domain/DTO/Entities/User";
import { UserRepository } from "../infrastructure/userRepository";
export class GetUserById {
    constructor(private readonly repository: UserRepository) {
    }

    run(id: number): User | undefined {
        try {
            if (isNaN(id)) {
                throw new Error("La id no es un number");
            }
            return this.repository.getUserById(id);
        } catch (error: any) {
            throw new Error(error.toString())
        }
    }

}