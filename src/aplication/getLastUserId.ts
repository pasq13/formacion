import { UserRepository } from "../infrastructure/userRepository";


export class GetLastUserId {
    constructor(private readonly repository: UserRepository) {
    }
   run(): number {
        try {
            return this.repository.getLastId()
        } catch (error: any) {
            throw new Error(error.toString())

        }
    }
    
}
