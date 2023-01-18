const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	const file = await fs.writeFile(fileName, fileContent);
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	const file = await fs.readFile(fileName);
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	const file = await fs.appendFile(fileName, fileContent)
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	const file = await fs.unlink(fileName);
}

myFileWriter("File.txt", "Hello");
myFileReader("File.txt");
myFileUpdater("File.txt", " World");
myFileWriter("sample.txt", "");
console.log("sample file created");
myFileDeleter("sample.txt");
console.log("sample file deleted");





module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }