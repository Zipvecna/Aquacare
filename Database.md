# Database Guide

## Current status

This project does not currently use a database or backend API. Public company and product data lives in `js/data.js` as the browser-global `AQUA_DATA` object. The catalog reads that data directly. The contact widget does not submit an enquiry to Aqua Care's server; it prepares a message for the visitor to send through WhatsApp or email.

Do not add database credentials, private keys, or privileged API tokens to HTML or browser JavaScript. Anything shipped to a browser is public.

## When to add a database

Keep the current data file while the catalog is relatively small and changes can be published with the website. Consider a database only when there is an approved requirement such as staff-managed catalog content, server-side enquiry storage, accounts, or order workflows. First decide who can access the data, why it is needed, and its retention period. See `phases.md` for the gated rollout steps.

## Suggested starting model

If a future catalog backend is approved, PostgreSQL is a reasonable relational default. Preserve the stable product `id` values used in `js/data.js`; they can become text primary keys. The following is a design sketch, not a migration to run against a live system:

```sql
CREATE TABLE chemicals (
  id text PRIMARY KEY,
  name text NOT NULL,
  trade_name text NOT NULL,
  formula text NOT NULL DEFAULT '',
  category text NOT NULL,
  category_name text NOT NULL DEFAULT '',
  purpose text NOT NULL DEFAULT '',
  application text NOT NULL DEFAULT '',
  dosage_range text NOT NULL DEFAULT '',
  badge text NOT NULL DEFAULT '',
  safety text NOT NULL DEFAULT '',
  properties jsonb NOT NULL DEFAULT '{}'::jsonb,
  tds_link text NOT NULL DEFAULT '',
  quote_action text NOT NULL DEFAULT '',
  is_published boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE chemical_packaging (
  chemical_id text NOT NULL REFERENCES chemicals(id) ON DELETE CASCADE,
  position integer NOT NULL,
  description text NOT NULL,
  PRIMARY KEY (chemical_id, position)
);

CREATE TABLE chemical_specs (
  chemical_id text NOT NULL REFERENCES chemicals(id) ON DELETE CASCADE,
  position integer NOT NULL,
  parameter text NOT NULL,
  specification text NOT NULL,
  PRIMARY KEY (chemical_id, position)
);
```

The `packaging` and `specs` columns in the browser data are arrays, so separate tables retain their order and allow future filtering. Keep flexible, rarely queried `properties` as JSONB initially; promote frequently searched fields to typed columns when requirements justify it. Add a category table only if categories need their own editable metadata or relationships.

## Enquiries and personal information

Do not create an enquiry table just because a database is introduced. If server-side enquiry storage becomes a requirement, document the purpose, minimum required fields, access roles, retention/deletion schedule, and privacy-notice changes first. Protect the API with server-side validation, rate limiting, access controls, encrypted transport, and secure secret management. Avoid storing message contents or contact details in application logs.

## Migration and operations

- Create versioned migrations and test them on a disposable development database first.
- Export and compare current `AQUA_DATA.chemicals` records before migration; verify ids, order-sensitive arrays, and displayed output.
- Keep a backup and a tested restore procedure before production changes.
- Use parameterized queries through a maintained server-side database library; never assemble SQL from user input.
- Apply least-privilege database roles and keep production credentials in the hosting provider's secret store.
- Add API and migration tests before switching the public catalog from `js/data.js`.

No database package, connection string, schema migration, or API should be considered installed by this guide.