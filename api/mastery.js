export default function handler(req, res) {
  const champs = [
    "Yasuo","Ahri","Jinx","Lee Sin","Lux","Thresh",
    "Draven","Zed","Ezreal","Yone","Kai'Sa","Teemo",
    "Akali","Viego","Pyke","Caitlyn","Riven","Vayne"
  ];

  const champ = champs[Math.floor(Math.random() * champs.length)];

  // Gewichtete Level-Chance
  const roll = Math.random();
  let level;

  if (roll < 0.55) {
    level = Math.floor(Math.random() * 30) + 1;       // 55% low
  } else if (roll < 0.80) {
    level = Math.floor(Math.random() * 100) + 31;     // 25% mid
  } else if (roll < 0.95) {
    level = Math.floor(Math.random() * 150) + 131;    // 15% high
  } else {
    level = Math.floor(Math.random() * 70) + 281;     // 5% jackpot
  }

  const minPoints = level * 12000;
  const maxPoints = level * 18000;
  const points = Math.floor(Math.random() * (maxPoints - minPoints + 1)) + minPoints;

  const user = req.query.user || "Ein Spieler";

  res.setHeader("Content-Type", "text/plain");
  res.status(200).send(
    `${user} hat auf ${champ} Mastery Stufe ${level} mit ${points.toLocaleString("de-DE")} Punkten!`
  );
}
