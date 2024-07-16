import { useState } from 'react';
import './Video.css';
import Editar from './Editar'

const Video = () => {
    const [editando, setEditando] = useState(false);

    const handleEditar = () => {
        setEditando(true);
    };

    const handleDeletar = () => {

        console.log('Vídeo deletado');
    };

    return (
        <div className='video-container'>
            <div className='video-container-miniatura'>
                <iframe
                    width="432"
                    height="261"
                    src="https://www.youtube.com/embed/aezstCBHOPQ"
                    title="Hozier - Too Sweet (Official Lyric Video)"
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen>
                </iframe>
            </div>

            <div className='video-container-miniatura-funcoes'>
                <div className='video-container-miniatura-funcoes-click' onClick={handleDeletar}>
                    <img src='/imagens/lixeira.png' alt='' />
                    <p>Deletar</p>
                </div>
                <div className='video-container-miniatura-funcoes-click' onClick={handleEditar}>
                    <img src='/imagens/editar.png' alt='' />
                    <p>Editar</p>
                </div>
            </div>

            {editando && <Editar onClose={() => setEditando(false)} />}
        </div>
    );
};

export default Video;
