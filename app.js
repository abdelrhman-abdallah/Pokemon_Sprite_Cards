// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector("#container");
const row = document.createElement("div");
row.classList.add("row");
container.appendChild(row);
const baseURL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for (let i = 1; i <= 151; i++) {
  const col = document.createElement("div");
  col.classList.add("col");
  col.classList.add("my-2");
  const pokemon = document.createElement("div");
  pokemon.classList.add("card", "card-hover");
  pokemon.classList.add("pokemon");
  const newImg = document.createElement("img");
  newImg.src = `${baseURL}${i}.png`;
  const pokemonBody = document.createElement("div");
  const label = document.createElement("span");
  label.innerText = `#${i}`;
  label.classList.add("card-title");

  row.appendChild(col);
  col.appendChild(pokemon);
  pokemon.appendChild(newImg);
  pokemon.appendChild(pokemonBody);
  pokemonBody.appendChild(label);
}
