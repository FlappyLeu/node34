const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const { headers, url, method } = req;

  res.setHeader("content-type", "utf-8");

  if (url === "/") {
    fs.readFile(`./src/index.html`, `utf-8`, (error, data) => {
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
  } else if (url === "/login") {
    fs.readFile("./src/login.html", "utf-8", (error, data) => {
      res.statusCode = 200;
      res.write(data);
      res.end();
    });
  } else if (url === "/logincheck" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on(`end`, () => {
      const parsedBody = Buffer.concat(body).toString();
      const password = parsedBody.split("=")[2];
      if (password === "ocgDDEX01") {
        // if login success
        res.statusCode = 302;
        res.setHeader("Location", "/home");
      } else {
        // if login failed
        res.statusCode = 302;
        res.setHeader("Location", "/error");
      }
      fs.writeFileSync("loginInfo.txt", parsedBody);
      res.write("Za huleej awlaa");
    });
  } else if (url === "/home") {
    fs.readFile("./src/home.html", "utf-8", (error, data) => {
      res.statusCode = 200;
      res.write(data);
      res.end();
    });
  } else if (url === "/error") {
    fs.readFile("./src/error.html", "utf-8", (error, data) => {
      res.statusCode = 200;
      res.write(data);
      res.end();
    });
  } else {
    res.statusCode = 404;
    res.write("<h1>404 not found</h1>");
    res.end();
  }
});

server.listen(5000, () => {
  console.log("Server is running on 5000 port");
});
