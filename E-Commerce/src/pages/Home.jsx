import Navbar from '../components/Navbar/Navbar'
import './Homepage.css'
import '../global.css'
import Products from '../components/Products/Products'
import { useState } from 'react'

const Home = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
      setCart([...cart, product]);
    };

    return (
        <div id='Homepage'>
            <div className='components'>
            <Navbar cart={cart} />
            <Products addToCart={addToCart} />
            
           </div>
        </div>
    )

}

export default Home;