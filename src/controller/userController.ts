import { User } from "../domain/DTO/Entities/User";
import { UserRepository } from "../repository/userRepository";

export class UserController implements UserRepository {
    repository = new UserRepository();
    getAllUsers(): User[] {
        return this.repository.getAllUsers();
    }
    getUserById(id: number): User | undefined {
        if (isNaN(id)) {
            throw new Error("La id no es un number");
        }
        return this.repository.getUserById(id);
    }
    addUser(user: User): void {
        const users = this.getAllUsers();
        if (users.find(us => us.compareUserById?.(user))) {
            throw new Error("La id no es un number");
        };
        if (users.find(us => us.email.compareEmail?.(user.email))) {
            throw new Error("Email repetido");
        };
        user.id = user.id ?? this.getLastId() + 1
        this.repository.addUser(user);
    }
    getLastId(): number {
        return this.repository.getLastId()
    }
}