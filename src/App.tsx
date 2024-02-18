import './App.css'
import Home from './paginas/home/Home'
import Contador from './paginas/contador/Contador'

function App() {

  return (
  <>
    <Home titulo="Esse é um componente com props"
    texto="agora já estamos trabalhando com props - componente chamado com sucesso" />

    <Contador />

  </>
  )
}

export default App
