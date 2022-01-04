// Functino F to C
function ftoc(far) {
  const cel = Math.round(((far - 32) * (5/9)) * 10) / 10;
  return cel;
}

// Function C to F
function ctof(cel) {
  const far = Math.round(((cel * (9/5)) + 32) * 10) / 10;
  return far;
}

// Fahrenheit to Celsius;
ftoc(32); // Passed!
ftoc(100); // Passed!
ftoc(-100); // Passed!

// Celcius to Fahrenheit;
ctof(0); // Passed!
ctof(73.2); // Passed!
ctof(-10); // Passed!

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
