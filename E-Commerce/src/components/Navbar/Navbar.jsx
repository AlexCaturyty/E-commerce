import React, { useState } from 'react';
import '../../components/Navbar/Navbar.css';
import { AiOutlineShoppingCart, AiOutlineClose } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { GrFormAdd, GrFormSubtract, GrClose } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const Navbar = ({ cart, addToCart, RemoveToCart, DeleteToCart }) => {
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
      total += parseFloat(item.preco) * item.quantidade;
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
          {cart.length === 0 ? (
            <h1>O carrinho está vazio</h1>
          ) : (
          cart.map((item) => (
            <div key={item.id} className='cart-item'>
              <div className='Close'>
                <GrClose onClick={() => DeleteToCart(item)} />
              </div>
              <img src={item.imagem} alt={item.nome} />
              <div className='products-details'>
                <p>{item.nome}</p>
                <p>R$: {item.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                <div className='buttons'>
                  <div className='AddAndReduct'>
                    <GrFormSubtract onClick={() => RemoveToCart(item)} />
                  </div>
                  <div className='Qtd'>
                    <span>{item.quantidade}</span>
                  </div>
                  <div className='AddAndReduct'>
                    <GrFormAdd onClick={() => addToCart(item)} />
                  </div>
                </div>
              </div>
            </div>
          ))
          )}
        </div>

        <div className='footer-cart'>
          <hr />
          <p className='total-price'>Total: R$ {calcularTotal().toFixed(2)}</p>


          <Link to="/payment">
            FINALIZAR COMPRA</Link>
        </div>
      </div>
      <div className='navbar'>
        <div>
          <h1>Nana Livros</h1>
        </div>
        <ul>
          <li>
          <div className='QtdInCart' onClick={abrircarrinho}>{cart.length}</div>
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
