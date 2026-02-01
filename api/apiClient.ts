import { z } from 'zod';

const BASE_URL = process.env.SWAPI_BASE_URL;

const RED_COLOR = '\x1b[31m';
const RESET_COLOR = '\x1b[0m';

export async function apiRequest<T>(
  endpoint: string,
  schema: z.ZodSchema<T>
): Promise<T> {
  const url = `${BASE_URL}/${endpoint}`;
  
  try {
    const response = await fetch(url, { cache: 'force-cache' });

    if (!response.ok) {
      throw new Error(`[API Error] ${response.status} at ${endpoint}`);
    }

    const json = await response.json();
    const result = schema.safeParse(json);

    if (!result.success) {
      const prettyError = z.prettifyError(result.error);
      
      console.error(`\n${RED_COLOR}[HOLOCRON DATA CORRUPTION]${RESET_COLOR} at ${endpoint}`);
      console.error(prettyError);
      
      throw new Error(`Build halted due to schema mismatch at ${endpoint}`);
    }

    return result.data;
  } catch (err) {
    if (err instanceof Error) {
      console.error(`${RED_COLOR}[Fatal Build Error]: ${err.message}${RESET_COLOR}`);
    }
    throw err;
  }
}