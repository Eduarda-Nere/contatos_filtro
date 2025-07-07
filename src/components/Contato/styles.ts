import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Botao } from '../../styles'

export const Card = styled.div`
  background-color: ${variaveis.branco};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 24px;
  margin-bottom: 24px;
  border-radius: 12px;
  border-left: 4px solid ${variaveis.verdeAgua};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`

export const Nome = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
  color: ${variaveis.azulEscuro};
`

export const Email = styled.p`
  font-size: 14px;
  margin-bottom: 8px;
  color: ${variaveis.azulMedio};
`

export const Telefone = styled.p`
  font-size: 14px;
  margin-bottom: 16px;
  color: ${variaveis.azulMedio};
`

export const CampoEdicao = styled.input`
  width: 100%;
  padding: 8px 12px;
  margin-bottom: 12px;
  border: 1px solid ${variaveis.azulClaro};
  border-radius: 6px;
  font-size: 14px;
  color: ${variaveis.azulEscuro};
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${variaveis.verdeAgua};
    box-shadow: 0 0 0 2px ${variaveis.verdeAguaClaro};
  }
`

export const BarraAcoes = styled.div`
  border-top: 1px solid ${variaveis.cinzaMedio};
  padding-top: 16px;
  display: flex;
  gap: 8px;
`

export const BotaoRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};

  &:hover {
    background-color: #c0392b;
  }
`

export const BotaoCancelar = styled(Botao)`
  background-color: ${variaveis.cinzaEscuro};

  &:hover {
    background-color: #616a6b;
  }
`
