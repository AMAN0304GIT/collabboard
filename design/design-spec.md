# Design Specification — Editorial Minimal

## Principles
Canvas is visually dominant. Calm, warm, typographic. Restrained borders/shadows, subtle motion (≤150 ms, respects `prefers-reduced-motion`). Visible keyboard focus everywhere.

## Color tokens
| Token | Light | Dark | Use |
|---|---|---|---|
| `--bg` | `#FAF6EE` (ivory) | `#171614` | App background |
| `--surface` | `#FFFFFF` | `#211F1C` | Panels, toolbars |
| `--surface-muted` | `#F2ECE0` | `#2A2723` | Hover, inputs |
| `--border` | `#E3DBCB` | `#3A362F` | Hairlines |
| `--text` | `#1F1E1C` (charcoal) | `#EDE8DE` | Primary text |
| `--text-muted` | `#6B655A` | `#A39C8E` | Secondary text |
| `--accent` | `#C2561C` (burnt orange) | `#E0773A` | Fills, active tool, large text |
| `--accent-strong` | `#A8430F` | `#F08A4B` | Small text/links, button fill |
| `--focus-ring` | `#A8430F` | `#F08A4B` | 2 px outline, 2 px offset |

Contrast values are estimates; verify with a checker in Session 3 before locking tokens. Rule of thumb: use `--accent-strong` for small text and button backgrounds.

## Typography
- Display/headings: a serif such as Fraunces or Instrument Serif.
- UI/body: Inter.
- Code/shortcuts: JetBrains Mono.
- Scale: 12 / 14 / 16 / 20 / 28 / 40 px.

## Spacing, radius, elevation
4 px base grid (4, 8, 12, 16, 24, 32). Radius 6 px controls, 10 px panels. One soft shadow level for floating toolbars; otherwise 1 px borders.

## Screen inventory
1. Landing/sign-in 2. Register 3. Dashboard (board grid, search, sort, empty/loading/error) 4. Board editor 5. Share dialog 6. Settings/profile 7. 404 / no-access.

## Board editor layout
Top bar (board name, save status, collaborator avatars, Share, account) · left toolbar (select, hand, pen, shapes, text, sticky, connector, eraser) · central canvas with subtle dot grid · contextual right properties panel (only when selection exists) · bottom-right zoom controls.

## Component hierarchy (initial)
`AppShell → TopBar | Toolbar | CanvasView | PropertiesPanel | ZoomControls`

## Sticky note palette (Session 22)
Ivory-yellow, peach, sage, sky, lilac, rose — muted so they sit well on the ivory background.
