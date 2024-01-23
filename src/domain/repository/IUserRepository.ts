import { User } from "../DTO/Entities/User"

export interface IUserRepository {
    getAllUsers(): User[]
    getUserById(id: number): User | undefined
    addUser(user: User): void
    getLastId(): number
}
