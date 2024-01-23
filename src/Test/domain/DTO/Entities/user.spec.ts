import { Email } from "../../../../domain/DTO/Entities/Email";
import { Password } from "../../../../domain/DTO/Entities/Password";
import { User } from "../../../../domain/DTO/Entities/User";


const email1 = new Email(
  "pepe@gmail.com"
)
const password1 = new Password("botella1")
const user1 = new User('pepe', email1, password1, 5);

const email2 = new Email(
  "pepe@gmail.com"
)
const password2 = new Password("botella1")
const user2 = new User('pepe', email2, password2, 5);

const email3 = new Email(
  "pepe123@gmail.com"
)
const password3 = new Password("botella1112")
const user3 = new User('toni', email3, password3, 7)
const user4 = new User('toni', email3, password3, 5);

test('should user1 tobe user2', () => {
  const compareUser = user1.compareUserById?.(user2);
  expect(compareUser).toBe(true);
});
test('should user3 nottobe user1', () => {
 const compareUser = () => { user1.compareUserById?.(user3) }
  expect(compareUser).toThrow("Misma id")
});
test('should user4 nottobe user1 until same id', () => {
  const compareUser = user1.compareUserById?.(user4);
  expect(compareUser).toBe(false);
});