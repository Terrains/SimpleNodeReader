
// All created .js files in node is wrapped with the following function:
//(function(exports, require, __filename, __dirname) {
//})

// Uncomment the following two lines to test the access to __filename and __dirname
// console.log(__filename)
// console.log(__dirname)



// The following code is a simple application helping us to save and read some basic information to a text file. 
// we can control the app using the terminal

// Example:
// Let's add the string "Hello" to the text file by writing:
// node app append Hello

// Read the content from the text file by writing:
// node app read




// Get the reference to the reader module
const Reader = require("./reader")

// The path and name to the file
const filePath = "test.txt"

// Use Reader to create a new instance of the Reader module
let reader = new Reader() 

// Read the arguments provided in the terminal / console.
// Here we read from argv[2] because the two first arguments ([0] and [1]) is always going to be "node app" in this application
const arg = process.argv[2]

switch(arg) {
    case 'append':
        reader.append(filePath, process.argv[3])
        console.log(`"${process.argv[3]}" has been added to ${filePath} `)
        break;

    case 'read':
        console.log(`Content of ${filePath}:`)
        console.log(reader.read(filePath))
        break;

    default:
        console.log(`${arg} is not a command!`)
        break;
}


console.log(`App finished!\n`) // '\n' adds a new row
