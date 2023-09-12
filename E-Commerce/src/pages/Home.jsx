import Navbar from '../components/Navbar/Navbar'
import './Homepage.css'
import '../global.css'
import Products from '../components/Products/Products'
import { useState } from 'react'

const Home = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
      const adicionado = cart.find((livro) => livro.id === product.id);

      if (adicionado) {
        const updatedCart = cart.map((livro) => {
          if (livro.id === product.id) {
            return { ...livro, quantidade: livro.quantidade + 1 };
          }
          return livro;
        });

        setCart(updatedCart);
      } else {
        setCart([...cart, { ...product, quantidade: 1 }]);
      }
    };

    const RemoveToCart = (product) => {
      const removedItem = cart.find((item) => item.id === product.id);
    
      if (removedItem) {
        if (removedItem.quantidade > 1) {
         
          const updatedCart = cart.map((item) =>
            item.id === product.id
              ? { ...item, quantidade: item.quantidade - 1 }
              : item
          );
          setCart(updatedCart);
        } else {
          
          const updatedCart = cart.filter((item) => item.id !== product.id);
          setCart(updatedCart);
        }
      }
    };

    const DeleteToCart = (product) => {
      // Verifica se o produto que você deseja remover está no carrinho
      const itemToRemove = cart.find((item) => item.id === product.id);
    
      if (itemToRemove) {
        // Filtra todos os itens no carrinho, exceto o que você deseja remover
        const updatedCart = cart.filter((item) => item.id !== product.id);
    
        // Define o novo carrinho sem o item removido
        setCart(updatedCart);
      }
    };
    
    



    return (
        <div id='Homepage'>
            <div className='components'>
            <Navbar cart={cart} addToCart={addToCart} RemoveToCart={RemoveToCart} DeleteToCart={DeleteToCart}/>
            <Products addToCart={addToCart} />

            
           </div>
        </div>
    )
}

export default Home;
