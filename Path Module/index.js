// Path Module

import path from "path";

// lets us get the last portion of path
console.log(path.basename("c:\\users\\mehran\\desktop\\nodejs workspace"));

//remove extension
console.log(path.basename("c:\\users\\mehran\\desktop\\nodejs workspace\\path.js", ".js"));

//returns directory without base name
console.log(path.dirname("c:\\users\\mehran\\desktop\\nodejs workspace\\path.js"));

//returns extension
console.log(path.extname("c:\\users\\mehran\\desktop\\nodejs workspace\\path.js"));

//returns full path
console.log(path.join("c:", "users", "mehran", "desktop", "nodejs workspace" , "path.js"));

//go up a level --- removes last
console.log(path.join("c:", "users", "mehran", "desktop", "nodejs workspace" , "path.js", ".."));
console.log(path.join("c:", "users", "mehran", "desktop", "nodejs workspace" , "path.js", "..", ".."));

//normalize - resolves ".." and "\\" and also "."
console.log(path.normalize("c:\\users\\mehran\\desktop\\nodejs workspace\\path.js"));

//parse - gives different components of path
console.log(path.parse("c:\\users\\mehran\\desktop\\nodejs workspace\\path.js"));
console.log(path.parse("c:\\users\\mehran\\desktop\\nodejs workspace\\path.js").ext);