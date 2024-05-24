import { z } from "zod";

export const carSchema = z.object({
  id: z.string(),
  name: z.string().min(1),
  description: z.string(),
  brand: z.string().min(1),
  year: z.number().min(1).positive(),
  km: z.number().min(1).positive(),
});

export const carCreateSchema = carSchema.omit({ id: true });

export const carPatchSchema = carCreateSchema.partial();

export type TCarCreate = z.infer<typeof carCreateSchema>;

export type TCarPatch = z.infer<typeof carPatchSchema>;