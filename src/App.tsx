import Header from './components/Header'
import styled from 'styled-components'
import Research from './components/Research'

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);
`

function App() {

  return (
    <AppContainer>
      <Header />
      <Research />
    </AppContainer>
  )
}

export default App
