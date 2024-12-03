import {URL} from "url";

const myURL = new URL("https://www.example.com:8080/p/a/t/h?query=string#hash");

// console.log(myURL.hash);
// console.log(myURL.host); //with port
// console.log(myURL.hostname); //only hostname
// console.log(myURL.port); //only port
// console.log(myURL.href);
// console.log(myURL.protocol);
// console.log(myURL.pathname); //trailing slash
// console.log(myURL.search); //query string
// console.log(myURL.searchParams); //query parameters

//both will give same
console.log(myURL.toString());
console.log(myURL.toJSON());
