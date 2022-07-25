const http = require("http");

const server = http.createServer((req, res) => {
  const { headers, url, method } = req;
  console.log(`header===>`);
  console.log(`header===> ${url}`);
  console.log(`header===> ${method}`);

  res.setHeader("content-type", "text/plain");
  res.write("<h1>sain baina yy</h1>");
  res.end();
});

server.listen(5000, () => {
  console.log("http server started on 5000");
});
