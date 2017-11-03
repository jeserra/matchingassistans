assert = require("assert");
Calculator = require("../Calculator.js").Calculator

describe("A calculator", function () {
    describe("adding 3 and 4 together", function () {
        it("should return 7", function () {
            var result = new Calculator().AddNumbers(3, 4);
              assert.equal(7, result, "But the number " + result + " was returned instead");

        });
    });
});