import './Cadastros.css';
import Video from './Video';

const Cadastros = (props) => {

    const css = { backgroundColor: props.corDoFundo }

    return (
        <section className='cadastro'>
            <h3 style={css}>{props.nome}</h3>
            <div className='cadastro-box'>
                <div>
                    <Video />
                </div>
                <div>
                    <Video />
                </div>
                <div>
                    <Video />
                </div>
            </div>
        </section>
    )
}

export default Cadastros;