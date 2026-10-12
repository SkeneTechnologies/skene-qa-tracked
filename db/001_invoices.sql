create table public.invoices (
  id bigint generated always as identity primary key,
  workspace_id uuid not null,
  amount_cents integer not null,
  paid_at timestamptz
);
