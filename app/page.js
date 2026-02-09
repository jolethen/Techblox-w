import Link from "next/link";

export default function Home() {
  return (
    <main className="home">
      <h1>⚙️ TechBlox Wiki</h1>
      <p>Official documentation for the TechBlox server.</p>

      <Link href="/docs">
        <button>Open Wiki →</button>
      </Link>
    </main>
  );
    }
