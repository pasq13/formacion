import { UserOutputRepository } from "../../repositories/implementations/userOutputRepository";

export class GetLastUserId {
  constructor(private readonly repository: UserOutputRepository) {}
  run(): number {
    try {
      return this.repository.getLastId();
    } catch (error: any) {
      throw error;
    }
  }
}
