import { relations } from "drizzle-orm";
import { pgTable, serial, varchar, text, integer, decimal, date, timestamp, boolean } from "drizzle-orm/pg-core";



// Cardholder table
export const CardholderTable = pgTable ("cardholder",{
    user_id: serial("user_id").primaryKey(),
    full_name: varchar("full_name").notNull(),
    CardNumbers:varchar("cardNumbers", {length:16}).notNull(),
    month: integer("month").notNull(),
    Year: integer("Year").notNull(),
    CVV: integer("CVV").notNull()
}
    
);



// Types
export type TIUser = typeof CardholderTable.$inferInsert;
export type TSUser = typeof CardholderTable.$inferSelect;

