import React, { useState } from "react";
import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState("");

  const onFindPetsClick = async () => {
    let url = "http://localhost:3001/pets"
    if (filters !== "") {
      url += `?type=${filters}`
    }
    const response = await fetch(url);
    const data = await response.json();
    setPets(data);
  };

  const onAdoptPet = (id) => {
    const newPets = pets.map(pet => {
      if (pet.id === id) {
        return {...pet, isAdopted: true}
      } else {
        return pet
      }
    })
    setPets(newPets)
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={(value) => setFilters(value)} onFindPetsClick={() => onFindPetsClick()} />
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={(id) => onAdoptPet(id)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;