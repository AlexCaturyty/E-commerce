import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Snackbar } from '@mui/material';

import '../Payment/Payment.css';

const Payment = () => {
    const [showPurchaseAlert, setShowPurchaseAlert] = useState(false);
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [name, setName] = useState('');

    const AlertOpen = () => {
        setShowPurchaseAlert(true);
        setTimeout(() => {
            window.location.href = "/home";
        }, 2000); 
      };

    const AlertClosed = () => {
        setShowPurchaseAlert(false);
      };

    return (
        
        <div className='body'>
            <div className='container'>
                <h1>Tela de Pagamento</h1>
                <form>
                    <div>
                        <label htmlFor="cardNumber">Número do Cartão:</label>
                        <input
                            type="text"
                            id="cardNumber"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="expiryDate">Data de Validade:</label>
                        <input
                            type="text"
                            id="expiryDate"
                            value={expiryDate}
                            onChange={(e) => setExpiryDate(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="cvv">CVV:</label>
                        <input
                            type="text"
                            id="cvv"
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="name">Nome no Cartão:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="">
                        <Link to="" onClick={() => AlertOpen()}>
                            Processar Pagamento
                        </Link>
                    </div>
                </form>
            </div>
            <Snackbar
        open={showPurchaseAlert}
        autoHideDuration={3000}
        onClose={AlertClosed}
        message="Produto comprado com sucesso!"
      />
        </div>
    );
};

export default Payment;
