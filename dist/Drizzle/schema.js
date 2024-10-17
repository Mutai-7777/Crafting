"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardholderTable = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
// Cardholder table
exports.CardholderTable = (0, pg_core_1.pgTable)("cardholder", {
    user_id: (0, pg_core_1.serial)("user_id").primaryKey(),
    full_name: (0, pg_core_1.varchar)("full_name").notNull(),
    CardNumbers: (0, pg_core_1.varchar)("cardNumbers").notNull(),
    month: (0, pg_core_1.integer)("month").notNull(),
    Year: (0, pg_core_1.integer)("Year").notNull(),
    CVV: (0, pg_core_1.integer)("CVV").notNull()
});
