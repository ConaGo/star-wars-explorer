import { z } from 'zod';

import { BaseResourceSchema } from './base';

export const PeopleSchema = BaseResourceSchema.extend({
  name: z.string(),
  birth_year: z.string(),
  eye_color: z.string(),
  gender: z.string(),
  hair_color: z.string(),
  height: z.string(),
  mass: z.string(),
  skin_color: z.string(),
  homeworld: z.url(),
  films: z.array(z.url()),
  species: z.array(z.url()),
  starships: z.array(z.url()),
  vehicles: z.array(z.url()),
});