# Root Organization
This project uses a monorepo structure with npm workspaces.

## Structure
- `frontend/landing`: Main customer-facing website (React + Vite + Tailwind 4)
- `frontend/admin-crm`: Internal admin dashboard (React + Vite + Tailwind 4)
- `backend`: Express API with Prisma & TypeScript
- `shared`: Shared TypeScript types and utilities

## Getting Started
1. Run `npm install` in the root.
2. Generate Prisma client: `cd backend && npx prisma generate`
3. Start development servers:
   - `npm run dev:landing`
   - `npm run dev:admin`
   - `npm run dev:backend`
