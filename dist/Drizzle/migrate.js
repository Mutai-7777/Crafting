"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const migrator_1 = require("drizzle-orm/neon-http/migrator");
const db_1 = __importDefault(require("./db"));
const main = async () => {
    try {
        await (0, migrator_1.migrate)(db_1.default, { migrationsFolder: __dirname + "/migrations" });
        console.log("migration successful");
    }
    catch (e) {
        console.error("error while migrating", e);
        process.exit(1);
    }
};
main();
