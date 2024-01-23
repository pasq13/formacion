export abstract class ValidatorObject {
    protected compareObject(object: ValidatorObject): boolean {
        if (object == null) {
            throw new Error("object null");
        };
        return JSON.stringify(this) === JSON.stringify(object);
    }
    protected compareProperty(object: ValidatorObject, property: string): boolean {
        if (object == null) {
            throw new Error("object null");
        };
        return JSON.stringify(this[property as keyof ValidatorObject]) === JSON.stringify(object[property as keyof ValidatorObject])
    }
}
