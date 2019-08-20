// DOM elements
const searchbox = document.getElementById("searchbox");
const resultContainer = document.querySelector(".result");

const mangas = [
  "One Punch-Man",
  "Beastars",
  "Eveil",
  "My Home Hero",
  "Le Voleur d'estampes",
  "Jagaaan",
  "Atrail",
  "The Way of the Househusband",
  "Komi Can't Communicate",
  "My Hero Academia",
  "Samurai 8",
  "For the Kid I Saw in My Dream",
  "I Want To Eat Your Pancreas",
  "Nyankees",
  "Our Dreams At Dusk",
  "Skull-face Bookseller Honda-san",
  "Fullmetal Alchemist"
];

// get input value
const query = e => {
  return e.target.value;
};

// turn string to lower case
const stringToLower = str => {
  return str.toLowerCase();
};

// display items matching query
const displayMatch = matches => {
  resultContainer.innerHTML = "";
  matches.map(match => {
    const li = document.createElement("li");
    li.innerHTML = match;
    resultContainer.appendChild(li);
  });
};

// find items matching query
const findMatch = event => {
  let searchTerm = query(event);
  let matches = mangas.filter(manga => {
    return stringToLower(manga).includes(stringToLower(searchTerm));
  });
  displayMatch(matches);
};

searchbox.addEventListener("keyup", findMatch);
