let lastChamp = null;

export default function handler(req, res) {
  const roles = {
    top: [
      "Aatrox","Camille","Cho'Gath","Darius","Dr. Mundo","Fiora","Gangplank","Garen","Gnar","Gragas",
      "Gwen","Illaoi","Irelia","Jax","Kayle","Kennen","Kled","Malphite","Mordekaiser","Nasus",
      "Olaf","Ornn","Pantheon","Poppy","Quinn","Renekton","Riven","Rumble","Sett","Shen",
      "Singed","Sion","Tahm Kench","Teemo","Tryndamere","Urgot","Volibear","Warwick","Wukong","Yorick"
    ],
    jungle: [
      "Amumu","Bel'Veth","Briar","Diana","Ekko","Elise","Evelynn","Fiddlesticks","Graves","Hecarim",
      "Ivern","Jarvan IV","Karthus","Kayn","Kha'Zix","Kindred","Lee Sin","Lillia","Master Yi","Nidalee",
      "Nocturne","Nunu","Rammus","Rek'Sai","Rengar","Sejuani","Shaco","Shyvana","Skarner","Taliyah",
      "Trundle","Udyr","Vi","Viego","Warwick","Xin Zhao","Zac"
    ],
    mid: [
      "Ahri","Akali","Akshan","Anivia","Annie","Aurelion Sol","Azir","Cassiopeia","Corki","Ekko",
      "Fizz","Galio","Heimerdinger","Hwei","Kassadin","Katarina","LeBlanc","Lissandra","Lux","Malzahar",
      "Naafiri","Neeko","Orianna","Qiyana","Ryze","Swain","Sylas","Syndra","Talon","Twisted Fate",
      "Veigar","Vel'Koz","Vex","Viktor","Vladimir","Xerath","Yasuo","Yone","Zed","Ziggs","Zoe"
    ],
    adc: [
      "Aphelios","Ashe","Caitlyn","Draven","Ezreal","Jhin","Jinx","Kai'Sa","Kalista","Kog'Maw",
      "Lucian","Miss Fortune","Nilah","Samira","Sivir","Smolder","Tristana","Twitch","Varus","Vayne",
      "Xayah","Zeri"
    ],
    support: [
      "Alistar","Bard","Blitzcrank","Braum","Janna","Karma","Leona","Lulu","Milio","Morgana",
      "Nami","Nautilus","Pyke","Rakan","Rell","Renata","Senna","Seraphine","Sona","Soraka",
      "Taric","Thresh","Yuumi","Zyra"
    ]
  };

  const roleKeys = Object.keys(roles);
  const randomRole = roleKeys[Math.floor(Math.random() * roleKeys.length)];
  const champPool = roles[randomRole];

  let champ;

  // 85% keine direkte Wiederholung
  do {
    champ = champPool[Math.floor(Math.random() * champPool.length)];
  } while (champ === lastChamp && Math.random() < 0.85);

  lastChamp = champ;

  // Level: low häufiger, high selten
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
