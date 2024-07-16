import { useState } from 'react'
import Botoes from '../Botoes'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const categorias = [
        'Selecionar 👆',
        'Indie',
        'Pop',
        'R&B'
    ]

    const [titulo, setTitulo] = useState('')
    const [imagem, setImagem] = useState('')
    const [video, setVideo] = useState('')
    const [descricao, setDescricao] = useState('')
    const [categoria, setCategoria] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoVideoCadastrado({
            Título: titulo,
            Imagem: imagem,
            Vídeo: video,
            Descrição: descricao,
            Categoria: categoria
        })
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h1>NOVO VÍDEO</h1>
                <h6>COMPLETE O FORMULÁRIO PARA CRIAR UM CARD DE VÍDEO</h6>
                <div className='formulario-card'>
                    <h2>Criar Card</h2>
                </div>
                <div className='formulario-container'>
                    <div className='formulario-group'>
                        <CampoTexto
                            obrigatorio={true}
                            label='Título'
                            placeholder='Digite o título'
                            valor={titulo}
                            aoAlterado={valor => setTitulo(valor)}
                        />
                    </div>
                    <div className='formulario-group'>
                        <CampoTexto
                            obrigatorio={true}
                            label='Imagem'
                            placeholder='Digite o link da imagem'
                            valor={imagem}
                            aoAlterado={valor => setImagem(valor)}
                        />
                    </div>
                    <div className='formulario-group'>
                        <CampoTexto
                            obrigatorio={true}
                            label='Vídeo'
                            placeholder='Digite o link do vídeo'
                            valor={video}
                            aoAlterado={valor => setVideo(valor)}
                        />
                    </div>
                    <div className='formulario-group'>
                        <CampoTexto
                            obrigatorio={true}
                            label='Descrição'
                            placeholder='Sobre o que é o vídeo?'
                            valor={descricao}
                            aoAlterado={valor => setDescricao(valor)}
                        />
                    </div>
                    <div className='formulario-group'>
                        <ListaSuspensa
                            label='Categorias'
                            itens={categorias}
                            valor={categoria}
                            aoAlterado={valor => setCategoria(valor)}
                        />
                    </div>
                    <div className='formulario-group'>
                        <Botoes>Guardar</Botoes>
                        <Botoes>Limpar</Botoes>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default Formulario
