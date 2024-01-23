export abstract class ValidatorString {
    protected _regex: RegExp = new RegExp('');
    constructor(_regex: RegExp) {
        this._regex = _regex;
    }
    protected checkString(word: string): boolean {
        if (word === '' || word == null) {
            throw new Error("string vacio");
        }
        return this._regex.test(word)
    }
    protected compareString(word: string, property: string): boolean {
        if (word === '' || word == null) {
            throw new Error("string vacio");
        }
        return this[property as keyof ValidatorString] === word;
    }
}
