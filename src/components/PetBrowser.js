import React from "react";

import Pet from "./Pet";

function PetBrowser(props) {
  const {pets, onAdoptPet} = props
  return <div className="ui cards">
    {pets.length > 0 && pets.map(pet => (
      <Pet key={pet.id} pet={pet} onAdoptPet={(id) =>onAdoptPet(id)} />
    ))}
  </div>;
}

export default PetBrowser;