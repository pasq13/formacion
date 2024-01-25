import { UserInputRepository } from "../../users/application/repositories/inputs/userInputRepository";
import { UserOutputRepository } from "../../users/application/repositories/outputs/userOutputRepository";
import { AddUser } from "../../users/application/usecases/inputs/addUser";
import { GetAllUsers } from "../../users/application/usecases/outputs/getAllUsers";
import { UserPresenter, UsersView } from "../userpresenter/userPresenter";


function getUsersPresenter(view: UsersView) {
    const getUsers = new GetAllUsers(new UserOutputRepository());
    const saveUser = new AddUser(new UserInputRepository(), new UserOutputRepository);

    return new UserPresenter(saveUser, getUsers, view);
}
export const CompositionRoot = {
    getUsersPresenter
}
