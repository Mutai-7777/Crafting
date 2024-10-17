"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getUser = exports.listUsers = void 0;
const user_service_1 = require("./user.service");
const listUsers = async (c) => {
    ``;
    const data = await (0, user_service_1.usersService)();
    if (data == null || data.length == 0) {
        return c.text("hello Ian user not found", 404);
    }
    return c.json(data, 200);
};
exports.listUsers = listUsers;
//getting rusers
const getUser = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const user = await (0, user_service_1.getuserService)(id);
    if (user == undefined) {
        return c.text("Helllo Ian no Users yet", 404);
    }
    return c.json(user, 200);
};
exports.getUser = getUser;
//creating user
const createUser = async (c) => {
    try {
        const user = await c.req.json();
        const createdUser = await (0, user_service_1.createUserService)(user);
        console.log(createdUser);
        if (!createdUser)
            return c.text("User not created", 404);
        return c.json(createdUser, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createUser = createUser;
