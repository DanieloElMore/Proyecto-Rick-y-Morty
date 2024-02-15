import styles from './card.module.css'
import React from "react";
import { Link } from 'react-router-dom';

export default function Card(props) {
   const {name, status, gender, species, origin, image, onClose, id} = props;
   return (
      <div key={id} className={styles.contenedor}>
         <button onClick={() => onClose(props.id)}>X</button>
         <Link to={`/detail/${props.id}`}>
         <h2>{name}</h2>
         </Link>
         <h2>{status}</h2>
         <h2>{gender}</h2>
         <h2>{species}</h2>
         <h2>{origin}</h2>
         <img src={image} alt='foto' height={200} width={200}/> 
      </div>
   );
}
