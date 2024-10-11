import './App.css'
import RickAndMortyCharacterCard from './componente/RickAndMortyCharacterCard'

function App() {
  return (
    <div>
      <h1>Rick Morty</h1>
      <RickAndMortyCharacterCard id={1}/>
      <RickAndMortyCharacterCard id={2}/>
      <RickAndMortyCharacterCard id={3}/>
      <RickAndMortyCharacterCard id={4}/>
    </div>
    
  )
}

export default App
