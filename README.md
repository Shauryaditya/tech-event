# Matrix Unbounded

Advantage Academic Centre technology and AI event website with six competitions and registration.

## Deploy on Vercel

1. Import `Shauryaditya/tech-event`, branch `main`, with the repository root as Root Directory.
2. Use the **Next.js** framework preset, `npm run build`, and `.next` output directory. Remove any old Vite, vinext, or `dist` overrides. `vercel.json` supplies the correct framework and build settings.
3. Deploy the latest commit. The homepage can build and load before a database is connected.

## Enable registration storage

1. In Vercel, open your project's **Storage / Marketplace** and connect a Postgres provider such as Neon. Alternatively, use an existing hosted Postgres database.
2. Add its pooled Postgres connection string to the project's **Environment Variables** as `DATABASE_URL`. `POSTGRES_URL` is also supported. Keep the provider's SSL parameters. Enable the variable for the environments where registrations should work. Never prefix it with `NEXT_PUBLIC_` or commit the value to Git.
3. Open the database provider's SQL editor. Run `db/postgres/001_registrations.sql` once to create the registrations table.
4. Redeploy after setting the environment variable. Submit a test registration and verify it in the provider's table editor. Remove your test row afterward if desired.

The API returns success only after the database accepts the entry. If the connection or table is missing, it returns HTTP 503 and the form asks the participant to try again. There is no admin dashboard or email delivery yet.

The existing private Sites deployment uses its separate Cloudflare D1 database. Existing D1 records are not automatically copied to Postgres. Local tests and production databases should use separate connection strings.

## Local development

Use Node.js 22.13 or newer, run `npm ci`, copy `.env.example` to `.env.local`, set your test database connection string, and run `npm run dev`. The default build/start commands use Next.js.

## Existing Sites hosting

The original Cloudflare deployment path is retained as `npm run dev:sites` and `npm run build:sites`. Its Vite configuration selects the D1 registration adapter. Vercel uses the Postgres adapter. Do not use the Sites build output for Vercel.
