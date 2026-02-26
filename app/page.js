import Link from "next/link";

export default function Home() {
  return (
    <main className="home">
      <div className="hero">
        <h1>⚙️ TechBlox Wiki</h1>
        <p>
          Official documentation for the TechBlox server.
          Learn rules, systems, PvP mechanics and more.
        </p>

        <Link href="/docs" className="enter-button">
          Enter the Wiki →
        </Link>
      </div>
    </main>
  );
}
