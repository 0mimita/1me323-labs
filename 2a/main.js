/*Exempel
const cat = {
    name: "Misse",
    age: 5,
    isIndoor: true
};

console.log(cat.name);

console.log(cat["age"]); */

//Person
const person = {
    firstName: "Mariam",
    lastName: "Tumah",
    age: 20, 
    occupation: "Student",
    address: {
        street: "Stallvägen",
        city: "Växjö",
        country: "Sverige"
    }
};

console.log(`${person.firstName}s stad är ${person.address.city}`); 


//Eget objekt
const pokemon = {
    name: "Espeon",
    type: "Psychic",
    hp: 65,
    isLoyal: true,
    evolution: {
        from: "Eevee",
        method: "Friendship",
        isFinal: true
    },
    personality: ["Majestic", "Mature", "Focused"]
};

console.log(`${pokemon.name} utvecklas från ${pokemon.evolution.from} via ${pokemon.evolution.method}.`);

console.log(`${pokemon.name} är väldigt ${pokemon.personality[2].toLowerCase()}.`);


pokemon.color = "Lila";

console.log(`${pokemon.name}s vikt är ${pokemon.weight}`);
console.log("Har jag en type? ", "type" in pokemon, "Det är", pokemon.type);
console.log(pokemon.color);


const personContainer = document.getElementById("person-info");
const pokemonContainer = document.getElementById("pokemon-info");

personContainer.innerHTML = `
    <div class="card">
        <h2>${person.firstName} ${person.lastName}</h2>
        <p><strong>Yrke:</strong> ${person.occupation}</p>
        <p><strong>Ålder:</strong> ${person.age} år</p>
    </div>
`;

pokemonContainer.innerHTML = `
    <div class="card">
        <h2>${pokemon.name} <small>(${pokemon.type})</small></h2>
        <p>Utvecklas från: <em>${pokemon.evolution.from}</em></p>
        <p>Personlighet: ${pokemon.personality.join(", ")}</p>
    </div>
`;

console.log("--- Automatisk lista på person-data ---");

for (const key in person) {
  console.log(key, person[key]);
}

