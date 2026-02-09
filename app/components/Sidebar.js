import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>📘 TechBlox</h2>

      <nav>
        <Link href="/docs">Introduction</Link>
        <Link href="/docs/rules">Rules</Link>
        <Link href="/docs/commands">Commands</Link>
        <Link href="/docs/guns">Guns & PvP</Link>
      </nav>
    </aside>
  );
    }
