import Navbar from '../components/Navbar/Navbar'
import './Homepage.css'
import '../global.css'
import Products from '../components/Products/Products'
import { useState } from 'react'

const Home = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
      // Verifique se o item já está no carrinho pelo ID
      const adicionado = cart.find((livro) => livro.id === product.id);

      if (adicionado) {
        // Se o item já estiver no carrinho, atualize apenas a quantidade
        const updatedCart = cart.map((livro) => {
          if (livro.id === product.id) {
            return { ...livro, quantidade: livro.quantidade + 1 };
          }
          return livro;
        });

        setCart(updatedCart);
      } else {
        // Se o item não estiver no carrinho, adicione-o com quantidade 1
        setCart([...cart, { ...product, quantidade: 1 }]);
      }
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
