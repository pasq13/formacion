import { IUserOutputRepository } from "../../../domain/repositories/outputs/IUserOutputRepository";
import { UserOutputRepository } from "../../repositories/outputs/userOutputRepository";

export class GetLastUserId {
  constructor(private readonly repository: IUserOutputRepository) { }
  async run(): Promise<number> {
    try {
      return await this.repository.getLastId();
    } catch (error: any) {
      throw error;
    }
  }
}
