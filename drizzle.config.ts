import { defineConfig } from "drizzle-kit";

if (!process.env.DATABASE_URL) {
  // Skip config if no DATABASE_URL
  export default {};
} else {
  export default defineConfig({
    out: "./migrations",
    schema: "./shared/schema.ts",
    dialect: "postgresql",
    dbCredentials: {
      url: process.env.DATABASE_URL,
    },
  });
}
