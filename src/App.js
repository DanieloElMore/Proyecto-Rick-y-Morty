import './App.css';
import Cards from './components/Cards/Cards.jsx';
import { useState } from 'react';
import Nav from './components/Nav';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { About } from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx'

const URL = 'https://rickandmortyapi.com/api/character/'

function App() {
   const [characters, setCharacters] = useState([])
   const onSearch = async (id) => {
      try {
         const response = await fetch(`${URL}${id}`);

         const data = await response.json();
         
         setCharacters([...characters, data]);
      } catch (error) {
         console.log('error', error);
      }
   }
   const onClose = (id) =>{
      const personajesfiltrados = characters.filter((character)=>character.id !== id);
      setCharacters(personajesfiltrados)
   }
const location = useLocation();
   return (
      <div className='App'> {
         location.pathname !== '/'?
         <Nav onSearch={onSearch}/>: 
         undefined
      }
         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
         </Routes>
      </div>
   );
}

export default App;
