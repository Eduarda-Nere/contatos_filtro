import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${variaveis.cinzaClaro};
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 240px auto;
`

export const MainContainer = styled.main`
  padding: 40px;
  height: 100vh;
  overflow-y: auto;
  background-color: ${variaveis.branco};
`

export const Titulo = styled.h2`
  display: block;
  margin-bottom: 32px;
  font-size: 24px;
  font-weight: 600;
  color: ${variaveis.azulEscuro};
`

export const Campo = styled.input`
  padding: 12px;
  background-color: ${variaveis.branco};
  border-radius: 8px;
  font-weight: 500;
  color: ${variaveis.azulEscuro};
  border: 1px solid ${variaveis.azulClaro};
  width: 100%;
  margin-bottom: 16px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${variaveis.verdeAgua};
    box-shadow: 0 0 0 2px ${variaveis.verdeAguaClaro};
  }
`

export const Botao = styled.button`
  font-weight: 600;
  font-size: 14px;
  color: ${variaveis.branco};
  padding: 10px 16px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.azulMedio};
  border-radius: 8px;
  margin-right: 8px;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${variaveis.verdeAguaEscuro};
  }
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verdeAguaEscuro};

  &:hover {
    background-color: ${variaveis.verdeAgua};
  }
`

export default EstiloGlobal
