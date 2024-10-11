import './App.css'
import Logo from './components/Logo'

const optionsText = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS']

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
      </header>
    </div>
  )
}

export default App
