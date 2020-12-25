import getArrayOf from './getArrayOf';

describe("getArrayOf", () => {
    test("input array", () => {
        const array = []
        expect(getArrayOf(array)).toBe(array)
    });
    test("input value", () => {
        const value = {}
        expect(getArrayOf(value)[0]).toBe(value)
    });
    test("input falsy", () => {
        const value = undefined;
        const array = getArrayOf(value);
        expect(Array.isArray(array)).toBe(true)
        expect(array.length).toBe(0)
    });
});