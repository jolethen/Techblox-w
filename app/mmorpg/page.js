export default function MMORPGPage() {
  const updates = [
    {
      version: "0.1.0",
      date: "March 2026",
      title: "MMORPG Core Framework Started",
      content:
        "Base architecture for the MMORPG system has begun. Combat, leveling, and world instancing systems are being designed."
    },
    {
      version: "0.1.1",
      date: "March 2026",
      title: "Combat Prototype",
      content:
        "Initial ability-based combat prototype implemented. Testing cooldown systems and damage scaling."
    },
    {
      version: "0.2.0",
      date: "Coming Soon",
      title: "World Expansion Phase 1",
      content:
        "New large-scale persistent region planned. Includes faction territories and dynamic PvP zones."
    }
  ];

  return (
    <main className="mmorpg-page">
      <h1 className="mmorpg-title">🛰 TechBlox MMORPG Development</h1>
      <p className="mmorpg-subtitle">
        Live development logs for the MMORPG evolution of TechBlox.
      </p>

      <div className="update-feed">
        {updates.map((update, index) => (
          <div key={index} className="update-card">
            <div className="update-header">
              <span className="version">v{update.version}</span>
              <span className="date">{update.date}</span>
            </div>

            <h2>{update.title}</h2>
            <p>{update.content}</p>
          </div>
        ))}
      </div>
    </main>
  );
          }
