import { z } from "zod";

// Arrives as multipart/form-data alongside the image, so numeric
// fields are coerced from strings.

export const createFossilFindSchema = z.object({
  note: z.string().min(10, "Tell us a bit more about your find (10+ characters)."),

  location: z.string().optional().or(z.literal("")),

  dinosaurId: z
    .union([z.coerce.number().int().positive(), z.literal("")])
    .optional(),
});