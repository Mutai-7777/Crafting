"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.client = void 0;
require("dotenv/config");
const neon_http_1 = require("drizzle-orm/neon-http");
const pg_1 = require("pg");
const serverless_1 = require("@neondatabase/serverless");
const schema = __importStar(require("./schema"));
exports.client = new pg_1.Client({ connectionString: process.env.Database_URL, });
const DatabaseUrl = process.env.Database_URL;
if (!DatabaseUrl) {
    throw new Error("DatabaseUrl not set");
}
console.log("neon client creating");
const clienter = (0, serverless_1.neon)(DatabaseUrl);
console.log("neon client creating");
exports.db = (0, neon_http_1.drizzle)(clienter, { schema, logger: true });
const main = async () => {
    await exports.client.connect();
};
main().catch((err) => console.log(err));
//const db = drizzle(client, { schema,logger:true});
exports.default = exports.db;
