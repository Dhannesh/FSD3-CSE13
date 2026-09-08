import http from "http";

const server = http.createServer((req, res) => {
  res.write("<h1>Hello Client</h1>");
  res.write("<h2>My Name</h2>");
  res.write(
    "<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, non culpa eaque, nihil hic magni maiores quis, asperiores repellendus fugit itaque! Consectetur, consequuntur. Iste, numquam praesentium! Architecto dolore nobis saepe!</p>",
  );
  res.end("<h3>Bye Bye</h3>");
});

server.listen(4444, () => console.log("Server is running at 4444..."));
