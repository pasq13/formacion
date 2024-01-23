import { GetLastUserId } from "../../aplication/getLastUserId";
import { UserRepository } from "../../infrastructure/userRepository";
import { users } from "../Mocks/MockUserRepository";

const controller = new GetLastUserId(new UserRepository())
const usersMock = users
test('should getLastId', () => {
    const lastId = controller.run()
    expect(usersMock.length).toBe(lastId);
});