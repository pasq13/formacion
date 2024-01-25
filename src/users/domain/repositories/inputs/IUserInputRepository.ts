import { User } from "../../Entities/User.entity"
export interface IUserInputRepository {
    addUser(user: User): Promise<void>;
}
