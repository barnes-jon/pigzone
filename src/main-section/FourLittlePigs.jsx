import { animals } from "./Animals";
import React from "react";
//import ReactDOM from "react-dom";

//const title = "";

//const showBackground = true;

// const background = (
//   <img
//     className="background"
//     alt="barn"
//     src="https://barnes-jon.github.io/csb-5ygll6/images/barn-farm-autumn-fall.jpeg"
//   />
// );

const images = [];
for (const animal in animals) {
  images.push(
    <img
      key={animal}
      className="animal"
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role="button"
      onClick={displayFact}
    />
  );
}

function displayFact(e) {
  const selectedAnimal = e.target.alt;
  const animalInfo = animals[selectedAnimal];
  const optionIndex = Math.floor(Math.random() * animalInfo.facts.length);

  const funFact = animalInfo.facts[optionIndex];
  document.getElementById("fact").innerHTML = funFact;
}

const animalFacts = (
  <div id="pigZone">
    <h1>Click an animal for a fun fact</h1>
    <p id="fact"></p>
    <div className="animals">{images}</div>
  </div>
);

//ReactDOM.render(animalFacts, document.getElementById("root"));
export default function FourLittlePigs() {
  return animalFacts;
}
