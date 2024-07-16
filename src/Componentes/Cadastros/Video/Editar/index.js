import React, { useState } from 'react';
import './Editar.css';

const Editar = () => {
    const [edicaoAberta, setEdicaoAberta] = useState(true);

    const fecharEdicao = () => {
        setEdicaoAberta(false);
    };

    return (
        <>
            {edicaoAberta && (
                <>
                    <div className='overlay'></div>
                    <section className='edicao-video'>
                        <div className='edicao-video-conteudo'>
                            <span className='edicao-video-fechar' onClick={fecharEdicao}>X</span>
                            <h1>Editar Card:</h1>
                            <form>
                                <div className='edicao-formulario'>
                                    <label>Título:</label>
                                    <input type='text' placeholder='Digite o título do vídeo'></input>
                                </div>
                                <div className='edicao-formulario'>
                                    <label>Categoria:</label>
                                    <select>
                                        <option>Selecionar 👆</option>
                                        <option>Indie</option>
                                        <option>Pop</option>
                                        <option>R&B</option>
                                    </select>
                                </div>
                                <div className='edicao-formulario'>
                                    <label>Imagem:</label>
                                    <input type='text' placeholder='Digite o link da imagem'></input>
                                </div>
                                <div className='edicao-formulario'>
                                    <label>Vídeo:</label>
                                    <input type='text' placeholder='Digite o link do vídeo'></input>
                                </div>
                                <div className='edicao-formulario'>
                                    <label>Descrição:</label>
                                    <textarea type='text' placeholder='Digite a descrição do vídeo'></textarea>
                                </div>
                                <div className='edicao-formulario-botao'>
                                    <div className='edicao-formulario-botao-salvar'>
                                        <button type='submit'>Salvar</button>
                                    </div>
                                    <div className='edicao-formulario-botao-reset'>
                                        <button type='reset'>Limpar</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </section>
                </>
            )}
        </>
    );
}

export default Editar;
