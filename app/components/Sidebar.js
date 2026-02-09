"use client";

import { useState } from "react";
import Link from "next/link";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile top bar */}
      <div className="mobile-bar">
        <button onClick={() => setOpen(true)}>☰</button>
        <span>TechBlox Wiki</span>
      </div>

      {/* Overlay (mobile only) */}
      {open && <div className="overlay" onClick={() => setOpen(false)} />}

      {/* Sidebar */}
      <aside className={`sidebar ${open ? "open" : ""}`}>
        <h2>📘 TechBlox</h2>

        <nav onClick={() => setOpen(false)}>
          <Link href="/docs">Introduction</Link>
          <Link href="/docs/rules">Rules</Link>
          <Link href="/docs/commands">Commands</Link>
          <Link href="/docs/guns">Guns & PvP</Link>
        </nav>
      </aside>
    </>
  );
    }
        
