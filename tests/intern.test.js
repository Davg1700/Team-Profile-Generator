
const Intern = require("../lib/Intern");

test("sets school", () => {
  const testValue = "NASA";
  const e = new Intern("name", 1, "test@test.com", testValue);
  expect(e.school).toEqual(testValue);
});

test("getRole() for \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("name", 1, "test@test.com", "NASA");
  expect(e.getRole()).toEqual(testValue);
});

test("gets school", () => {
  const testValue = "NASA";
  const e = new Intern("name", 1, "test@test.com", testValue);
  expect(e.getSchool()).toEqual(testValue);
});