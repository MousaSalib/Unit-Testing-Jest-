const allData = require("../all");

test("Check if the the length of the array is 6 items ? >> 1st way", () => {
  expect(allData.length).toBe(6);
});

test("Check if the the length of the array is 6 items ? >> 2nd way", () => {
  expect(allData).toHaveLength(6);
});
test("Check if the array is contains a specific item ?", () => {
  expect(allData).toContain(3);
});
test("Check if the array does not contain a specific item ?", () => {
  expect(allData).not.toContain(7);
});
test("Check if the array does not contain zero ? >> Making loop", () => {
  for (let i = 0; i < allData.length; i++) {
    expect(allData[i]).not.toBe(0);
  }
});
test("Check if the all items of the array is a number type ? >> 1st method", () => {
  for (let i = 0; i < allData.length; i++) {
    expect(isNaN(allData[i])).not.toBe(true);
  }
});
test("Check if the all items of the array is a number type ? >> 2nd method", () => {
  for (let i = 0; i < allData.length; i++) {
    expect(isNaN(allData[i])).toBe(false);
  }
});
test("Check if the all items of the array is a number type ? >> 3rd method", () => {
  for (let i = 0; i < allData.length; i++) {
    expect(isNaN(allData[i])).not.toBeTruthy();
  }
});
test("Check if the all items of the array is a number type ? >> 4th method", () => {
  for (let i = 0; i < allData.length; i++) {
    expect(isNaN(allData[i])).toBeFalsy();
  }
});
test("Check if the first item of the array is less than or equal 1", () => {
  for (let i = 0; i < allData.length; i++) {
    expect(allData[0]).toBeLessThanOrEqual(1);
  }
});
test("Check if the first item of the array is greater than or equal 1", () => {
  for (let i = 0; i < allData.length; i++) {
    expect(allData[0]).toBeGreaterThanOrEqual(1);
  }
});
test("Check if the first item of the array is less than 1", () => {
  for (let i = 0; i < allData.length; i++) {
    expect(allData[0]).toBeLessThan(2);
  }
});
test("Check if the first item of the array is greater than 1", () => {
  for (let i = 0; i < allData.length; i++) {
    expect(allData[0]).toBeGreaterThan(0);
  }
});
test("Check an undefined value", () => {
  let a;
  expect(a).toBeUndefined();
});
test("Check if there is a matched substring by regular expression", () => {
  let sentence = "Leave the past where it belongs";
  expect(sentence).toMatch(/past/);
});
test("Check for properties", () => {
  let person = {
    name: "Mousa",
    age: 25,
  };
  expect(person).toHaveProperty("name");
});
test("Check for properties and values", () => {
  let person = {
    name: "Mousa",
    age: 25,
  };
  expect(person).toHaveProperty("age", 25);
});

expect.extend({
  toBeLargerThan(received, target) {
    const pass = received > target;
    if (pass) {
      return {
        message: () => `Expected ${received} is larger than ${target}`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `Error: Expected ${received} to be larger than ${target}`,
        pass: false,
      };
    }
  },
});

test("Check if the received number is larger than the target number", () => {
  expect(10).toBeLargerThan(9);
});

expect.extend({
  toBeBetween(received, start, end) {
    const pass = received > start && received < end;
    if (pass) {
      return {
        message: () => `Expected ${received} to be between ${start} and ${end}`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `Error: Expected ${received} to be between ${start} and ${end}`,
        pass: false,
      };
    }
  },
});

test("Check if the received number is between the start and end numbers", () => {
  expect(1999).toBeBetween(1990, 2025);
});

test("Expect anything", () => {
  expect("Mousa").toEqual(expect.anything());
  expect(1).toEqual(expect.anything());
  expect([1, 2, 3]).toEqual(expect.anything());
});
test("Expect any constructor", () => {
  expect("Mousa").toEqual(expect.any(String));
  expect(1).toEqual(expect.any(Number));
});
test("Expect the items that are found in the array", () => {
  let myArray = [1, 2, 3, 4, 5];
  expect(myArray).toEqual(expect.arrayContaining([1, 2]));
});
