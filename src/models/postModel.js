
import {
    pgTable,
    serial,
    text,
    timestamp,
    integer
} from "drizzle-orm/pg-core";

import { users } from "./userModel.js";

export const posts = pgTable("posts", {
    id: serial("id").primaryKey(),
    content: text("content").notNull(),
    userId: integer("user_id").notNull().references(() => users.id),
    createdAt: timestamp("created_at") .defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow() .notNull(),
});
