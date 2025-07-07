import { useDispatch, useSelector } from 'react-redux'
import { alterarFiltro } from '../../store/reducers/filtro'
import * as S from './styles'
import { RootReducer } from '../../store'

export type Props = {
  legenda: string
  criterio: 'nome' | 'email' | 'telefone' | 'todos'
}

const FiltroCard = ({ legenda, criterio }: Props) => {
  const dispatch = useDispatch()
  const { filtro, contatos } = useSelector((state: RootReducer) => state)

  const verificaEstaAtivo = () => {
    return filtro.criterio === criterio
  }

  const contarContatos = () => {
    if (criterio === 'todos') return contatos.itens.length
    return contatos.itens.filter((item) => {
      if (criterio === 'nome') return item.nome
      if (criterio === 'email') return item.email
      if (criterio === 'telefone') return item.telefone
      return false
    }).length
  }

  const filtrar = () => {
    dispatch(
      alterarFiltro({
        criterio,
        termo: filtro.termo
      })
    )
  }

  const contador = contarContatos()
  const ativo = verificaEstaAtivo()

  return (
    <S.Card as="div" ativo={ativo} onClick={filtrar}>
      <S.Contador as="span">{contador}</S.Contador>
      <S.Label as="span">{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroCard
