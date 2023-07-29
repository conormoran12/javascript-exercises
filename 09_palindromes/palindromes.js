const palindromes = function (str) {
    let charArr = []
    let arr2 = []
    let new_str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase()

    for (let i = 0; i < str.length; i++) {
        if (new_str[i] != " ") {
            arr2.push(new_str[i])
        }
    }

    new_str = arr2.join("")

    for (let i = new_str.length-1; i >= 0; i--) {
        if (new_str[i] != " ") {
            charArr.push(new_str[i])
        }
    }

    if (charArr.join("") == new_str) {
        return true
    } else {
        return false
    }
    
};

console.log(palindromes("Animal loots foliated detail of stool lamina."))

// Do not edit below this line
module.exports = palindromes;
