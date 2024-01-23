import { Email } from "../domain/DTO/Entities/Email";
import { User } from "../domain/DTO/Entities/User";
import { UserRepository } from "../infrastructure/userRepository";

export class GetUserController {
    constructor(private readonly repository: UserRepository) {
    }
    getAllUsers(): User[] {
        return this.repository.getAllUsers();
    }
    getUserById(id: number): User | undefined {
        if (isNaN(id)) {
            throw new Error("La id no es un number");
        }
        return this.repository.getUserById(id);
    }
    getLastId(): number {
        return this.repository.getLastId()
    }
    getUserByEmail(email: Email): User | undefined {
        if (!email.checkEmail?.()) {
            throw new Error("La id no es un number");
        }
        return this.repository.getUserByEmail(email);
    }
}