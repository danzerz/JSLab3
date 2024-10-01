// # Object Challenge

// ### Step 1

// Create an array of objects called `library`. Add 3 objects with a property of `title`, `author`, `status`. Title and author should be strings (whatever value you want) and status should be another object with the properties of `own`, `reading` and `read`. Which should all be boolean values. For all status, set `own` to `true` and `reading` and `read` to false.

// ### Step 2

// You finished reading all of the books. Set the `read` value for all of them to true. Do not edit the initial object. Set the values using dot notation.

// ### Step 3

// Destructure the title from the first book and rename the variable to `firstBook`

// ### Step 4

// Turn the library object into a JSON string
// library object

const library = {
  title: "Head First JavaScript",
  author: "Eric Freeman",
  status: {
    own: true,
    readng: true,
    read: false,
  },
};

library.status.read = true;
console.log(library);
// Destructuring the object
const { title: firstBook } = library;
// Print the title of the book
console.log(firstBook);

// Convert the library object into a JSON string format
const jsonString = JSON.stringify(library);
// print json format
console.log(jsonString);
