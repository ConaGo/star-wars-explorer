import { z } from 'zod';

// Shared attributes for all resources
export const BaseResourceSchema = z.object({
  url: z.url(),
  created: z.iso.datetime(),
  edited: z.iso.datetime(),
});

// Wrapper for paginated list responses
export const PaginatedResponseSchema = <T extends z.ZodTypeAny>(itemSchema: T) =>
  z.object({
    count: z.number(),
    next: z.url().nullable(),
    previous: z.url().nullable(),
    results: z.array(itemSchema),
  });