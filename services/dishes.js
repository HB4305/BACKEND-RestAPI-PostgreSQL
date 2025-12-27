import { eq } from 'drizzle-orm';
import db from '../db/index.js';
import { categories, dishes, chefs } from '../db/schema.js';

const service = {
    create: async function (dish) {
        const result = await db.insert(dishes).values(dish).returning();
        return result[0];
    },
    findByCategoryId: async function (categoryId) {
        const result = await db.select().from(dishes).where(eq(dishes.categoryId, categoryId)).fullJoin(categories, eq(categories.categorieId, categoryId)).fullJoin(chefs, eq(chefs.chefId, dishes.chefId));
        return result[0];
    },

    findByChefId: async function (chefId) {
        const result = await db.select().from(dishes).where(eq(dishes.chefId, chefId)).fullJoin(categories, eq(categories.categorieId, dishes.categoryId)).fullJoin(chefs, eq(chefs.chefId, dishes.chefId));
        return result[0];
    },

    findBy: async function (categoryId, chefId) {
        const result = await db.select().from(dishes).where(eq(dishes.chefId, chefId), eq(dishes.categoryId, categoryId)).fullJoin(categories, eq(categories.categorieId, dishes.categoryId)).fullJoin(chefs, eq(chefs.chefId, dishes.chefId));
        return result[0];

    }
}
export default service;