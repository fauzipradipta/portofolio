import { useEffect, useState } from "react";

/**
 * Dark "curtain" that lifts away on first paint.
 */
export default function LoadCurtain() {
  const [phase, setPhase] = useState("closed"); // closed -> lifting -> done

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("lifting"), 80);
    const t2 = setTimeout(() => setPhase("done"), 1400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div className={`load-curtain ${phase}`} aria-hidden="true">
      <div className="lc-row top">
        <span>Portfolio</span>
        <span>2026</span>
      </div>
      <div className="lc-mark">SFP</div>
      <div className="lc-row bot">
        <span>Syawadhilah Fauzi Pradipta</span>
        <span>Loading…</span>
      </div>
    </div>
  );
}
