import { z } from 'zod';

import { BaseResourceSchema, extractId, toIdArray } from './base';

export const FilmSchema = BaseResourceSchema.extend({
  title: z.string(),
  episode_id: z.number(),
  opening_crawl: z.string(),
  director: z.string(),
  producer: z.string(),
  release_date: z.iso.date(),
  characters: toIdArray,
  planets: toIdArray,
  starships: toIdArray,
  vehicles: toIdArray,
  species: toIdArray,
}).transform((data) => ({
  ...data,
  id: extractId(data.url),
}));