# CollabBoard — Roadmap

Status values: planned · in progress · blocked · completed.
Rule: one session = one milestone = working code + tests + commit/push + confirmation. Incomplete milestones roll into another session; never mark complete to keep the schedule.

| # | Phase | Milestone | Acceptance (summary) | Status |
|---|-------|-----------|----------------------|--------|
| 1 | Foundation | Repo setup, architecture, roadmap, design spec | Docs committed and pushed; repo connected to GitHub | in progress |
| 2 | Foundation | Frontend + backend scaffolding | Both apps start; strict TS; lint + typecheck pass | planned |
| 3 | Foundation | App shell, design tokens, nav, health endpoint, basic checks | Tokens applied; `/health` returns OK; first tests pass | planned |
| 4 | Canvas | Viewport and rendering foundation | Konva stage renders at correct size, resizes | planned |
| 5 | Canvas | Pan, zoom, navigation controls | Wheel/trackpad zoom, pan, zoom %, fit | planned |
| 6 | Canvas | Selection and movement | Click/drag select and move objects | planned |
| 7 | Canvas | Basic shapes and freehand drawing | Rect, circle, line, pen tool | planned |
| 8 | Canvas | Canvas object model + editing tests | Typed object schema with stable IDs; tests | planned |
| 9 | Backend | PostgreSQL, Prisma, migrations | Compose DB up; first migration applied | planned |
| 10 | Backend | Board APIs and validation | CRUD endpoints, DTO validation, Swagger | planned |
| 11 | Backend | Save and restore board state | Reload restores board | planned |
| 12 | Auth | Registration and login | Hashed passwords, tokens, tests | planned |
| 13 | Auth | Protected routes, board ownership | Backend ownership checks | planned |
| 14 | Dashboard | Board dashboard and CRUD UI | List/create/rename/delete with states | planned |
| 15 | Realtime | Collaboration architecture and protocol design | ADR + protocol doc | planned |
| 16 | Realtime | WebSocket lifecycle and authorization | Unauthorized joins rejected | planned |
| 17 | Realtime | Yjs integration and shared state | Canvas objects live in Y.Doc | planned |
| 18 | Realtime | Synchronize changes between users | Two browsers stay in sync | planned |
| 19 | Realtime | Live cursors and presence | Ephemeral awareness, throttled | planned |
| 20 | Realtime | Persistence, reconnects, late join | Survives refresh/restart/offline blip | planned |
| 21 | Realtime | Concurrent-editing and failure tests | Automated convergence tests | planned |
| 22 | Editing | Text and sticky notes | | planned |
| 23 | Editing | Connectors, arrows, shortcuts | | planned |
| 24 | Editing | Undo/redo, selection polish | | planned |
| 25 | Sharing | Invitations and roles | Owner/editor/viewer enforced server-side | planned |
| 26 | Reliability | Authorization tests, autosave resilience | | planned |
| 27 | Reliability | E2E tests and accessibility | | planned |
| 28 | Delivery | Docker Compose and local dev docs | | planned |
| 29 | Delivery | CI, deployment, production config | | planned |
| 30 | Delivery | Security review, README, screenshots, demo | | planned |

## Known risks
- Yjs ↔ Konva binding is the hardest part: keep object model flat and ID-keyed (Y.Map of Y.Maps) from Session 8 so Session 17 isn't a rewrite.
- Persistence of Yjs updates (batching + snapshots) needs care to avoid losing acknowledged updates.
- Undo/redo in collaborative mode must be per-user (Y.UndoManager), not global.
- Scope creep: comments, templates, export, uploads, version history are post-30 extras.
