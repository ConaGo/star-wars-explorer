import z from 'zod';
import { apiRequest } from './apiClient';
import { PaginatedResponseSchema } from './schemas/base';
import { PeopleSchema } from './schemas/people';
import { PlanetSchema } from './schemas/planet';

export const swapi = {
  people: {
    byId: async (id: string) => {
      return apiRequest(`people/${id}/`, PeopleSchema);
    },
  },

  planets: {
    byId: async (id: string) => {
      return apiRequest(`planets/${id}/`, PlanetSchema);
    }
  },
  /**
   * Statically fetch all pages for a resource and inject IDs.
   * T is the Zod Schema (e.g., PeopleSchema)
   */
  fetchAll: async <T extends z.ZodType<Record<string, any>>>(
    endpoint: string,
    schema: T
  ): Promise<(z.infer<T>)[]> => {
    let allResults: z.infer<T>[] = [];
    let nextPageUrl: string | null = `https://swapi.py4e.com/api/${endpoint}/?page=1`;

    while (nextPageUrl) {
      // Clean URL to get the endpoint path
      const path: string = nextPageUrl.split('api/').pop() || '';
      const data = await apiRequest(path, PaginatedResponseSchema(schema));

      allResults = [...allResults, ...data.results];
      nextPageUrl = data.next;
    }

    // Map and inject IDs
    return allResults.map((item) => ({
      ...item,
      id: item.url.split('/').filter(Boolean).pop() || '',
    }));
  }
};