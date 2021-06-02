import { Email } from "./Email";

describe("test in Email ValueObject", function () {
  test("should throw error when email pass to argument is not valid", () => {
    try {
      Email.create("some@email")

    } catch (e) {
      expect(e.toString()).toMatch("some@email")
    }
  })
});
