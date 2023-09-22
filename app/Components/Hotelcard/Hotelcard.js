import { GoStarFill } from "react-icons/go"
import './Hotelcard.css'
const Hotelcard =(props)=>{
    return(
        <div className = 'card'>
            <img src = {props.hotelImage}></img>
            <div className = 'flex justify-between px-[12px]'>
                <div className = 'hotelDetails mt-[5px] mb-[5px]'>
                    <h1 className = 'font-bold text-xl'>{props.hotelname}</h1>
                    <p className = 'text-sm  text-gray-600 py-[3px]'>{props.hoteldetail}</p>
                    <p className = 'text-sm flex gap-[3px] text-gray-600 py-[3px]'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stopwatch" viewBox="0 0 16 16">
  <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z"/>
  <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3z"/>
</svg> {props.deliveryTiming}</p>
                </div>
                <div>
                    <p className=' ratingBox bg-green-700 p-[3px] mt-[4px] flex items-center text-white font-semibold '>{props.rating} <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg> </p>
                </div>
            </div>
            <hr className =''></hr>
            <p className = ' text-blue-700 ml-[20px] pt-[2px] mb-[5px] font-bold text-sm'>{props.offer}</p>
        </div>
    )
}
export default Hotelcard