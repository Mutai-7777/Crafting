"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_server_1 = require("@hono/node-server");
const hono_1 = require("hono");
require("dotenv/config");
const logger_1 = require("hono/logger");
const csrf_1 = require("hono/csrf");
const trailing_slash_1 = require("hono/trailing-slash");
const timeout_1 = require("hono/timeout");
const cors_1 = require("hono/cors");
const user_router_1 = require("./users/user.router");
const app = new hono_1.Hono();
app.use((0, cors_1.cors)());
///  in built middleware     
app.use((0, logger_1.logger)()); //----time counter
app.use((0, csrf_1.csrf)()); //----csrf protection
app.use((0, trailing_slash_1.trimTrailingSlash)()); //----remove trailing slash
app.use('/api/time', (0, timeout_1.timeout)(5000));
app.get('/', (c) => {
    return c.text('Hello Hono!');
});
app.get('/api/time', (c) => {
    setTimeout(() => {
        console.log("data after 5 seconds");
    }, 5000);
    return c.text("return data after 5 seconds");
});
//this is for custom routers 
app.route('/', user_router_1.userRouter); //user
console.log(`Server is running on port ${process.env.PORT}`);
(0, node_server_1.serve)({
    fetch: app.fetch,
    port: Number(process.env.PORT) || 3000
});
