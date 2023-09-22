import './Offerbox.css'
const Offerbox =()=>{
    const discountGif = 'https://media.tenor.com/Bg-Ou80lDM0AAAAi/offerte-toste-offerte.gif';
    return(
        <div className = 'box flex items-center gap-[40px] mx-[20px] justify-center mt-[40px] '>
            <div>
                <h1 className = 'font-bold ml-[20px]'>Offers</h1>
                <p className = 'ml-[20px] text-sm text-gray-400 w-[221px]'>Up to 60% OFF, Flat discounts, and other great offers </p>                
            </div>
            <img className = 'h-[60px] mr-[40px]' src ={discountGif}></img>
        </div>
    )
}
export default Offerbox