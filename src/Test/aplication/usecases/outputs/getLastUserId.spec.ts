import { GetLastUserId } from "../../../../application/usecases/outputs/getLastUserId";
import { users } from "../../../Mocks/MockUserRepository";
import { UserOutputRepository } from "../../../../application/repositories/implementations/userOutputRepository";

const controller = new GetLastUserId(new UserOutputRepository())
const usersMock = users
test('should getLastId', () => {
    const lastId = controller.run()
    expect(usersMock.length).toBe(lastId);
});