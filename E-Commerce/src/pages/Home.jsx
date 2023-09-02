import Navbar from '../components/Navbar/Navbar'
import './Homepage.css'
import '../global.css'
import Products from '../components/Products/Products'
import { useState } from 'react'

const Home = () => {
    const [show,setshow] = useState(true);
    return (
        <div id='Homepage'>
            <div className='components'>
           <Navbar setshow={setshow}/>
           {show ? <Products/> : 'Cart'}
           </div>
        </div>
    )

}

export default Home;