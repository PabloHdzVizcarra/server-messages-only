import { Name } from "./Name";


describe("test in Name ValueObject", () => {
  test("should throw an error if the passes value does not meet the conditions", () => {
    try {
      Name.create("as");
    } catch (error) {
      expect(error.toString()).toBeTruthy();
    }
  });

  test("should create correct value object with value is ok", () => {
    try {
      const name = Name.create("john");
      expect(name.getValue()).toEqual("john");
    } catch (error) {
      expect(error.toString()).toBeFalsy();
    }
  });
});
