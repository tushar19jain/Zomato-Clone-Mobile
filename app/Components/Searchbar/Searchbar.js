import './Searchbar.css'
import { FaMagnifyingGlass, FaMicrophone } from 'react-icons/fa6'
const Searchbar = () =>{
    return(
        <div className = 'search'>
            <FaMagnifyingGlass className = ' glass  text-red-600 font-semibold' />
            <input className = 'text-md  search-field' type = 'text' placeholder = 'Search "pasta" '/>
            <FaMicrophone className = 'mic  text-red-600 font-semibold' />
        </div>
    )
}
export default Searchbar