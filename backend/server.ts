import container from "./inversify.config";
import TYPES from "./types";
import {CabsController} from "./src/CabsController";
import * as restify from "restify";
import * as corsMiddleware from "restify-cors-middleware";

const cors = corsMiddleware({
    origins: ["*"],
    allowHeaders: ["Authorization"],
    exposeHeaders: ["Authorization"]
});

const server = restify.createServer();
const controller = container.get<CabsController>(TYPES.CabsController);

server.pre(cors.preflight);
server.use(cors.actual);

server.get("/cabs/:location", controller.getCabs.bind(controller));
server.get("/cabs/", controller.getCabs.bind(controller));

server.listen(8080, () => {
    console.log("%s listening at %s", server.name, server.url);
});

