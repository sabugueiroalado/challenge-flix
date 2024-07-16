import React from 'react';
import Cabecalho from './Componentes/Cabecalho';
import Rodape from './Componentes/Rodape';
import Cadastros from './Componentes/Cadastros';
import Destaque from './Componentes/Destaque';

function Home() {

    const tema = [
        {
            nome: 'Indie',
            cor: '#6bd1ff'
        },
        {
            nome: 'Pop',
            cor: '#00c86f'
        },
        {
            nome: 'R&B',
            cor: '#ffba05'
        }
    ]

    return (
        <div>
            <Cabecalho />
            <Destaque />
            {tema.map(temas => <Cadastros 
            key={temas.nome} 
            nome={temas.nome} 
            corDoFundo={temas.cor} 
            
            
            />)}
            <Rodape />
        </div>
    );
};

export default Home;
