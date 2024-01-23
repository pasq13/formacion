import { Email } from "../../domain/DTO/Entities/Email";
import { Password } from "../../domain/DTO/Entities/Password";
import { User } from "../../domain/DTO/Entities/User";
export const user: User = {
    email: new Email(
        "pepe@gmail.com"
    ),
    password: new Password("botella1"),
    name: 'pepe',
    id: 1,
}
export const user2: User = {
    email: new Email(
        "pepe@gmail1.com"
    ),
    password: new Password("botella1"),
    name: 'pepe',
    id: 2,
}
export const user3: User = {
    email: new Email(
        "pepe@gmail2.com"
    ),
    password: new Password("botella1"),
    name: 'pepe',
    id: 3,
}
export const user4: User = {
    email: new Email(
        "pepe@gmail3.com"
    ),
    password: new Password("botella1"),
    name: 'pepe',
    id: 4,
}
export const user5: User = {
    email: new Email(
        "pepe@gmail4.com"
    ),
    password: new Password("botella1"),
    name: 'pepe',
    id: 5,
}
export let users: User[] = [user, user2, user3, user4, user5];