
import { pgTable,serial,integer,timestamp, unique
} from "drizzle-orm/pg-core";

import { users } from "./userModel.js";
import { posts } from "./postModel.js";

export const likes = pgTable("likes", {
    id: serial("id").primaryKey(),
    userId: integer("user_id").notNull().references(() => users.id),
    postId: integer("post_id").notNull().references(() => posts.id),
    createdAt: timestamp("created_at").defaultNow().notNull(),

}, (table) => [
    unique().on(table.userId, table.postId)
]);
