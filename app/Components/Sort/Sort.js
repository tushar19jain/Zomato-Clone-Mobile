import { FaArrowDown } from "react-icons/fa6"
import './Sort.css'
import { FaFilter, FaSort } from "react-icons/fa6"
const Sort = ()=>{
    return(
        <div>
            <ul className='text-xs font-semibold'>
                <li className = 'flex items-center'><FaFilter/>Sort<FaArrowDown /></li>
                <li>Nearest</li>
                <li>Great Offers</li>
                <li>Rating 4.0+</li>
                <li>Pure Veg</li>
                <li className = 'flex items-center'>Cuisines<FaArrowDown /></li>
            </ul>
        </div>
    )
}
export default Sort