import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

type Props = {
  ativo: boolean
}

export const Card = styled.div<Props>`
  padding: 12px;
  border: 1px solid
    ${(props) => (props.ativo ? variaveis.verdeAgua : variaveis.azulClaro)};
  background-color: ${(props) =>
    props.ativo ? variaveis.verdeAguaClaro : variaveis.azulMedio};
  color: ${variaveis.branco};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`

export const Contador = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
  margin-bottom: 4px;
`

export const Label = styled.span`
  font-size: 14px;
  font-weight: 500;
`
