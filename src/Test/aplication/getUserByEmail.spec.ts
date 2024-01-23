import {  } from "../../aplication/getAllUsers";
import { GetUserByEmail } from "../../aplication/getUserByEmail";
import { UserRepository } from "../../infrastructure/userRepository";
import { user } from "../Mocks/MockUserRepository";

const controller = new GetUserByEmail(new UserRepository())
const userMock = user;
test('should getUserByEmail', () => {
    const userByEmail = controller.run(userMock.email)
    expect(userMock).toBe(userByEmail);
});