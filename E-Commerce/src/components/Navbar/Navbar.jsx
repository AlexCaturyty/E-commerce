import React, { useState } from 'react';
import '../../components/Navbar/Navbar.css';
import { AiOutlineShoppingCart, AiOutlineClose } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'
import QuebrandoGelo from '../../assets/images/livro_quebrando-gelo.jpg'

const Navbar = ({setshow}) => {

    const [carrinhoAberto, setCarrinhoAberto] = useState(false);

    const abrircarrinho = () => {
        setCarrinhoAberto(true);
    };

    const fecharcarrinho = () => {
        setCarrinhoAberto(false);
    };

    return (
        <div>
            <div className={`cart ${carrinhoAberto ? 'open' : ''}`}>
                <div className='cart-header'>
                    <p>Meu carrinho</p>
                        <AiOutlineClose className='icon' onClick={fecharcarrinho}/>
                    
                </div>

                <div className='cart-products'>
                    
                    <img src={QuebrandoGelo} alt="" />

                    <div className='products-details'>
                    <p>Quebrando o Gelo</p>
                    <p>R$: 40,00</p>
                    </div>
                    

                </div>

                <p className='total-price'>R$ 250</p>
                <button>FINALIZAR COMPRA</button>
            </div>
            <div className='navbar' >
                <div onClick={() => setshow(true)}>
                    <h1>Nana Livros</h1>
                </div>
                <ul>
                    <li onClick={ () => setshow(false)}>
                        <AiOutlineShoppingCart className="icon" onClick={abrircarrinho} />
                    </li>
                    <li>
                        <BsPerson className="icon" />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;