import {  } from "../../../../application/usecases/outputs/getAllUsers";
import { GetUserByEmail } from "../../../../application/usecases/outputs/getUserByEmail";
import { user } from "../../../Mocks/MockUserRepository";
import { UserOutputRepository } from "../../../../application/repositories/implementations/userOutputRepository";

const controller = new GetUserByEmail(new UserOutputRepository())
const userMock = user;
test('should getUserByEmail', () => {
    const userByEmail = controller.run(userMock.email)
    expect(userMock).toBe(userByEmail);
});