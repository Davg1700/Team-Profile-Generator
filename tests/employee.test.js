const Employee = require("../lib/Employee");

test("new employee object", () => {
  const e = new Employee();
  expect(typeof(e)).toEqual("object");
});

test("sets new name", () => {
  const name = "name";
  const e = new Employee(name);
  expect(e.name).toEqual(name);
});

test("sets Id value", () => {
  const testValue = 100;
  const e = new Employee("name", testValue);
  expect(e.id).toEqual(testValue);
});

test("sets email", () => {
  const testValue = "test@test.com";
  const e = new Employee("name", 1, testValue);
  expect(e.email).toEqual(testValue);
});

test("gets name()", () => {
  const testValue = "name";
  const e = new Employee(testValue);
  expect(e.getName()).toEqual(testValue);
});

test("gets Id()", () => {
  const testValue = 100;
  const e = new Employee("name", testValue);
  expect(e.getId()).toEqual(testValue);
});

test("gets Email()", () => {
  const testValue = "test@test.com";
  const e = new Employee("name", 1, testValue);
  expect(e.getEmail()).toEqual(testValue);
});

test("getRole() for \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("name", 1, "test@test.com");
  expect(e.getRole()).toEqual(testValue);
});