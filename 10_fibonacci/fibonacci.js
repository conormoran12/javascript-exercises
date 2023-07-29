const fibonacci = function(number) {
    if (number < 0) {return "OOPS"}
    const phi = (1 + Math.sqrt(5)) / 2

    const equation = (phi ** number - (1 - phi) ** number) / Math.sqrt(5)
    return Math.round(equation)
};

console.log(fibonacci(25));

// Do not edit below this line
module.exports = fibonacci;
