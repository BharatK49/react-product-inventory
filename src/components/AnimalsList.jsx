export default function AnimalsList({ animals }) {
  return (
    <div className="animals-wrapper">
      {animals.map((animal) => (
        <div className="animal-card" key={animal.name}>
          <h3>{animal.name}</h3>
          <p><em>{animal.scientificName}</em></p>
          <p>{animal.weight}</p>
          <p>{animal.diet}</p>
        </div>
      ))}
    </div>
  );
}
