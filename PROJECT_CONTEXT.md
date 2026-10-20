# CollabBoard — Project Context

> Resume-here file. Keep it short. Update at the end of every session.

## Purpose
CollabBoard is a real-time collaborative whiteboard (portfolio-grade, full-stack). Built one small, tested, pushed milestone per session.

## Current status
- **Current session:** 1 — Architecture, roadmap, design spec (docs only)
- **Branch:** `main` (update after first push)
- **Last verified commit:** _none yet_
- **Next session objective:** Session 2 — scaffold frontend (Vite + React + TS strict) and backend (NestJS) in a monorepo layout

## Stack (approved)
- **Frontend:** React, TypeScript (strict), Vite, Tailwind CSS, shadcn/ui, Lucide, React Konva, TanStack Query (when useful)
- **Backend:** Node.js, TypeScript, NestJS, REST + WebSockets (Socket.IO candidate), PostgreSQL, Prisma, class-validator, Swagger
- **Collaboration:** Yjs (document state) + transport via WebSocket; Redis only when justified
- **Quality:** Vitest, React Testing Library, Jest (NestJS), Playwright, ESLint, Prettier, Docker Compose, GitHub Actions

## Architecture decisions that must not be reversed accidentally
1. Modular monolith; frontend and backend separated.
2. **Single source of truth for board objects = Yjs document.** No parallel Redux/Zustand copy of the same data.
3. Persistent shared state (Yjs) is separate from ephemeral state (cursors, presence).
4. Authorization is enforced on the backend (REST and WebSocket), never only in the UI.
5. No major tech change without explanation and approval.

## Repository structure (planned, created in Session 2)
```
collabboard/
  apps/web/        # React + Vite
  apps/api/        # NestJS
  docs/architecture/
  docs/design/
  PROJECT_CONTEXT.md
  ROADMAP.md
```
(Whether to use npm workspaces or pnpm is decided in Session 2.)

## Feature status
- Implemented: _nothing yet_
- Partially implemented: _nothing yet_
- Planned: everything in ROADMAP.md

## Known bugs
_None._

## Commands
_Added as scaffolding lands (Session 2+)._

## Environment variables
_Names only, no values. Added when introduced (`.env.example`)._
