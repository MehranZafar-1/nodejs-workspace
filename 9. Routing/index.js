import http from "http";

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        //res.end("<h1> Home Page </h1>");
        res.writeHead (200, "Good", {"Content-Type": "text/html"});
        res.end("<a href = '/about'>About Page</a>");
    }
    else if (req.url === '/about') {
        res.writeHead (200, "Good", {"Content-Type": "text/html"});
        res.end("<h1> About Page </h1>");
    }else{
        res.writeHead (404, "Bad", {"Content-Type": "text/html"});
        res.end ("<h1> Not Found </h1>");
    }
});


server.listen (8000, () => {
    console.log('Server is running on port 8000');
});