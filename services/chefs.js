import { eq } from 'drizzle-orm';
import db from '../db/index.js';
import { chefs } from '../db/schema.js';

const service = {
    findAll: async function () {
        return await db.select().from(chefs);
    },
}

export default service;