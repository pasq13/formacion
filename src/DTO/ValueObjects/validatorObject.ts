export abstract class ValidatorObject {
    protected compareObject(object: ValidatorObject): boolean {
        return JSON.stringify(this) === JSON.stringify(object);
    }
    protected compareProperty(object: ValidatorObject, property: string): boolean {
        return JSON.stringify(this[property as keyof ValidatorObject]) === JSON.stringify(object[property  as keyof ValidatorObject])
    }
}
