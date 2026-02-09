export default function RulesPage() {
  const rules = [
    "Respect others. Harassment, hate speech, and discriminatory language are not tolerated.",
    "Keep everything PG-13. No NSFW content and keep language clean.",
    "No spamming messages, emojis, or excessive use of caps lock.",
    "No self-promotion without permission from staff.",
    "No trolling, discrimination, or harassment of any kind.",
    "No hacking, cheating, exploiting, or raiding. This results in a permanent ban.",
    "Do not share personal information (yours or others).",
    "Use common sense. Topics such as gore are not allowed.",
    "Follow Multicraft, Minetest, and Discord T.O.S and community guidelines.",
    "No griefing of any kind (protection grief, building grief, or water griefing).",
    "No NSFW or inappropriate builds or content.",
    "Respect staff decisions. Use reports, appeals, or tickets when needed.",
    "Do not kill NOOBS (players under 1 hour) or UNGEARED players.",
    "No spawn killing, spam killing, or bone camping.",
    "No gun usage at spawn.",
    "No begging.",
    "Have fun!"
  ];

  return (
    <>
      <h1>Server Rules</h1>

      <ol>
        {rules.map((rule, index) => (
          <li key={index}>{rule}</li>
        ))}
      </ol>

      <h2>Server Address</h2>
      <p>
        <strong>IP:</strong> hosting.nico-network.net
        <br />
        <strong>Port:</strong> 40001
      </p>
    </>
  );
                    }
