import { createContext, useContext } from "react";

/**
 * Context that lets section headers expose up/down reorder buttons while the
 * Controls panel is open. `move(id, dir)` is provided by <App>.
 */
export const ReorderCtx = createContext(null);

export default function SectionReorder({ id }) {
  const ctx = useContext(ReorderCtx);
  if (!ctx) return null;
  return (
    <div className="reorder-handle">
      <button onClick={() => ctx.move(id, -1)} title="Move up">
        ↑ up
      </button>
      <button onClick={() => ctx.move(id, 1)} title="Move down">
        ↓ down
      </button>
    </div>
  );
}
