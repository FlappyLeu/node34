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
  } else if (url === "/login") {
    // login form baina, html butsaanaa
    fs.readFile("./src/login.html", "utf-8", (error, data) => {
      res.statusCode = 200;
      res.write(data);
      res.end();
    });
  } else if (url === "/logincheck" && method === "POST") {
    // login hiisnii daraa uuseh heseg
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const password = parsedBody.split("=")[2];
      console.log("password===>", password);
      if (password === "ocgDDEX01") {
        res.statusCode = 302;
        res.setHeader("Location", "/home");
      } else {
        res.statusCode = 302;
        res.setHeader("Location", "/error");
      }
      res.end();
      fs.writeFileSync("logininfo.txt", parsedBody);
      res.write("Login huleej awlaa");
      res.end();
    });
  } else if (url === "/home") {
    // login hiisnii daraa uuseh heseg
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
  }
  server.listen(5000, () => {
    console.log("http server started on 5000");
  });
});
