import { GetUserController } from "../../aplication/getUserController";
import { UserRepository } from "../../infrastructure/userRepository";
import { user } from "../Mocks/MockUserRepository";

const controller = new GetUserController(new UserRepository())
const usersMock = controller.getAllUsers();
const userMock = user;
test('should initialize', () => {
    expect(usersMock).toHaveLength(5)
});
test('should getUserByEmail', () => {
    const userByEmail = controller.getUserByEmail(userMock.email)
    expect(userMock).toBe(userByEmail);
});
test('should getUserById', () => {
    const userById = controller.getUserById(userMock.id as number)
    expect(userMock).toBe(userById);
});
test('should getLastId', () => {
    const lastId = controller.getLastId()
    expect(usersMock.length).toBe(lastId);
});