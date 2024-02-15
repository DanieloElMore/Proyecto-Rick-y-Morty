import { useState } from "react";

export default function SearchBar(props) {
   const {onSearch} = props;
   const [id, setid] = useState('')
   const handleChange = ({target}) => {setid(target.value)}
   return (
      <div>
         <input type='search' placeholder="id.." onChange={handleChange} value={id} />
         <button onClick={onSearch}>Agregar</button>
      </div>
   );
}
