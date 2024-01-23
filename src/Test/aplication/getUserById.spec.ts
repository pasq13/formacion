import { GetUserById } from "../../aplication/getUserById";
import { UserRepository } from "../../infrastructure/userRepository";
import { user } from "../Mocks/MockUserRepository";

const controller = new GetUserById(new UserRepository())
const userMock = user;

test('should getUserById', () => {
    const userById = controller.run(userMock.id as number)
    expect(userMock).toBe(userById);
});