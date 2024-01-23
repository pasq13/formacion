import { UserController } from "../controller/userController";
import { Email } from "../domain/DTO/Entities/Email";
import { Password } from "../domain/DTO/Entities/Password";
import { User } from "../domain/DTO/Entities/User";

const controller = new UserController()
const users = controller.getAllUsers()
test('should user1 tobe user2', () => {
    expect(users).toHaveLength(5)
});
test('same email', () => {
    const email1 = new Email(
        "pepe@gmail.com"
    )
    const password1 = new Password("botella1")
    const user1 = new User('pepe', email1, password1);
    expect(()=>{controller.addUser(user1)}).toThrow("Email repetido");
})
test('no id distinct id', () => {
    const email1 = new Email(
        "pepe@hotmail.com"
    )
    const password1 = new Password("botella1")
    const user1 = new User('pepe', email1, password1);
    controller.addUser(user1);
    expect(users).toHaveLength(6);
})

test('same id 3', () => {
    const email1 = new Email(
        "pepe@gmail123.com"
    )
    const password1 = new Password("botella1")
    const user1 = new User('pepe', email1, password1, 3);
    expect(()=>{controller.addUser(user1)}).toThrow("Misma id")
})