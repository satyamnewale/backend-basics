import fs from "fs";

const rqListner = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url == "/") {
    res.write("<h1>Hello user</h1>");
    res.write('<p><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></p>');
    return res.end()
  }

  if (url == "/message" && req.method == "POST") {
    const body = [];

    req.on("data", (chunk) => {
        console.log(chunk)
        body.push(chunk);
    });

    return req.on("end", () => {
        const parsedBody = Buffer.concat(body).toString();
        console.log(parsedBody)
        const message = parsedBody.split("=")[0];
        console.log(message)
        fs.writeFile("message.txt", message, (err) => {
            res.statusCode = 302;
            res.setHeader("Location", "/");
            return res.end();
        });
    })  
  }
};

export default rqListner;