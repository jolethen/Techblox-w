import Link from "next/link";

export default function Home() {
  return (
    <main className="home cyber-bg">
      <div className="hero">
        <h1 className="glow-title">⚙️ TECHBLOX</h1>
        <p className="subtitle">
          The official cyber-interface for the TechBlox universe.
          PvP. Technology. MMORPG evolution.
        </p>

        <Link href="/docs" className="cyber-button">
          ENTER THE WIKI →
        </Link>

        <div className="updates-panel">
          <h2>🛰 MMORPG Development Channel</h2>
          <p>
            Follow the evolution of the upcoming MMORPG version of TechBlox.
            Dev logs, system rewrites, combat changes, world expansion updates
            and more.
          </p>

          <a
            href="https://discord.gg/YOUR_LINK_HERE"
            target="_blank"
            className="update-link"
          >
            Join Updates Channel →
          </a>
        </div>
      </div>
    </main>
  );
    }
