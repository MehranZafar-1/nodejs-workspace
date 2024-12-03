
import http from "http";

//Create our server
const server = http.createServer((req, res) => {
    //console.log(req);
    //res.setHeader("Content-Type", "text/html");
    // res.statusCode = 404 //set status code
    // res.statusMessage = "Not Found"; //set status message

    //shorthand for status (code, message, & header)
    res.writeHead (202, "Good", {"Content-Type": "text/html"});
    res.write("<h1>Hello Mehran</h1>");

});

server.listen(8000, () => {
    console.log("Server is running on port 8000");
});