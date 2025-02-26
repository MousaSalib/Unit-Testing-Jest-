const mocker = require("../mock");

test("Mock Function", () => {
  const mocker = jest.fn((name) => `Hello ${name}`);
  expect(mocker("Mousa")).toBe("Hello Mousa");
  expect(mocker("Salib")).toBe("Hello Salib");
  expect(mocker).toHaveBeenCalled();
  expect(mocker).toHaveBeenCalledTimes(2);
  expect(mocker).toHaveBeenCalledWith("Mousa");
  expect(mocker).toHaveBeenLastCalledWith("Salib");
});
