import { z } from "zod";

import { BaseResourceSchema, extractId, toId, toIdArray } from "./base";

export const PeopleSchema = BaseResourceSchema.extend({
  name: z.string(),
  birth_year: z.string(),
  eye_color: z.string(),
  gender: z.string(),
  hair_color: z.string(),
  height: z.string(),
  mass: z.string(),
  skin_color: z.string(),
  homeworld: toId,
  films: toIdArray,
  species: toIdArray,
  starships: toIdArray,
  vehicles: toIdArray,
}).transform((data) => ({
  ...data,
  id: extractId(data.url),
}));
