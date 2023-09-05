import React, { useState } from 'react';
import '../../components/Navbar/Navbar.css';
import { AiOutlineShoppingCart, AiOutlineClose } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import {GrFormAdd} from 'react-icons/gr';

const Navbar = ({ cart }) => {
  const [carrinhoAberto, setCarrinhoAberto] = useState(false);

  const abrircarrinho = () => {
    setCarrinhoAberto(true);
  };

  const fecharcarrinho = () => {
    setCarrinhoAberto(false);
  };

  const calcularTotal = () => {
    let total = 0;
    for (const item of cart) {
      total += item.preco;
    }
    return total;
  };

  return (
    <div>
      <div className={`cart ${carrinhoAberto ? 'open' : ''}`}>
        <div className='cart-header'>
          <p>Meu carrinho</p>
          <AiOutlineClose className='icon' onClick={fecharcarrinho} />
        </div>

        <div className='cart-products'>
          {cart.map((item) => (
            <div key={item.id} className='cart-item'>
              <img src={item.imagem} alt={item.nome} />
              <div className='products-details'>
                <p>{item.nome}</p>
                <p>R$: {item.preco}</p>
              </div>
              <div className=''>
                    <GrFormAdd/>
              </div>
            </div>
              
          ))}
          
        </div>

        <p className='total-price'>R$ {calcularTotal()}</p>
        <button>FINALIZAR COMPRA</button>
      </div>
      <div className='navbar'>
        <div >
          <h1>Nana Livros</h1>
        </div>
        <ul>
          <li>
            <AiOutlineShoppingCart className='icon' onClick={abrircarrinho} />
          </li>
          <li>
            <BsPerson className='icon' />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;