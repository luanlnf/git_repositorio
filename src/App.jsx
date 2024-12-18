import {useState} from "react";

import Perfil from './components/Perfil';
import Formulario from './components/formulario';
import ReposList from './components/RepoList/Index';

function App() {
  const [nomeUsuario, setNomeUsuario] = useState('');
  return (
    <>
      <input 
    type="text" 
    placeholder="Digite o nome de usuário" 
    onBlur={(e) => {
        setNomeUsuario(e.target.value);
    }} 
/>
      

      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario}/>
        </>
      )}
    </>
  );
}

export default App;
