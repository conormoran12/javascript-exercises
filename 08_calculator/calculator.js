const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(arr) {
	let result = 0
  for (num in arr) {
    result += arr[num]
  }
  return result
};

const multiply = function(arr) {
  let result = arr[0]
  for (let i = 1; i < arr.length; i++) {
    result *= arr[i]
  }
  return result
};

const power = function(num, pow) {
	let result = num

  for (let i = 1; i < pow; i++) {
    result *= num
  }
  return result
};

const factorial = function(num) {
	let result = num
  if (num == 0) {return 1}
  for (let i = num-1; i > 0; i--) {
    result *= i
  }
  return result
};

console.log(multiply([10,5,9,10]))

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
