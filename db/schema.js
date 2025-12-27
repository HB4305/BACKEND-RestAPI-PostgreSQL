import { boolean } from 'drizzle-orm/gel-core';
import { pgTable, integer, varchar, text, numeric } from 'drizzle-orm/pg-core';




export const chefs = pgTable('chefs', {
    chefId: integer('chef_id').primaryKey(),
    name: varchar('name', { length: 256 }).notNull(),
    specialty: varchar('specialty', { length: 256 }),
    bio: text('bio', { length: 256 }),
});

export const categories = pgTable('categories', {
    categorieId: integer('category_id').primaryKey(),
    name: varchar('name', { length: 256 }).notNull().unique(),

});

export const dishes = pgTable('dishes', {
    dishId: integer('dish_id').primaryKey(),
    dishName: varchar('dish_name', { length: 256 }).notNull(),
    description: text('description', { length: 256 }).notNull(),
    imageUrl: varchar('image_url', { length: 256 }),
    chefId: integer('chef_id'),
    categoryId: integer('category_id'),
    rating: numeric('rating'),
    totalReviews: integer('total_reviews'),
    preparationTimeMinutes: integer('preparation_time_minutes').notNull(),
    servingSize: integer('serving_size').notNull(),
    currentPrice: numeric('current_price').notNull(),
    originalPrice: numeric('original_price').notNull(),
    isFeatured: boolean('is_featured'),
});
