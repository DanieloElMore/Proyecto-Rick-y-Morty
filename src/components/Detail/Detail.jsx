import axios from "axios";
import { useParams } from "react-router-dom";
import {React, useEffect, useState} from "react";

export default function Detail(){
    const {id}=useParams();
    const [character, setCharacter] = useState({});
    useEffect(() => {
        axios(`https://rym2.up.railway.app/api/character/${id}?key={tuApiKey}`).then(
           ({ data }) => {
              if (data.name) {
                 setCharacter(data);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           }
        );
        return setCharacter({});
     }, [id]);
     return (
        <div>
            <h1>
                {character.name}
            </h1>
            <h1>
                {character.status}
            </h1>
            <h1>
                {character.gender}
            </h1>
            <h1>
                {character.species}
            </h1>
            <div>
                <img src={character.image} height={400} widht={400}/>
            </div>
        </div>
     )
}

