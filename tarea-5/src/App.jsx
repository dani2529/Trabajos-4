import { useState } from 'react'
import './App.css'
import FormComponent from './components/form/formComponent'
import RickAndMortyCharacterCard from './components/rickAndMortyCaractercard/rickAndMortyCaractercard';


function App() {
  const [user, setUser] = useState([])
  
  console.log(user,'user nbombre');
  console.log(!user.lenght > 0 ,'validacion');
  
  return (
   <div>
    {
        !user.length > 0
        ? <FormComponent setUser={setUser}/>
        : (
        <RickAndMortyCharacterCard user={user} setUser={setUser}/>
        )
      }
      {/* */}
   </div>
  )
}

export default App


