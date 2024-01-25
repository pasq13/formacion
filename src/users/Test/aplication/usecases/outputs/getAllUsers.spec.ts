import { GetAllUsers } from "../../../../application/usecases/outputs/getAllUsers";
import { user } from "../../../Mocks/MockUserRepository";
import { UserOutputRepository } from "../../../../application/repositories/outputs/userOutputRepository";

const controller = new GetAllUsers(new UserOutputRepository())
const usersMock = controller.run();
const userMock = user;
test('should initialize', () => {
    expect(usersMock).toHaveLength(5)
});


