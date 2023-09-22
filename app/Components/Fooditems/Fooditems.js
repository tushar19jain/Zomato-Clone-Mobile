const Fooditems = (props)=>{
    return(
        <div className = 'flex flex-col'>
            <img className = 'h-[50px]' src ={props.image}></img>
            <p className='text-xs'>{props.itemName}</p>
        </div>
    )
}
export default Fooditems