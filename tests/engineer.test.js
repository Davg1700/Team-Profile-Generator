const Engineer = require("../lib/Engineer");

test("set GitHUb account", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("name", 1, "test@test.com", testValue);
  expect(e.github).toEqual(testValue);
});

test("getRole() for \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("name", 1, "test@test.com", "GitHubUser");
  expect(e.getRole()).toEqual(testValue);
});

test("gets GitHub username", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("name", 1, "test@test.com", testValue);
  expect(e.getGithub()).toEqual(testValue);
});