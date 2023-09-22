import { FaArrowDown, FaArrowDown19, FaLanguage, FaLocationArrow, FaLocationPin, FaLocationPinLock, FaUser } from 'react-icons/fa6'
const Header =()=>{
    return(
        <div className = 'flex gap-[36px] mx-2 my-3'>
            <div className = 'text-red-600 text-2xl'>
                <FaLocationPin />
            </div>

            <div>
                <div>
                    <h1 className = 'font-bold'>Home</h1>
                </div>
                <div>
                    <p className = 'font-semibold text-sm text-gray-600'>Patel nager Muzaffarnagar</p>
                </div>
            </div>

            <div className = 'text-3xl'>
                <FaLanguage />
            </div>

            <div className = 'text-2xl'>
                <FaUser />
            </div>
        </div>
    )
}
export default Header