const { BADHINTS } = require("dns");
const http = require("http");

const server = http.createServer((req, res) => {
  const { headers, url, method } = req;

  res.setHeader("content-type", "text/html");

  if (url === "/") {
    res.statusCode = 200;
    res.write("<h1>Welcome to our shop</h1>");
    res.write(`<br><br>click <a href="/login">here to login</a>`);
    res.end();
  } else if (url === "/login") {
    // login form baina, html butsaanaa
    res.statusCode = 200;
    res.write(`<h1>Login hiih heseg</h1>`);
    res.write(`<form action="/logincheck" method="POST">`);
    res.write(`<br><br><input type="text" name="email"/>`);
    res.write(`<br><br><input type="password" name="password"/>`);
    res.write(`<br><br><input type="submit" value="Login"/>`);
    res.write(`<form/>`);
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
