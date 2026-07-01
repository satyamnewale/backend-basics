// import http from "http";
// import rqListner from "./routes.js";

// 1. import express
import express from "express";

// 2. create an app // express exports a function that creates an app
const app = express();

// 3. creating use middleware
app.use((req, res, next) => {
    console.log("In the middleware");
    next();
});

app.use((req , res , next) => {
    console.log("In another middleware");
    res.send('<h1>Hello from my express app</h1>');
})

// 4. create a server ( previous way of creating a server) and new way of creating a server
// const server = http.createServer(app);

// server.listen(8000);
app.listen(8000, () => console.log("Listening on port 8000"));