const findTheOldest = function(arr) {
    let age_arr = []
    let largest = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].hasOwnProperty("yearOfBirth") && arr[i].hasOwnProperty("yearOfDeath")) {
            const age = (arr[i]["yearOfDeath"] - arr[i]["yearOfBirth"])
            age_arr.push(age)
        } else if (arr[i].hasOwnProperty("yearOfBirth") == true && arr[i].hasOwnProperty("yearOfDeath") == false) {
            const age = (2023 - arr[i]["yearOfBirth"])
            age_arr.push(age)
        }
    }

    for (let i = 0; i < age_arr.length; i++) {
        if (age_arr[i] > largest)
        largest = age_arr[i];
     }

     for (let i = 0; i < arr.length; i++) {
        if (arr[i].hasOwnProperty("yearOfBirth") && arr[i].hasOwnProperty("yearOfDeath")) {
            if ((arr[i]["yearOfDeath"] - arr[i]["yearOfBirth"]) == largest) {
                return arr[i]
            }
        } else if (arr[i].hasOwnProperty("yearOfBirth") == true && arr[i].hasOwnProperty("yearOfDeath") == false) {
            if ((2023 - arr[i]["yearOfBirth"]) == largest) {
                return arr[i]
            }
        }
    }
};

const people = [
    {
      name: "Carly",
      yearOfBirth: 1066,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

  console.log(findTheOldest(people))

// Do not edit below this line
module.exports = findTheOldest;
