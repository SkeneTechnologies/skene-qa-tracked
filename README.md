# skene-qa-tracked

Synthetic test repository for Skene's QA runs (plan row LQ-11 in skene-cloud-rebuild).
It is instrumented with PostHog: `signup_completed`, `project_created` and `report_exported`
events, an `identify` call, and an `invoices.paid_at` column. The contents match the
tracking-parity corpus base, so the tracking check's results are known in advance.

No real keys or data. Do not use it for anything else.
L4-P1 first (to be superseded) 2026-10-14T10:33:40Z
L4-P1 second 2026-10-14T10:33:46Z
