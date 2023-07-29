const getTheTitles = function(arr) {
    let book_arr = []

    for (let i = 0; i < arr.length; i++) {
            if (arr[i].hasOwnProperty("title") == true) {
                book_arr.push(arr[i]["title"])
            }
    }

    return book_arr

};

const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
]

console.log(getTheTitles(books))

// Do not edit below this line
module.exports = getTheTitles;
