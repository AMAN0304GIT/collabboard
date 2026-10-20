import {
  Eraser,
  Hand,
  MousePointer2,
  Pencil,
  Square,
  StickyNote,
  Type,
} from 'lucide-react'

const tools = [
  { label: 'Select', Icon: MousePointer2 },
  { label: 'Hand', Icon: Hand },
  { label: 'Draw', Icon: Pencil },
  { label: 'Shapes', Icon: Square },
  { label: 'Text', Icon: Type },
  { label: 'Sticky note', Icon: StickyNote },
  { label: 'Eraser', Icon: Eraser },
]

export default function App() {
  return (
    <div className="flex h-full flex-col">
      <header className="flex h-12 items-center justify-between border-b border-line bg-surface px-4">
        <span className="font-semibold">Untitled board</span>
        <span className="text-sm text-ink-muted">Not saved yet</span>
      </header>

      <div className="flex min-h-0 flex-1">
        <nav
          aria-label="Tools"
          className="flex w-14 flex-col items-center gap-1 border-r border-line bg-surface py-2"
        >
          {tools.map(({ label, Icon }) => (
            <button
              key={label}
              type="button"
              aria-label={label}
              title={label}
              className="rounded-md p-2 text-ink-muted hover:bg-surface-muted hover:text-ink"
            >
              <Icon size={20} />
            </button>
          ))}
        </nav>

        <main className="flex flex-1 items-center justify-center">
          <p className="text-ink-muted">Canvas goes here (Session 5)</p>
        </main>
      </div>
    </div>
  )
}