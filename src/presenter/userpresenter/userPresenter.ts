import { AddUser } from "../../users/application/usecases/inputs/addUser";
import { GetAllUsers } from "../../users/application/usecases/outputs/getAllUsers";
import { User } from "../../users/domain/Entities/User.entity";
import { UserView } from "../../view/userview/userView";

export class UserPresenter {
    constructor(private readonly addUserUseCase: AddUser, private readonly showUserUseCase: GetAllUsers, private view: UserView) {

    }
    initialize() {
        return this.view.initialize();
    }
    addUser(user: User) {
        this.addUserUseCase.run(user);
    }
    show() {
        this.view.data = this.showUserUseCase.run();
        this.view.show();
    }

}
