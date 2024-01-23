export abstract class ValidatorObject {
    protected compareObject?(object: ValidatorObject): boolean {
        this.validateObject?.()
        object.validateObject?.();
        return JSON.stringify(this) === JSON.stringify(object);
    }
    protected compareProperty?(object: ValidatorObject, property: string): boolean {
        this.validateProperty?.(this[property as keyof ValidatorObject])
        object.validateProperty?.(object[property as keyof ValidatorObject])
        return JSON.stringify(this[property as keyof ValidatorObject]) === JSON.stringify(object[property as keyof ValidatorObject])
    }
    private validateObject?() {
        if (this == null) {
            throw new Error("object null");
        };
        for (const key in this) {
            if (Object.prototype.hasOwnProperty.call(this, key)) {
                const element = this[key];
                this.validateProperty?.(element)
            }
        }
    }
    private validateProperty?(value: any) {
        if (value == null) {
            throw new Error("property null");
        }
    }
}
