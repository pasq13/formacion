import { GetAllUsers } from "../../aplication/getAllUsers";
import { UserRepository } from "../../infrastructure/userRepository";
import { user } from "../Mocks/MockUserRepository";

const controller = new GetAllUsers(new UserRepository())
const usersMock = controller.run();
const userMock = user;
test('should initialize', () => {
    expect(usersMock).toHaveLength(5)
});


