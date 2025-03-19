/*
  ✨ Code Review & Refactor Suggestions ✨
  Awesome work implementing game mechanics! The suggestions below will help improve readability, 
  efficiency, and best practices. Keep in mind that there are many ways to solve problems, 
  and what matters most is getting a working solution. Reviewing refactored code helps build 
  strong development habits! 🚀
*/

const pokemon = require("./data"); // Good use of `require` to import data!

// ✅ Game Object: Well-structured! Nice use of arrays and objects.
const game = {
  party: [],
  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],
};

// ✅ Exercise 1: Console logging Pokémon
console.dir(pokemon, { maxArrayLength: null });
const pokemon59 = pokemon[58].name;
console.log("Exercise 1 result:", pokemon59);

// ✅ Exercise 2: Console logging `game`
console.log("Exercise 2 result:", game);

// ✅ Exercise 3: Add a difficulty level to the game
// Good approach! Adjusted for a more conventional property name.
game.difficulty = "Advanced"; // Changed from array to string for clarity
console.log("Exercise 3 result:", game);

// ✅ Exercise 4: Select and add a starter Pokémon
// Nice looping approach! A more direct approach using `.find()` improves clarity.
const starterPokemon = pokemon.find((p) => p.starter === true);
game.party.push(starterPokemon);
console.log("Exercise 4 result:", game.party);

// ✅ Exercise 5: Add three more Pokémon
// Good use of looping! `.filter()` can improve efficiency.
const additionalPokemon = pokemon.filter((p) =>
  ["Charizard", "Venusaur", "Jolteon"].includes(p.name)
);
game.party.push(...additionalPokemon);
console.log("Exercise 5 result:", game.party);

// ✅ Exercise 6: Complete gyms with difficulty < 3
// Great loop usage! Here’s an optimized `.forEach()` version:
game.gyms.forEach((gym) => {
  if (gym.difficulty < 3) gym.completed = true;
});
console.log("Exercise 6 result:", game.gyms);

// ✅ Exercise 7: Evolve starter Pokémon
// Correct approach! Using `.findIndex()` ensures flexibility.
const starterIndex = game.party.findIndex((p) => p.starter);
if (starterIndex !== -1) {
  const evolvedForm = pokemon.find((p) => p.name === "Wartortle");
  game.party.splice(starterIndex, 1, evolvedForm);
}
console.log("Exercise 7 result:", game.party);

// ✅ Exercise 8: Print all party Pokémon names
// Using `.map()` improves clarity and removes the need for explicit loops.
console.log(
  "Exercise 8 result:",
  game.party.map((p) => p.name)
);

// ✅ Exercise 9: Print all starter Pokémon
const starters = pokemon.filter((p) => p.starter);
console.log(
  "Exercise 9 result:",
  starters.map((p) => p.name)
);

// ✅ Exercise 10: `catchPokemon` method
// Correct logic! Adjusted to properly define the method inside `game`.
game.catchPokemon = function (pokemonObj) {
  this.party.push(pokemonObj);
};
game.catchPokemon(pokemon[93]);
console.log("Exercise 10 result:", game.party);

// ✅ Exercise 11: `catchPokemon` with pokeball usage
// Good logic! Adjusted to properly handle `pokeball` quantity.
game.catchPokemon = function (pokemonObj) {
  const pokeball = this.items.find((item) => item.name === "pokeball");
  if (pokeball && pokeball.quantity > 0) {
    this.party.push(pokemonObj);
    pokeball.quantity -= 1;
  }
};
game.catchPokemon(pokemon[122]);
console.log("Exercise 11 result:", game.items);

// ✅ Exercise 12: Complete gyms with difficulty < 6
game.gyms.forEach((gym) => {
  if (gym.difficulty < 6) gym.completed = true;
});
console.log("Exercise 12 result:", game.gyms);

// ✅ Exercise 13: `gymStatus` method
// Great job! Optimized using `.reduce()` for a cleaner approach.
game.gymStatus = function () {
  return this.gyms.reduce(
    (tally, gym) => {
      gym.completed ? tally.completed++ : tally.incomplete++;
      return tally;
    },
    { completed: 0, incomplete: 0 }
  );
};
console.log("Exercise 13 result:", game.gymStatus());

// ✅ Exercise 14: `partyCount` method
// Great approach! Kept for consistency.
game.partyCount = function () {
  return this.party.length;
};
console.log("Exercise 14 result:", game.partyCount());

// ✅ Exercise 15: Complete gyms with difficulty < 8
game.gyms.forEach((gym) => {
  if (gym.difficulty < 8) gym.completed = true;
});
console.log("Exercise 15 result:", game.gyms);

// ✅ Exercise 16: Log final `game` object
console.log("Exercise 16 result:", game);
