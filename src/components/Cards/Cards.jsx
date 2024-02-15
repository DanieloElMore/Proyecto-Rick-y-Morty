import Card from "../Card/Card.jsx"
export const Cards = ({characters, onClose}) => {
   return <div>
      {characters.map((character) => (
            <Card key={character.id} id={character.id} onClose={onClose}
            name={character.name}
            image={character.image}
            />
         ))}
   </div>;
} 

export default Cards;