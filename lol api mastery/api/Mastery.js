export default function handler(req, res) {
  const champs = [
    "Yasuo","Ahri","Jinx","Lee Sin","Lux","Thresh",
    "Draven","Kai'Sa","Zed","Ezreal","Yone","Teemo",
    "Viego","Akali","Katarina","Caitlyn","Pyke"
  ];

  const champ = champs[Math.floor(Math.random() * champs.length)];
  const level = Math.floor(Math.random() * 350) + 1;

  const minPoints = level * 12000;
  const maxPoints = level * 18000;
  const points = Math.floor(Math.random() * (maxPoints - minPoints + 1)) + minPoints;

  const user = req.query.user || "Ein Spieler";

  res.status(200).send(
    `${user} hat auf ${champ} Mastery Stufe ${level} mit ${points.toLocaleString()} Punkten!`
  );
}