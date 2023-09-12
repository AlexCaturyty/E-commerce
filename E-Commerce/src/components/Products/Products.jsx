import React, { useState } from 'react';
import '../Products/Products.css';
import Sapiens from '../../assets/images/livro_sapiens.jpg';
import LeituraDeVerao from '../../assets/images/livro_leitura_de_verao.jpg';
import QuebrandoGelo from '../../assets/images/livro_quebrando-gelo.jpg';
import LivrodosHomens from '../../assets/images/livro_clube_dos_homens.jpg';
import { Button, Snackbar } from '@mui/material';

const Products = ({ addToCart }) => {
  const [showAlert, setShowAlert] = useState(false); // Estado para controlar a exibição do alerta

  const livros = [
    {
      id: 1,
      nome: "Sapiens (Nova edição)",
      preco: 47.46,
      imagem: Sapiens,
      Romance: false,
      Ficcao: false,
      NaoFiccao: true,
    },
    {
      id: 2,
      nome: "Leitura de verão",
      preco: 39.90,
      imagem: LeituraDeVerao,
      Romance: true,
      Ficcao: true,
      NaoFiccao: false,
    },
    {
      id: 3,
      nome: "Quebrando o Gelo",
      preco: 39.90,
      imagem: QuebrandoGelo,
      Romance: true,
      Ficcao: true,
      NaoFiccao: false,
    },
    {
      id: 4,
      nome: "Clube do livro dos homens",
      preco: 39.90,
      imagem: LivrodosHomens,
      Romance: true,
      Ficcao: true,
      NaoFiccao: false,
    },
    {
      id: 5,
      nome: "Loucos por livros",
      preco: 39.90,
      imagem: LeituraDeVerao,
      Romance: true,
      Ficcao: true,
      NaoFiccao: false,
    },
    {
      id: 6,
      nome: "Loucos por livros",
      preco: 39.90,
      imagem: LeituraDeVerao,
      Romance: true,
      Ficcao: true,
      NaoFiccao: false,
    },
  ];

  const handleAddToCart = (livro) => {
    addToCart(livro);
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div>
      <main className="body-container">
        <div className="container-product">
          {livros.map((livro, index) => (
            <div key={index} className={`product-${index + 1}`}>
              <img src={livro.imagem} alt={livro.nome} className="imagem" />
              <p className="nome">{livro.nome}</p>
              <p className="preco">R$ {livro.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
              <Button onClick={() => handleAddToCart(livro)}>Adicionar ao carrinho</Button>
            </div>
          ))}
        </div>
      </main>
      <Snackbar
        open={showAlert}
        autoHideDuration={3000} // Tempo em milissegundos que o alerta ficará visível
        onClose={handleCloseAlert}
        message="Produto adicionado ao carrinho com sucesso!"
      />
    </div>
  );
};

export default Products;