"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const hono_1 = require("hono");
const user_controller_1 = require("./user.controller");
const zod_validator_1 = require("@hono/zod-validator");
const validators_1 = require("../validators");
exports.userRouter = new hono_1.Hono();
////gets all users
exports.userRouter.get("/users", user_controller_1.listUsers); //(c:Context) => {
//     return c.json(users, 200)
//   }); 
//get a single user
exports.userRouter.get("/users/:id", user_controller_1.getUser);
//create a user
exports.userRouter.post("/register", (0, zod_validator_1.zValidator)('json', validators_1.userSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400);
    }
}), user_controller_1.createUser);
