import { useState } from "react";

/**
 * Self-contained settings widget — replaces the design-host "Tweaks" panel so
 * the project runs standalone. A floating button toggles a small panel with
 * theme, density, and section-order controls. All state is owned by <App> and
 * persisted to localStorage there.
 */
export default function Controls({
  open,
  setOpen,
  theme,
  setTheme,
  density,
  setDensity,
  order,
  move,
  resetOrder,
}) {
  return (
    <>
      <button
        className="controls-fab"
        onClick={() => setOpen((o) => !o)}
        aria-label="Open settings"
        title="Settings"
      >
        {open ? "✕" : "⚙"}
      </button>

      {open && (
        <div className="controls-panel" role="dialog" aria-label="Settings">
          <div className="controls-head">Settings</div>

          <div className="controls-group">
            <div className="controls-label">Theme</div>
            <div className="seg">
              {["light", "dark"].map((v) => (
                <button
                  key={v}
                  className={theme === v ? "on" : ""}
                  onClick={() => setTheme(v)}
                >
                  {v[0].toUpperCase() + v.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="controls-group">
            <div className="controls-label">Density</div>
            <div className="seg">
              {["compact", "cozy", "spacious"].map((v) => (
                <button
                  key={v}
                  className={density === v ? "on" : ""}
                  onClick={() => setDensity(v)}
                >
                  {v[0].toUpperCase() + v.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="controls-group">
            <div className="controls-label">Section order</div>
            <div className="order-list">
              {order.map((id, i) => (
                <div className="order-row" key={id}>
                  <span className="order-name">
                    {i + 1}. {id}
                  </span>
                  <span className="order-btns">
                    <button
                      onClick={() => move(id, -1)}
                      disabled={i === 0}
                      title="Move up"
                    >
                      ↑
                    </button>
                    <button
                      onClick={() => move(id, 1)}
                      disabled={i === order.length - 1}
                      title="Move down"
                    >
                      ↓
                    </button>
                  </span>
                </div>
              ))}
              <button className="order-reset" onClick={resetOrder}>
                Reset order
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
