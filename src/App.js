import { useState } from 'react';
import Cabecalho from "./Componentes/Cabecalho";
import Formulario from "./Componentes/Formulario";
import Rodape from "./Componentes/Rodape";

function App() {

  const [videoAdicionado, setVideoAdicionado] = useState([])

  const aoNovoVideoAdicionado = (videosAdicionados) => {
    console.log(videosAdicionados)
    setVideoAdicionado([...videoAdicionado, videosAdicionados])

  }

  return (
    <div className="App">
      <Cabecalho />
      <Formulario aoVideoCadastrado={videosAdicionados => aoNovoVideoAdicionado(videosAdicionados)} />
      <Rodape />


    </div>
  );
}

export default App;
