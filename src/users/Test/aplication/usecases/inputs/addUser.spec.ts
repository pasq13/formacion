import { AddUser } from "../../../../application/usecases/inputs/addUser";
import { Email } from "../../../../domain/ValueObjects/Email.valueObject";
import { Password } from "../../../../domain/ValueObjects/Password.valueObject";
import { User } from "../../../../domain/Entities/User.entity";
import { UserInputRepository } from "../../../../application/repositories/implementations/userInputRepository";
import { UserOutputRepository } from "../../../../application/repositories/implementations/userOutputRepository";

const controller = new AddUser(
  new UserInputRepository(),
  new UserOutputRepository()
);
test("same email", () => {
  const email1 = new Email("pepe@gmail.com");
  const password1 = new Password("botella1");
  const user = new User("pepe", email1, password1);
  const addUser = () => {
    controller.run(user);
  };
  expect(addUser).toThrow("Email repetido");
});
test("no id distinct id", () => {
  const email1 = new Email("pepe@hotmail.com");
  const password1 = new Password("botella1");
  const user = new User("pepe", email1, password1);
  const addUser = () => {
    controller.run(user);
  };
  expect(addUser).not.toThrow();
});

test("same id 3", () => {
  const email1 = new Email("pepe@gmail123.com");
  const password1 = new Password("botella1");
  const user = new User("pepe", email1, password1, 3);
  const addUser = () => {
    controller.run(user);
  };
  expect(addUser).toThrow("Misma id");
});
