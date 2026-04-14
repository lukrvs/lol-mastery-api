export default function handler(req, res) {
  const champs = [
    "Yasuo","Ahri","Jinx","Lee Sin","Lux",
    "Thresh","Draven","Zed","Ezreal","Yone"
  ];

  const champ = champs[Math.floor(Math.random() * champs.length)];
  const level = Math.floor(Math.random() * 350) + 1;
  const points = level * 15000 + Math.floor(Math.random() * 50000);
  const user = req.query.user || "Ein Spieler";

  res.setHeader("Content-Type", "text/plain");
  res.status(200).send(
    `${user} hat auf ${champ} Mastery Stufe ${level} mit ${points} Punkten!`
  );
}
