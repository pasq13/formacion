import { User } from "../domain/DTO/Entities/User";
import { UserRepository } from "../infrastructure/userRepository";

export class AddUser {
    constructor(private readonly repository: UserRepository) {
    }
    run(user: User): void {
        try {
            const isRegisteredIDUser = this.repository.getUserById(user.id as number)
            if (isRegisteredIDUser) {
                throw new Error("Misma id");
            };
            const isRegisteredEmailUser = this.repository.getUserByEmail(user.email)
            if (isRegisteredEmailUser) {
                throw new Error("Email repetido");
            };
            user.id = user.id ?? this.repository.getLastId() + 1
            this.repository.addUser(user);
        } catch (error: any) {
            throw new Error(error.toString())
        }
    }
}