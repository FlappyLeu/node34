const http = require("http");

const server = http.createServer((req, res) => {
  const { headers, url, method } = req;
  res.setHeader("content-type", "utf-8");

  if (url === "/") {
    res.statusCode = 200;
    res.write(`<h1>Welcome to our shop!</h1>`);
    res.write(
      `<br><br>Login hiihiin tuld <a href="/login">end</a> darna uu</h1>`
    );
    res.end();
  } else if (url === "/login") {
    // login hiih
    res.write(`<h1>Login hiih</h1>`);
    res.write(`<form action="/logincheck" method="POST">`);
    res.write(`<br><input type="text" name="email"/><br>`);
    res.write(`<br><input type="password" name="password"/><br>`);
    res.write(`<br><input type="submit" value="Login"/>`);
    res.write(`<form/>`);
    res.end();
  } else if (url === "/logincheck" && method === "POST") {
    res.write("<h1>login hiij uzlee</h1>");
    res.write("<br><h1>" + method + "</h1>");
    res.end();
  } else if (url === "/home") {
  }
  console.log(`headers ===> ${headers}`);
  console.log(`url ===> ${url}`);
  console.log(`method ===> ${method}`);
});

server.listen(5000, () => {
  console.log("Server is running on 5000 port");
});
