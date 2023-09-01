import Navbar from '../components/Navbar/Navbar'
import './Homepage.css'
import '../global.css'
import Products from '../components/Products/Products'

const Home = () => {
    return (
        <div id='Homepage'>
            <div className='components'>
           <Navbar/>
           <Products/>
           </div>
        </div>
    )

}

export default Home;