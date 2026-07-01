// import http from "http";
// import rqListner from "./routes.js";

// 1. import express
import express from "express";
import bodyParser from "body-parser";

// 2. create an app // express exports a function that creates an app
const app = express();

// 2.1 middleware
app.use(bodyParser.urlencoded());

// 3.1 importing the routes
import adminRoutes from "./routes/admin.js";
import shopRoutes from "./routes/shop.js";

// 3.2 using the routes
app.use("/admin",adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).send("<h1>Page not found</h1>");
});

// 4. create a server ( previous way of creating a server) and new way of creating a server
// const server = http.createServer(app);

// server.listen(8000);
app.listen(8000, () => console.log("Listening on port 8000"));