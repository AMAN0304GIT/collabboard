# System Architecture Overview (Session 1 — target design, nothing built yet)

## High-level view
```
Browser (React + Konva + Y.Doc)
   │  REST (auth, boards, members)         │  WebSocket (Yjs updates + awareness)
   ▼                                        ▼
NestJS modular monolith
  ├─ auth        (users, sessions, guards)
  ├─ boards      (CRUD, membership, roles)
  ├─ collab      (WS gateway, Y.Doc rooms, authz on join)
  └─ persistence (Prisma → PostgreSQL)
                         │
                    PostgreSQL  (+ Redis later, only if multi-instance needs it)
```

## Source-of-truth strategy
- **Board content** (shapes, strokes, notes): the Yjs document. Clients render from it; edits write to it.
- **Ephemeral state** (cursors, selections-in-progress, presence): Yjs awareness / separate WS events. Never persisted.
- **Metadata** (board name, owner, members, roles, timestamps): PostgreSQL via REST.
- Socket.IO (or raw `ws`) is only the transport. Yjs handles merge/conflict resolution.

## Planned canvas object shape (finalized in Session 8)
Each object: `id` (stable UUID), `type`, geometry (`x, y, width, height, rotation`), style props, `zIndex`/ordering key, `createdBy`, `updatedAt`. Stored as `Y.Map<id, Y.Map>` so concurrent edits to different properties merge cleanly.

## Persistence plan (detailed in Sessions 15 and 20)
Append Yjs updates to a table in batches, periodically compact into a snapshot, rebuild the Y.Doc on room load. Open question: Socket.IO vs. `y-websocket`-style provider — decided in Session 15 with an ADR.

## Security principles
Server-side authz on every REST route and every WS join/operation; private boards by default; no public board endpoints without a scoped share token.

## Out of scope for now
Microservices, Kubernetes, Redis, horizontal scaling claims.
