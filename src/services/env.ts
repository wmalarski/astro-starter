import { z } from "zod";

const envSchema = z.object({
  DASHBOARD_ENDPOINT: z.string().url(),
  GRAPHQL_API_ENDPOINT: z.string().url(),
});

export const env = envSchema.parse(import.meta.env);
