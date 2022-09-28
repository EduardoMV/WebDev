// Import the filesystem module
const fs = require('fs');
let data = "Hello world!"

// Get the current dir
writeFiles();
getCurrentFilenames();
console.log("\nFile Contents of file1.txt:\n",
	fs.readFileSync("file1.txt", "utf8"));

try {
    fs.copyFileSync("hello.txt", "world.txt",
        fs.constants.COPYFILE_EXCL);
    
    // Get the current filenames
    // after the function
    getCurrentFilenames();
    console.log("\nFile Contents of world.txt:",
        fs.readFileSync("hello.txt", "utf8"));
    }
    catch (err) {
    console.log(err);
    }
// Function to get current filenames
// in directory
function getCurrentFilenames() {
console.log("\nCurrent files in directory:");
fs.readdirSync(__dirname).forEach(file => {
	console.log(file);
});
}

//Function to write a new file
function writeFiles() {
    fs.writeFile("helloworld.txt", data, (err) => {
        if (err)
            console.log(err);
        else {
            console.log("\nFile written successfully\n");
            console.log("The written has the following contents:");
            console.log(fs.readFileSync("helloworld.txt", "utf8"));
        }
    })
}
