import { Email } from "../../../../domain/DTO/Entities/Email";

const email1 = new Email(
    "pepe@gmail.com"
)
const email2 = new Email(
    "pepe@gmail.com"
)
const email3 = new Email(
    "pepe123@gmail.com"
)
const email4 = new Email(
    "pepe123gmailcom"
)
test('should email1 tobe email2', () => {
    const compareEmail = email1.compareEmail?.(email2);
    expect(compareEmail).toBe(true);
});
test('should email1 nottobe email3', () => {
    const compareEmail = email3.compareEmail?.(email1);
    expect(compareEmail).toBe(false);
});
test('should email1 ok formed', () => {
    const checkEmail = email1.checkEmail?.();
    expect(checkEmail).toBe(true);
});
test('should email4 bad formed', () => {
    const checkEmail = email4.checkEmail?.();
    expect(checkEmail).toBe(false);
});