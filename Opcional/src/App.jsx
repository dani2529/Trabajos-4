import "./App.css";
import RickAndMortyCharacterCard from "./componente/RickAndMortyCharacterCard";

function App() {
  return (
    <div>
      <h1>Rick Morty</h1>
      <div className="container-card">
        <RickAndMortyCharacterCard id={1} />
        <RickAndMortyCharacterCard id={2} />
        <RickAndMortyCharacterCard id={3} />
        <RickAndMortyCharacterCard id={4} />
        <RickAndMortyCharacterCard id={5} />
        <RickAndMortyCharacterCard id={6} />
        <RickAndMortyCharacterCard id={7} />
        <RickAndMortyCharacterCard id={8} />
      </div>
    </div>
  );
}

export default App;
