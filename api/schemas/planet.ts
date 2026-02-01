import { z } from 'zod';

import { BaseResourceSchema, extractId, toIdArray } from './base';

export const PlanetSchema = BaseResourceSchema.extend({
  name: z.string(),
  diameter: z.string(),
  rotation_period: z.string(),
  orbital_period: z.string(),
  gravity: z.string(),
  population: z.string(),
  climate: z.string(),
  terrain: z.string(),
  surface_water: z.string(),
  residents: toIdArray,
  films: toIdArray,
}).transform((data) => ({
  ...data,
  id: extractId(data.url),
}));