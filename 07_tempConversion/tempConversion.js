
const convertToCelsius = function(fah) {
  const conversion = (fah - 32) * 5/9
  const roundedNumber = Math.round(conversion * 10) / 10
  return roundedNumber
};

const convertToFahrenheit = function(cel) {
  const conversion = (cel * 9/5) + 32 
  const roundedNumber = Math.round(conversion * 10) / 10
  return roundedNumber
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
