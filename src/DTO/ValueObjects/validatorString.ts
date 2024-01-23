export abstract class ValidatorString {
    protected _regex!: RegExp;
    constructor(_regex: RegExp) {
        this._regex = _regex;
    }
    protected checkString(word: string): boolean {
        return this._regex.test(word)
    }
    protected compareString(word: string, property: string): boolean {
        return this[property as keyof ValidatorString] === word;
    }
}
