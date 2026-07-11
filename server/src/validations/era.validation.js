import { z } from "zod";

export const createEraSchema = z.object({
  name: z.string().min(2),

  slug: z.string().min(2),

  duration: z.string().min(1),

  climate: z.string().min(1),

  description: z.string().min(10),

  bannerImage: z.string().optional().or(z.literal("")),
});

export const updateEraSchema = createEraSchema.partial();