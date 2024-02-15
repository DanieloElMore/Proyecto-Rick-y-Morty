import SearchBar from "../SearchBar.jsx"
import styles from './Nav.module.css'
import { Link } from "react-router-dom"
const Nav = ({onSearch}) => {
    return (
        <div className={styles.contenedor}>
            <div>
                <Link to={'/home'}><button>Home</button></Link>
                <Link to={'/about'}><button>About</button></Link>
            </div>
            <div>
                <SearchBar onSearch = {onSearch}/>
            </div>
        </div>
    )
}

export default Nav