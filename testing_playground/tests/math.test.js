const {
  calculateTip,
  fahrenheitToCelsius,
  celsiusToFahrenheit
} = require("../dummyFunctions/math");

test("should calculate total with tip ", () => {
  const total = calculateTip(10, 0.3);
  expect(total).toBe(13);
});

test("Should calculate total with default tip", () => {
  const total = calculateTip(10);
  expect(total).toBe(12.5);
});

test("Should convert 32F to C", () => {
  result = fahrenheitToCelsius(32);
  expect(result).toBe(0);
});

test("Should convert 0 c to 32 f", () => {
  result = celsiusToFahrenheit(0);
  expect(result).toBe(32);
});


test('Async test demo',()=>{
  expect(1).toBe(2);
})