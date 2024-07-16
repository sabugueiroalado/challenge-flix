import React from 'react';
import './Cabecalho.css';
import { Link } from 'react-router-dom';

function Cabecalho() {
    return (
        <header>
            <div className="cabecalho-container">
                <img className="cabecalho-img" src="/imagens/logo.png" alt="Logo do alura flix" />
                <div className='cabecalho-botoes'>
                    <Link to="/">
                        <button className="botao-home">
                            Home
                        </button>
                    </Link>
                    <Link to="/adicionar-video">
                        <button className="botao-adicionar-video">
                            Adicionar Vídeo
                        </button>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Cabecalho;
