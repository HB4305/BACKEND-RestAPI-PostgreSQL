import z from 'zod';
import { fa } from 'zod/locales';
// Zod schema for validation
export default z.object({
    dishName: z.string().max(500, 'max 500'),
    description: z.string().min(50, 'min 50'),
    imageUrl: z.url().max(1000, 'max 1000'),
    chefId: z.number(),
    categoryId: z.number(),
    rating: z.number().min(0, 'rating min >= 0').max(5, 'rating max <= 5'),
    totalReviews: z.number().min(0, 'total reviews >= 0'),
    preparationTimeMinutes: z.number().min(1, 'must >=1'),
    servingSize: z.number().min(1, 'must >= 1'),
    currentPrice: z.number().min(0, "must >= 0"),
    originalPrice: z.number().min(0, "must >= current price"),
    isFeatured: z.boolean().default(false),
});

