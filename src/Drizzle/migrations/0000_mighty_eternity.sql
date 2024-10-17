CREATE TABLE IF NOT EXISTS "cardholder" (
	"user_id" serial PRIMARY KEY NOT NULL,
	"full_name" varchar NOT NULL,
	"cardNumbers" integer NOT NULL,
	"month" integer NOT NULL,
	"Year" integer NOT NULL,
	"CVV" integer NOT NULL
);
