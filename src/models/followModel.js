
import {pgTable, serial,integer,timestamp,unique
} from "drizzle-orm/pg-core";
import { users } from "./userModel.js";

export const follows = pgTable("follows", {
    id: serial("id").primaryKey(),

    followerId: integer("follower_id").notNull().references(() => users.id),

    followingId: integer("following_id").notNull().references(() => users.id),

    createdAt: timestamp("created_at").defaultNow().notNull(),

}, (table) => [
    unique().on(table.followerId, table.followingId)
]);
