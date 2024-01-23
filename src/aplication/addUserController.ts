import { User } from "../domain/DTO/Entities/User";
import { UserRepository } from "../infrastructure/userRepository";

export class AddUserController {
    constructor(private readonly repository:  UserRepository){
    }
    addUser(user: User): void {
        const users = this.repository.getAllUsers();
        if (users.find(us => us.compareUserById?.(user))) {
            throw new Error("La id no es un number");
        };
        if (users.find(us => us.email.compareEmail?.(user.email))) {
            throw new Error("Email repetido");
        };
        user.id = user.id ?? this.repository.getLastId() + 1
        this.repository.addUser(user);
    }
}