import { z } from 'zod';
import { PeopleSchema } from "./people";
import { FilmSchema } from "./film";
import { PlanetSchema } from "./planet";
import { PaginatedResponseSchema } from './base';


export type People = z.infer<typeof PeopleSchema>;
export type Film = z.infer<typeof FilmSchema>;
export type Planet = z.infer<typeof PlanetSchema>;

export type PeopleResponse = z.infer<ReturnType<typeof PaginatedResponseSchema<typeof PeopleSchema>>>;
export type FilmResponse = z.infer<ReturnType<typeof PaginatedResponseSchema<typeof FilmSchema>>>;
export type PlanetResponse = z.infer<ReturnType<typeof PaginatedResponseSchema<typeof PlanetSchema>>>;