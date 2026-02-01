import { z } from 'zod';

import { BaseResourceSchema } from './base';

export const FilmSchema = BaseResourceSchema.extend({
  title: z.string(),
  episode_id: z.number(),
  opening_crawl: z.string(),
  director: z.string(),
  producer: z.string(),
  release_date: z.iso.date(),
  characters: z.array(z.url()),
  planets: z.array(z.url()),
  starships: z.array(z.url()),
  vehicles: z.array(z.url()),
  species: z.array(z.url()),
});