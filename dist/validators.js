"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const zod_1 = require("zod");
exports.userSchema = zod_1.z.object({
    user_id: zod_1.z.number().default(0),
    full_name: zod_1.z.string(),
    CardNumbers: zod_1.z.number(),
    month: zod_1.z.number(),
    Year: zod_1.z.number(),
    CVV: zod_1.z.number()
});
