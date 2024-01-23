import { GetUserById } from "../../../../application/usecases/outputs/getUserById";
import { user } from "../../../Mocks/MockUserRepository";
import { UserOutputRepository } from "../../../../application/repositories/implementations/userOutputRepository";

const controller = new GetUserById(new UserOutputRepository())
const userMock = user;

test('should getUserById', () => {
    const userById = controller.run(userMock.id as number)
    expect(userMock).toBe(userById);
});