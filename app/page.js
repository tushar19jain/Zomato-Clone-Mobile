import Image from 'next/image'
import Header from './Components/Header/Header'
import Searchbar from './Components/Searchbar/Searchbar'
import Offerbox from './Components/Offerbox/Offerbox'
import Fooditems from './Components/Fooditems/Fooditems'
import Hotelcard from './Components/Hotelcard/Hotelcard'
import Sort from './Components/Sort/Sort'
import Navigator from './Components/Navigator/Navigator'
export default function Home() {
  return (
    <div>
    <Header />
    <Searchbar />
    <h2 className = 'tracking-wider mt-[90px] text-center'>Explore</h2>
    <Offerbox />
    <h2 className = 'tracking-wider mt-[30px] text-center'>WHAT'S ON YOUR MIND ?</h2>
    <div className = 'flex ml-[25px] gap-[50px] text-center  overflow-x-auto'>
      <Fooditems image = {"https://img.freepik.com/free-photo/meat-dish-with-vegetables_144627-18109.jpg?w=1060&t=st=1695451950~exp=1695452550~hmac=751dec912fea1f4c012f9d0407992e2f79b1c056087fc81d6a86db1d43c5409e"} itemName = {'North Indian'} />
      <Fooditems image = {"https://img.freepik.com/premium-photo/paneer-curry_57665-7126.jpg?w=1060"} itemName = {'Paneer'} />
      <Fooditems image = {"https://img.freepik.com/free-photo/fried-noodles-with-shrimp_1339-2477.jpg?w=996&t=st=1695453015~exp=1695453615~hmac=0e3ebd586cc3d058ab4a0c029c3a33d74c86184fa5b4c15b0f82144843d3c1af"}  itemName = {'Chinese'} />
      <Fooditems image = {"https://img.freepik.com/premium-photo/plate-food-with-bowl-red-sauce-it_667286-853.jpg"} itemName = {'Momos'} />
      <Fooditems  className ='h-[30px]' image ={"https://img.freepik.com/premium-photo/katori-chaat_57665-3597.jpg"}  itemName = {'Chaat'} />
      <Fooditems image = {"https://img.freepik.com/premium-photo/sandwich-with-tomato-lettuce-ham-cheese-isolated-white-background_123827-18082.jpg?w=1060"
      } itemName = {'Sandwich'} />
      <Fooditems  image = {"https://img.freepik.com/premium-photo/chocolate-cherry-cake_50944-290.jpg?w=1060"} itemName = {'Pastry'} />
      <Fooditems image = {"https://img.freepik.com/free-photo/spaghetti-with-vegetablesbroccolitomatoespeppers-isolated-white-background_123827-21223.jpg?w=1060&t=st=1695452475~exp=1695453075~hmac=f1994d6f7ca36fdb17ecb4bc5a2128a3bae09f501b1c6e594098c8eab64fdd48"} itemName = {'Chowmein'} />
      <Fooditems  image={"https://img.freepik.com/premium-photo/pasta-with-tomatoes-basil-is-isolated-white-background_166116-5594.jpg?w=740"} itemName = {'Italian'} />
    </div>
    <div className = 'flex ml-[25px] gap-[50px] text-center  overflow-x-auto'>
      <Fooditems image = {"https://img.freepik.com/premium-photo/pink-cake-decorated-with-flowers-isolated-white-background-ai-generative_123827-24764.jpg?w=1060"} itemName = {'Cake'} />
      <Fooditems image = {"https://img.freepik.com/free-photo/fresh-potatoes-fri-with-souce_144627-5503.jpg?w=1060&t=st=1695486033~exp=1695486633~hmac=224b3a8ffc21b68ec2168e8c3eb084b97c9541ecc7ca60f2d291d3157819ad88"} itemName = {'Fries'} />
      <Fooditems image = {"https://img.freepik.com/free-photo/delicious-milkshake_144627-27513.jpg?w=360&t=st=1695485886~exp=1695486486~hmac=c78f416b9e5b6c9481cffcce0daef8ac8850c9e0cdb72392fcea777ea0692e39"}  itemName = {'Milk shake'} />
      <Fooditems image = {"https://img.freepik.com/free-photo/fried-rice_1203-8380.jpg?w=1060&t=st=1695486088~exp=1695486688~hmac=a2594a9599954d5f1ecc7b74e58067b0e300e680a96fae1f3d1dbf7b8757d7cb"} itemName = {'Rice'} />
      <Fooditems  className ='h-[30px]' image ={"https://img.freepik.com/premium-photo/katori-chaat_57665-3597.jpg"}  itemName = {'Chaat'} />
      <Fooditems image = {"https://img.freepik.com/premium-photo/sandwich-with-tomato-lettuce-ham-cheese-isolated-white-background_123827-18082.jpg?w=1060"
      } itemName = {'Sandwich'} />
      <Fooditems  image = {"https://img.freepik.com/premium-photo/chocolate-ice-cream-cone-isolate-white-background-generative-ai_74760-2613.jpg?size=626&ext=jpg&ga=GA1.1.578863645.1686928461&semt=ais"} itemName = {'Ice Cream'} />
      <Fooditems image = {"https://img.freepik.com/premium-photo/indian-cuisine-vegetable-manchurian-white-background_55610-1878.jpg?w=996"} itemName = {'Manchurian'} />
      <Fooditems  image={"https://img.freepik.com/premium-photo/masala-dosa-is-south-indian-meal-served-with-sambhar-coconut-chutney-selective-focus_466689-22907.jpg?w=1060"} itemName = {'South Indian'} />
    </div>
    <h2 className = 'tracking-wider mt-[30px] text-center'>ALL RESTAURANTS</h2>
    <Sort />
    <p className = 'text-center mt-[15px] text-gray-500'>140 restaurants delivering to you</p>
    <p className = 'text-center  text-gray-500'>FEATURED</p>
    <Hotelcard hotelImage = "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" hotelname = {'Biggies Pizza'} hoteldetail = {'Pizza.Burger.₹100 for one'}deliveryTiming= {'30-35 min.2Km'}rating={'4.1'}offer={'10% OFF up to 40'}/>
    <Hotelcard hotelImage = "https://images.unsplash.com/photo-1552590635-27c2c2128abf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" hotelname = {'Haji Maqbool ki Tahri'} hoteldetail = {'North Indian.₹200 for one'} deliveryTiming = {'20-25 min.3Km'} rating = {'4.1'} offer = {'60% OFF up to ₹120'}/>
    <Hotelcard hotelImage = "https://images.unsplash.com/photo-1690401767645-595de0e0e5f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1913&q=80" hotelname = {'The Spice Villa Cafe'} hoteldetail = {'North Indian.Fast Food.₹200 for one'} deliveryTiming = {'30-35 min.2Km'} rating = {'3.8'} offer = {'40% OFF up to ₹80'}/>
    <Hotelcard hotelImage = "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" hotelname = {'Anna'} hoteldetail = {'South Indian.₹200 for one'} deliveryTiming = {'25-30 min.1Km'} rating = {'4.1'} offer = {'50% OFF up to ₹100'}/>
    <Hotelcard hotelImage = "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80" hotelname = {'7 Eleven'} hoteldetail = {'North Indian.Chinese.₹150 for one'} deliveryTiming = {'30-35 min.1Km'} rating = {'3.9'} offer = {'20% OFF up to ₹50'}/>
    <Hotelcard hotelImage = "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1899&q=80" hotelname = {'Burger King'} hoteldetail = {'Burger.Fast Food.₹150 for one'} deliveryTiming = {'25-30 min.1Km'} rating = {'4.1'} offer = {'Get items @ ₹129 only'}/>
    <Hotelcard hotelImage = "https://images.unsplash.com/photo-1669340781012-ae89fbac9fc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" hotelname = {'Black Brickks'} hoteldetail = {'North Indian.Pizza.₹200 for one'} deliveryTiming = {'25-30 min.1Km'} rating = {'3.9'} offer = {'20% OFF up to ₹50'}/>
    <Hotelcard hotelImage = "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" hotelname = {'Biggies Pizza'} hoteldetail = {'Pizza.Burger.₹100 for one'}deliveryTiming= {'30-35 min.2Km'}rating={'4.1'}offer={'10% OFF up to 40'}/>
    <Hotelcard hotelImage = "https://images.unsplash.com/photo-1552590635-27c2c2128abf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" hotelname = {'Haji Maqbool ki Tahri'} hoteldetail = {'North Indian.₹200 for one'} deliveryTiming = {'20-25 min.3Km'} rating = {'4.1'} offer = {'60% OFF up to ₹120'}/>
    <Hotelcard hotelImage = "https://images.unsplash.com/photo-1690401767645-595de0e0e5f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1913&q=80" hotelname = {'The Spice Villa Cafe'} hoteldetail = {'North Indian.Fast Food.₹200 for one'} deliveryTiming = {'30-35 min.2Km'} rating = {'3.8'} offer = {'40% OFF up to ₹80'}/>
    <Hotelcard hotelImage = "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" hotelname = {'Anna'} hoteldetail = {'South Indian.₹200 for one'} deliveryTiming = {'25-30 min.1Km'} rating = {'4.1'} offer = {'50% OFF up to ₹100'}/>
    <Hotelcard hotelImage = "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80" hotelname = {'7 Eleven'} hoteldetail = {'North Indian.Chinese.₹150 for one'} deliveryTiming = {'30-35 min.1Km'} rating = {'3.9'} offer = {'20% OFF up to ₹50'}/>
    <Hotelcard hotelImage = "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1899&q=80" hotelname = {'Burger King'} hoteldetail = {'Burger.Fast Food.₹150 for one'} deliveryTiming = {'25-30 min.1Km'} rating = {'4.1'} offer = {'Get items @ ₹129 only'}/>
    <Hotelcard hotelImage = "https://images.unsplash.com/photo-1669340781012-ae89fbac9fc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" hotelname = {'Black Brickks'} hoteldetail = {'North Indian.Pizza.₹200 for one'} deliveryTiming = {'25-30 min.1Km'} rating = {'3.9'} offer = {'20% OFF up to ₹50'}/>
    <Hotelcard hotelImage = "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" hotelname = {'Biggies Pizza'} hoteldetail = {'Pizza.Burger.₹100 for one'}deliveryTiming= {'30-35 min.2Km'}rating={'4.1'}offer={'10% OFF up to 40'}/>
    <Hotelcard hotelImage = "https://images.unsplash.com/photo-1552590635-27c2c2128abf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" hotelname = {'Haji Maqbool ki Tahri'} hoteldetail = {'North Indian.₹200 for one'} deliveryTiming = {'20-25 min.3Km'} rating = {'4.1'} offer = {'60% OFF up to ₹120'}/>
    <Hotelcard hotelImage = "https://images.unsplash.com/photo-1690401767645-595de0e0e5f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1913&q=80" hotelname = {'The Spice Villa Cafe'} hoteldetail = {'North Indian.Fast Food.₹200 for one'} deliveryTiming = {'30-35 min.2Km'} rating = {'3.8'} offer = {'40% OFF up to ₹80'}/>
    <Hotelcard hotelImage = "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" hotelname = {'Anna'} hoteldetail = {'South Indian.₹200 for one'} deliveryTiming = {'25-30 min.1Km'} rating = {'4.1'} offer = {'50% OFF up to ₹100'}/>
    <Hotelcard hotelImage = "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80" hotelname = {'7 Eleven'} hoteldetail = {'North Indian.Chinese.₹150 for one'} deliveryTiming = {'30-35 min.1Km'} rating = {'3.9'} offer = {'20% OFF up to ₹50'}/>
    <Hotelcard hotelImage = "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1899&q=80" hotelname = {'Burger King'} hoteldetail = {'Burger.Fast Food.₹150 for one'} deliveryTiming = {'25-30 min.1Km'} rating = {'4.1'} offer = {'Get items @ ₹129 only'}/>
    <Hotelcard hotelImage = "https://images.unsplash.com/photo-1669340781012-ae89fbac9fc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" hotelname = {'Black Brickks'} hoteldetail = {'North Indian.Pizza.₹200 for one'} deliveryTiming = {'25-30 min.1Km'} rating = {'3.9'} offer = {'20% OFF up to ₹50'}/>
    <Hotelcard hotelImage = "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" hotelname = {'Biggies Pizza'} hoteldetail = {'Pizza.Burger.₹100 for one'}deliveryTiming= {'30-35 min.2Km'}rating={'4.1'}offer={'10% OFF up to 40'}/>
    <Hotelcard hotelImage = "https://images.unsplash.com/photo-1552590635-27c2c2128abf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" hotelname = {'Haji Maqbool ki Tahri'} hoteldetail = {'North Indian.₹200 for one'} deliveryTiming = {'20-25 min.3Km'} rating = {'4.1'} offer = {'60% OFF up to ₹120'}/>
    <Hotelcard hotelImage = "https://images.unsplash.com/photo-1690401767645-595de0e0e5f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1913&q=80" hotelname = {'The Spice Villa Cafe'} hoteldetail = {'North Indian.Fast Food.₹200 for one'} deliveryTiming = {'30-35 min.2Km'} rating = {'3.8'} offer = {'40% OFF up to ₹80'}/>
    <Hotelcard hotelImage = "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" hotelname = {'Anna'} hoteldetail = {'South Indian.₹200 for one'} deliveryTiming = {'25-30 min.1Km'} rating = {'4.1'} offer = {'50% OFF up to ₹100'}/>
    <Hotelcard hotelImage = "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80" hotelname = {'7 Eleven'} hoteldetail = {'North Indian.Chinese.₹150 for one'} deliveryTiming = {'30-35 min.1Km'} rating = {'3.9'} offer = {'20% OFF up to ₹50'}/>
    <Hotelcard hotelImage = "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1899&q=80" hotelname = {'Burger King'} hoteldetail = {'Burger.Fast Food.₹150 for one'} deliveryTiming = {'25-30 min.1Km'} rating = {'4.1'} offer = {'Get items @ ₹129 only'}/>
    <Hotelcard hotelImage = "https://images.unsplash.com/photo-1669340781012-ae89fbac9fc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" hotelname = {'Black Brickks'} hoteldetail = {'North Indian.Pizza.₹200 for one'} deliveryTiming = {'25-30 min.1Km'} rating = {'3.9'} offer = {'20% OFF up to ₹50'}/>
    <Navigator />
    </div>
  )
}
