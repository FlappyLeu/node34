const { BADHINTS } = require("dns");
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const { headers, url, method } = req;

  res.setHeader("content-type", "text/html");

  if (url === "/") {
    fs.readFile("./src/index.html", "utf8", (error, data) => {
      if (error) {
        res.statusCode = 500;
        res.write("<h1>Error!</h1>");
        res.end();
      } else {
        res.statusCode = 200;
        res.write(data);
        res.end();
      }
    });
    res.write(`<br><br>click <a href="/login">here to login</a>`);
    res.end();
  } else if (url === "/login") {
    // login form baina, html butsaanaa
    fs.readFile("./src/login.html", "utf-8", (error, data) => {
      res.statusCode = 200;
      res.write(data);
      res.end();
    });
    res.statusCode = 200;
    res.write(data);
    res.end();
  } else if (url === "/logincheck" && method === "POST") {
    // login hiisnii daraa uuseh heseg
    res.statusCode = 200;
    res.write(`<h1>Login hiij uzlee</h1>`);
    res.write("<br><h1>Amjilttai newterlee</h1>");
    res.end();
  } else if (url === "/home") {
    // login hiisnii daraa uuseh heseg
  } else {
    res.statusCode = 404;
    res.write(`<h1>404 Not Found</h1>`);
    res.end();
  }
});

server.listen(5000, () => {
  console.log("http server started on 5000");
});
