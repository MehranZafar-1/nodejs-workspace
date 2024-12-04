//run on console on localhost
// Blocking Code
// console.log('Start');
// alert("Block");
// console.log('End');

//Non-Blocking Code
// console.log('Start');
// setTimeout(() => {
//     alert("Non-Blocking Code");
// }, 1000);
// console.log('End');

//Without Callback
// import fs from 'fs';
// console.log('Start');

// let data = fs.readFileSync('text.txt');
// console.log(data.toString());

// console.log('End');

//With Callback
import fs from 'fs';
console.log('Start');

fs.readFile('text.txt', (err, res) => {
    err ? console.log(err) : console.log(res.toString());
});
console.log('End');