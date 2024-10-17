"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserService = exports.getuserService = exports.usersService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../Drizzle/db"));
const schema_1 = require("../Drizzle/schema");
const usersService = async () => {
    return await db_1.default.query.CardholderTable.findMany();
};
exports.usersService = usersService;
const getuserService = async (id) => {
    return await db_1.default.query.CardholderTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.CardholderTable.user_id, id),
        with: {
            bookings: true,
        }
    });
};
exports.getuserService = getuserService;
//creating a new user
const createUserService = async (user) => {
    await db_1.default.insert(schema_1.CardholderTable).values(user);
    return "User created successfully";
};
exports.createUserService = createUserService;
