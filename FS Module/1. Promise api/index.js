import * as fs from "fs/promises";

//creating directory / folder
// try {
//     await fs.mkdir("c:\\nodejs");
//     console.log("Directory created");
// } catch (error) {
//     console.log(error);
// }

//we want to create say 2 or more enveloped folders, nodejs and then inside that courses
// try {
//     await fs.mkdir("c:\\nodejs\\courses", {recursive: true});
//     console.log("Directory created");
// } catch (error) {
//     console.log(error);
// }


//Read the files in a directory
// try {
//     const files = await fs.readdir("c:\\nodejs");
//     for (const file of files) {
//         console.log(file);
//     }
// } catch (error) {
//     console.log(error);
// }

//Read the contents of a file
// try {
//     const data = await fs.readFile("c:\\nodejs\\text1.txt");
//     console.log(data.toString()); //Buffer to string
// } catch (error) {
//     console.log(error);
// }

// Remove file
// try {
//     await fs.rm("c:\\nodejs\\text1.txt");
//     console.log("File deleted");
// } catch (error) {
//     console.log(error);
// }

//Remove folder or directory
//it must be empty
// try {
//     await fs.rmdir("c:\\nodejs\\courses");
//     console.log("Directory deleted");
// } catch (error) {
//     console.log(error);
// }

//Create and write to a file
//It will replace any existing file
// try {
//     await fs.writeFile("c:\\nodejs\\text1.txt", "Hello World 100");
//     console.log("File created");
// } catch (error) {
//     console.log(error);
// }

//Append to a file
// try {
//     await fs.appendFile("c:\\nodejs\\text1.txt", "Hello World 200");
//     console.log("Text Appended");
// } catch (error) {
//     console.log(error);
// }

//Copy File
// try {
//     await fs.copyFile("c:\\nodejs\\text1.txt", "c:\\nodejs\\text2.txt");
//     console.log("File copied");
// } catch (error) {    
//     console.log(error);
// }

//Get File Information
try {
    const info = await fs.stat("c:\\nodejs\\text1.txt");
    console.log(info);
    console.log(info.isDirectory()); //IS IT A DIRECTORY
    console.log(info.isFile()); //IS IT A FILE
} catch (error) {
    console.log(error);
}