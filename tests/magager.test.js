const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("sets office number", () => {
  const testValue = 100;
  const e = new Manager("name", 1, "test@test.com", testValue);
  expect(e.officeNumber).toEqual(testValue);
});

test('getRole() for "Manager"', () => {
  const testValue = "Manager";
  const e = new Manager("name", 1, "test@test.com", 100);
  expect(e.getRole()).toEqual(testValue);
});

test("gets office number)", () => {
  const testValue = 100;
  const e = new Manager("name", 1, "test@test.com", testValue);
  expect(e.getOfficeNumber()).toEqual(testValue);
});