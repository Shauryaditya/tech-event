import { sqliteTable, text } from 'drizzle-orm/sqlite-core';
export const registrations = sqliteTable('registrations', {id:text('id').primaryKey(),name:text('name').notNull(),email:text('email').notNull(),phone:text('phone').notNull(),institution:text('institution').notNull(),events:text('events').notNull(),createdAt:text('created_at').notNull()});
