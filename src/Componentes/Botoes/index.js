import './Botoes.css'

const Botoes = (props) => {
    return (
        <button className='botao'>
            {props.children}
        </button>
    )
}
export default Botoes;