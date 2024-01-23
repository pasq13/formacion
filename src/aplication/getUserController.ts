import { Email } from "../domain/DTO/Entities/Email";
import { User } from "../domain/DTO/Entities/User";
import { UserRepository } from "../infrastructure/userRepository";

export class GetUserController {
    constructor(private readonly repository: UserRepository) {
    }
    getAllUsers(): User[] {
        try {
            return this.repository.getAllUsers();
        } catch (error: any) {
            throw new Error(error.toString())
        }
    }
    getUserById(id: number): User | undefined {
        try {
            if (isNaN(id)) {
                throw new Error("La id no es un number");
            }
            return this.repository.getUserById(id);
        } catch (error: any) {
            throw new Error(error.toString())
        }
    }
    getLastId(): number {
        try {
            return this.repository.getLastId()
        } catch (error: any) {
            throw new Error(error.toString())

        }
    }
    getUserByEmail(email: Email): User | undefined {
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