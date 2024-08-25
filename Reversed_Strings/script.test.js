const solution = require("./script");

describe("Functions solution should return reversed string", () => {
  test("case #1", () => {
    expect(solution("world")).toBe("dlrow");
    expect(solution("word")).toBe("drow");
  });
});
