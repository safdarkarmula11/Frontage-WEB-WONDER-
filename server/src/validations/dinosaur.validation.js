import { z } from "zod";

// Note: this data arrives as multipart/form-data (because of the image
// upload), so every field lands in req.body as a string — even numbers
// and booleans. z.coerce.* converts them safely; the image itself is
// handled separately by multer (req.file), not validated here.

export const createDinosaurSchema = z.object({
  eraId: z.coerce.number().int().positive(),

  name: z.string().min(2),

  scientificName: z.string().min(2),

  diet: z.string().min(1),

  height: z.string().min(1),

  length: z.string().min(1),

  weight: z.string().min(1),

  speed: z.string().min(1),

  habitat: z.string().min(1),

  description: z.string().min(10),

  isFeatured: z.coerce.boolean().optional(),

  model3d: z.string().optional().or(z.literal("")),

  model3dCreditName: z.string().optional().or(z.literal("")),

  model3dCreditUrl: z.string().optional().or(z.literal("")),

  model3dLicense: z.string().optional().or(z.literal("")),
});

export const updateDinosaurSchema = createDinosaurSchema.partial();