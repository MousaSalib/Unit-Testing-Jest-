const theSum = require("../sum");

describe("Return the total sum", () => {
  describe("Return 0 value and one value", () => {
    test("Return 0", () => {
      expect(theSum()).toBe(0);
    });
    test("Return one number", () => {
      expect(theSum(10)).toBe(10);
    });
  });

  describe("Return all values", () => {
    test("Return num 1 + num 2", () => {
      expect(theSum(10, 20)).toBe(30);
    });

    test("Return num 1 + num 2 + num 3", () => {
      expect(theSum(10, 20, 30)).toBe(60);
    });

    test("Return deferent numbers of num", () => {
      expect(theSum(10, 20, 30, 40, 50, 60)).toBe(210);
    });
  });
});
