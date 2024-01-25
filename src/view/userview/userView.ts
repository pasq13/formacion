
import * as readline from "readline";
import { CompositionRoot } from "../../presenter/composition/compositionRoot";
import { UsersView } from "../../presenter/userpresenter/userPresenter";
import { User } from "../../users/domain/Entities/User.entity";

export class UserView implements UsersView {
    private presenter = CompositionRoot.getUsersPresenter(this);

    constructor(private rl: readline.Interface) {}

    async show() {
        await this.presenter.onInitialize();
        await this.presenter.onAddUser();
        this.rl.addListener("close", () => this.presenter.onStop());
    }

    showError(message: string): void {
        console.log("algo ha ido mal");
        console.log(message);
    }
    showEmptyCase(): void {
        console.log("Users is empty! :(");
    }
    showUsers(users: User[]): void {
        console.log("Usuarios:");
        users.forEach(user => {
            console.log(`${user.name} => ${user.email.email}`);
        });
    }

    requestUsername(): Promise<string> {
        return new Promise((resolve, _) => {
            this.rl.question("New user.\nName? ", answer => resolve(answer));
        });
    }
    requestEmail(): Promise<string> {
        return new Promise((resolve, _) => {
            this.rl.question("Email? ", answer => resolve(answer));
        });
    }
    requestPassword(): Promise<string> {
        return new Promise((resolve, _) => {
            this.rl.question("Password? ", answer => resolve(answer));
        });
    }

    showWelcome() {
        console.clear();
        console.log("Holii");
    }

    showGoodbye() {
        console.log("\nAdios!");
    }
}
