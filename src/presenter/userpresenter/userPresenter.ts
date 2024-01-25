import { AddUser } from "../../users/application/usecases/inputs/addUser";
import { GetAllUsers } from "../../users/application/usecases/outputs/getAllUsers";
import { User } from "../../users/domain/Entities/User.entity";
import { Email } from "../../users/domain/ValueObjects/Email.valueObject";
import { Password } from "../../users/domain/ValueObjects/Password.valueObject";
export interface UsersView {
    showError(message: string): void;

    showWelcome(): void;

    showGoodbye(): void;

    showUsers(users: User[]): void;

    requestUsername(): Promise<string>;

    requestEmail(): Promise<string>;

    requestPassword(): Promise<string>;
}

export class UserPresenter {
    constructor(private readonly addUserUseCase: AddUser, private readonly showUserUseCase: GetAllUsers, private view: UsersView) {

    }
    async onInitialize() {
        this.view.showWelcome();
        const users = await this.loadUsersList();
        this.view.showUsers(users)
    }

    onStop() {
        this.view.showGoodbye();
    }

    async onAddUser() {
        const name = await this.view.requestUsername();

        const emailString = await this.view.requestEmail();
        const email = new Email(emailString);
        if (!email.checkEmail?.()) {
            this.showError('email incorrecto')
        }
        const passwwordString = await this.view.requestPassword();
        const password = new Password(passwwordString);
        if (!password.checkPassword?.()) {
            this.showError('password incorrecto')
        }
        const user = new User(name, email, password)
        await this.saveUser(user)
    }

    async saveUser(user: User) {
        try {

            await this.addUserUseCase.run(user);
        } catch (error: any) {
            this.showError(error.toString())
        }
        const users = await this.loadUsersList();
        this.view.showUsers(users)
        this.onAddUser();
    }

    private async showError(message: string) {
        this.view.showError(message);
        this.loadUsersList();
        this.onAddUser()
    }

    private async loadUsersList() {
        const result = await this.showUserUseCase.run();
        return result;
    }
}
