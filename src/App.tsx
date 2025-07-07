import { Provider } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import store from './store'
import EstiloGlobal, { Container } from './styles'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Router>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/novo" element={<Cadastro />} />
          </Routes>
        </Container>
      </Router>
    </Provider>
  )
}

export default App
