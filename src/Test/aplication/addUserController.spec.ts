import { AddUserController } from "../../aplication/addUserController";
import { GetUserController } from "../../aplication/getUserController";
import { Email } from "../../domain/DTO/Entities/Email";
import { Password } from "../../domain/DTO/Entities/Password";
import { User } from "../../domain/DTO/Entities/User";
import { UserRepository } from "../../infrastructure/userRepository";

const controller = new AddUserController(new UserRepository())
test('same email', () => {
    const email1 = new Email(
        "pepe@gmail.com"
    )
    const password1 = new Password("botella1")
    const user = new User('pepe', email1, password1);
    const addUser = () => { controller.addUser(user) };
    expect(addUser).toThrow("Email repetido");
})
test('no id distinct id', () => {
    const email1 = new Email(
        "pepe@hotmail.com"
    )
    const password1 = new Password("botella1")
    const user = new User('pepe', email1, password1);
    const addUser = () => { controller.addUser(user) };
    expect(addUser).not.toThrow();
})

test('same id 3', () => {
    const email1 = new Email(
        "pepe@gmail123.com"
    )
    const password1 = new Password("botella1")
    const user = new User('pepe', email1, password1, 3);
    const addUser = () => { controller.addUser(user) };
    expect(addUser).toThrow("Misma id")
})