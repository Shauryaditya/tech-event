CREATE TABLE IF NOT EXISTS registrations (
  id text PRIMARY KEY,
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  institution text NOT NULL,
  events text NOT NULL,
  created_at timestamptz NOT NULL
);
