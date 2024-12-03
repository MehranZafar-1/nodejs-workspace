import * as fs from "fs";

//creating directory / folder
//error will be thrown if directory already exists
// fs.mkdir("c:\\nodejs\\courses", (error) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log("Directory created");
//     }
// });

// you can also define custom functions
fs.mkdir("c:\\nodejs\\courses1", function (error){
    if (error) {
        console.log(error);
    } 
})