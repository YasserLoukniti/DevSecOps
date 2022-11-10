const { isAlphaNumeric } = require("./alphanumeric");


describe("Test if user enters an acceptable user input which is alphanumeric", function () {
    it("Should test if user enters alphanumeric or not", function () {
    expect(isAlphaNumeric('ThisIsAnAlphanumeric112233')).toEqual(true);
    });
    });
describe("Test if user enters an acceptable user input which is alphanumeric", function () {
    it("Should test if user enters alphanumeric or not", function () {
    expect(isAlphaNumeric('ThisIsAnAlphanumeric#$$@@')).toEqual(false);
    });
});
describe("Test if user enters an acceptable user input which is alphanumeric", function () {
    it("Should test if user enters alphanumeric or not", function () {
    expect(isAlphaNumeric('Yasser@')).toEqual(true);
    });
});