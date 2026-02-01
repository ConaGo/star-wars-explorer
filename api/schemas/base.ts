import { z } from 'zod';

// Helper to extract ID from SWAPI URL
// e.g., "https://swapi.dev/api/people/1/" -> "1"
// filter(Boolean) removes empty strings from split results
export const extractId = (url: string) => url.split('/').filter(Boolean).pop() || '';

export const toId = z.url().transform(extractId);
export const toIdArray = z.array(z.url()).transform(urls => urls.map(extractId));

// Base schema shared by all resources
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