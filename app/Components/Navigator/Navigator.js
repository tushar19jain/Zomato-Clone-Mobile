import { RiEBikeFill } from 'react-icons/ri'
import {MdOutlineDining} from 'react-icons/md'
import {FaMoneyCheck} from 'react-icons/fa'
const Navigator = ()=>{
    return(
        <div className='flex justify-around bg-white w-[390px] p-[20px] fixed bottom-0'>
            <div className='flex flex-col items-center text-red-500'>
                <RiEBikeFill />
                <p className='text-black'>Delivery</p>
            </div>
            <div  className='flex flex-col items-center text-gray-400'>
                <MdOutlineDining />
                <p>Dining</p>
            </div>
            <div  className='flex flex-col items-center  text-gray-400'>
                <FaMoneyCheck />
                <p>Money</p>
            </div>

        </div>
    )
    
}
export default Navigator