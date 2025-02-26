const theValidationName = require("../input");

describe("Check the validation of the name", () => {
  test("Check if there is a no value", () => {
    expect(theValidationName()).toBe("Unknown");
  });
  test("Check if there is a space (Start + End)", () => {
    expect(theValidationName(" Mousa ")).toBe("Mousa");
  });
  test("Check if the number of characters in the name is more than 11 characters", () => {
    expect(theValidationName("Mousa_Khairy_Halim_Salib")).toBe("Mousa_Khairy");
  });
  test("Check if the name contains underscore sign", () => {
    expect(theValidationName("_Mousa")).toBe("Mousa");
  });
});
