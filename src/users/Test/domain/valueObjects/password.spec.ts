import { Password } from "../../../domain/ValueObjects/Password.valueObject";

const password1 = new Password("botellas1")
const password2 = new Password("botellas1")
const password3 = new Password("botella1112")
const password4 = new Password('12');

test('should password1 tobe password2', () => {
    const comparePassword = password1.comparePassword?.(password2);
    expect(comparePassword).toBe(true);
});
test('should password1 nottobe password3', () => {
    const comparePassword = password1.comparePassword?.(password3);
    expect(comparePassword).toBe(false);
});
test('should password1 ok formed', () => {
    const checkPassword = password2.checkPassword?.();
    expect(checkPassword).toBe(true);
});
test('should password4 bad formed', () => {
    const checkPassword = password4.checkPassword?.();
    expect(checkPassword).toBe(false);
});