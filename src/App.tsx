import './App.css'
import Logo from './components/Logo'
import perfil from './assets/perfil.svg'
import sacola from './assets/sacola.svg'

const optionsText = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS']
const icones = [perfil, sacola]

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <Logo></Logo>
        <ul className='options'>
          { optionsText.map( (texto) => (
            <li className='option'><p>{texto}</p></li>
          ) ) }
        </ul>
        <ul className='icones'>
          { icones.map( (icone) => (
            <li className='icone'><img src={icone}></img></li>
          ) ) }
        </ul>        
      </header>
    </div>
  )
}

export default App
