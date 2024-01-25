import { AddUser } from "../../users/application/usecases/inputs/addUser";
import { GetAllUsers } from "../../users/application/usecases/outputs/getAllUsers";
import { UserPresenter, UsersView } from "../userpresenter/userPresenter";


function getUsersPresenter(view: UsersView) {
    const getUsers = new GetAllUsers();
    const saveUser = new AddUser();

    return new UserPresenter(saveUser, getUsers, view);
}
export const CompositionRoot = {
        getUsersPresenter
}
