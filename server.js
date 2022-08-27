const http = require("http");
const port = 8082;

http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("<h1>second response from server</h1>");
    response.end();

}).listen(port, () => {
    console.log(`server started listening on port ${port}`);
});