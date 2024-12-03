import http from "http";


const server = http.createServer((req, res) => {
    res.writeHead (202, "Good", {"Content-Type": "text/html"});
    res.write("<h1>Hello Mehran Zafar</h1>");

});

server.listen(8000, () => {
    console.log("Server is running on port 8000");
});