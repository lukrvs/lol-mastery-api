let lastChamp = null;

export default function handler(req, res) {
  const champs = [
"Aatrox","Ahri","Akali","Akshan","Alistar","Amumu","Anivia","Annie","Aphelios","Ashe",
    "Aurelion Sol","Azir","Bard","Bel'Veth","Blitzcrank","Brand","Braum","Caitlyn","Camille","Cassiopeia",
    "Cho'Gath","Corki","Darius","Diana","Draven","Ekko","Elise","Evelynn","Ezreal","Fiddlesticks",
    "Fiora","Fizz","Galio","Gangplank","Garen","Gnar","Gragas","Graves","Gwen","Hecarim",
    "Heimerdinger","Illaoi","Irelia","Ivern","Janna","Jarvan IV","Jax","Jayce","Jhin","Jinx",
    "Kai'Sa","Kalista","Karma","Karthus","Kassadin","Katarina","Kayle","Kayn","Kennen","Kha'Zix",
    "Kindred","Kled","Kog'Maw","LeBlanc","Lee Sin","Leona","Lillia","Lissandra","Lucian","Lulu",
    "Lux","Malphite","Malzahar","Maokai","Master Yi","Milio","Miss Fortune","Mordekaiser","Morgana","Naafiri",
    "Nami","Nasus","Nautilus","Neeko","Nidalee","Nilah","Nocturne","Nunu","Olaf","Orianna",
    "Ornn","Pantheon","Poppy","Pyke","Qiyana","Quinn","Rakan","Rammus","Rek'Sai","Rell",
    "Renata","Renekton","Rengar","Riven","Rumble","Ryze","Samira","Sejuani","Senna","Seraphine",
    "Sett","Shaco","Shen","Shyvana","Singed","Sion","Sivir","Skarner","Smolder","Sona",
    "Soraka","Swain","Sylas","Syndra","Tahm Kench","Taliyah","Talon","Taric","Teemo","Thresh",
    "Tristana","Trundle","Tryndamere","Twisted Fate","Twitch","Udyr","Urgot","Varus","Vayne","Veigar",
    "Vel'Koz","Vex","Vi","Viego","Vikt
  ];

  let champ;

  // 85% keine direkte Wiederholung, 15% Wiederholung erlaubt
  do {
    champ = champs[Math.floor(Math.random() * champs.length)];
  } while (champ === lastChamp && Math.random() < 0.85);

  lastChamp = champ;

  // Level Verteilung: low häufiger, high selten
  const roll = Math.random();
  let level;

  if (roll < 0.55) {
    level = Math.floor(Math.random() * 30) + 1;
  } else if (roll < 0.80) {
    level = Math.floor(Math.random() * 100) + 31;
  } else if (roll < 0.95) {
    level = Math.floor(Math.random() * 150) + 131;
  } else {
    level = Math.floor(Math.random() * 70) + 281;
  }

  const minPoints = level * 12000;
  const maxPoints = level * 18000;
  const points =
    Math.floor(Math.random() * (maxPoints - minPoints + 1)) + minPoints;

  const user = req.query.user || "Ein Spieler";

  res.setHeader("Content-Type", "text/plain");
  res.status(200).send(
    `${user} hat auf ${champ} Mastery Stufe ${level} mit ${points.toLocaleString("de-DE")} Punkten!`
  );
}
