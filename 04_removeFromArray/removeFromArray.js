const removeFromArray = function(arr, ...num) {
    
    let numArr = [...num]
    numArr.forEach( nmber => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === nmber) {
                arr.splice(i, 1);
            }
        }
    })
    return arr
};

console.log(removeFromArray([1, 2, 3], "1", 3))

// Do not edit below this line
module.exports = removeFromArray;
