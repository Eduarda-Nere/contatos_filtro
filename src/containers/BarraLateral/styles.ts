import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Aside = styled.aside`
  padding: 24px;
  background-color: ${variaveis.azulEscuro};
  height: 100vh;
`

export const Filtros = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-top: 24px;
`

export const CampoBuscaWrapper = styled.div`
  position: relative;
  margin-bottom: 24px;
`

export const CampoBusca = styled.input`
  width: 100%;
  padding: 12px 16px 12px 40px;
  border-radius: 8px;
  border: none;
  background-color: ${variaveis.azulMedio};
  color: ${variaveis.branco};
  font-size: 14px;
  transition: all 0.3s ease;

  &::placeholder {
    color: ${variaveis.azulClaro};
  }

  &:focus {
    background-color: ${variaveis.branco};
    color: ${variaveis.azulEscuro};
    outline: none;
    padding-left: 16px;

    &::placeholder {
      color: ${variaveis.cinzaMedio};
    }

    + div {
      opacity: 0;
    }
  }
`

export const LupaIconWrapper = styled.div`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: ${variaveis.azulClaro};
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`

export const BotaoVoltar = styled.button`
  width: 100%;
  padding: 12px;
  background-color: ${variaveis.verdeAgua};
  color: ${variaveis.branco};
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${variaveis.verdeAguaEscuro} !important;
  }
`
