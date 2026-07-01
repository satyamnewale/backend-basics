import http from "http";
import rqListner from "./routes.js";

const server = http.createServer(rqListner);

server.listen(8000);
