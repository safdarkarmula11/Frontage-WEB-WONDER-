import { z } from "zod";

export const createDinosaurSchema = z.object({
  eraId: z.number().int().positive(),

  name: z.string().min(2),

  scientificName: z.string().min(2),

  diet: z.string(),

  height: z.string(),

  length: z.string(),

  weight: z.string(),

  speed: z.string(),

  habitat: z.string(),

  image: z.string(),

  description: z.string().min(10),

  isFeatured: z.boolean().optional(),
});

export const updateDinosaurSchema = createDinosaurSchema.partial();