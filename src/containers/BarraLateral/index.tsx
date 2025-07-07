import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

import FiltroCard from '../../components/FiltroCard'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'
import * as S from './styles'
import { Botao } from '../../styles'

type Props = {
  mostrarFiltros: boolean
}

const SearchIcon = FaSearch as React.ComponentType<
  React.SVGProps<SVGSVGElement>
>

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <S.CampoBuscaWrapper>
              <S.CampoBusca
                as="input"
                type="text"
                placeholder="Buscar contato"
                value={termo || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  dispatch(alterarTermo(e.target.value))
                }
              />
              <S.LupaIconWrapper>
                <SearchIcon />
              </S.LupaIconWrapper>
            </S.CampoBuscaWrapper>
            <S.Filtros>
              <FiltroCard criterio="todos" legenda="Todos" />
              <FiltroCard criterio="nome" legenda="Nome" />
              <FiltroCard criterio="email" legenda="E-mail" />
              <FiltroCard criterio="telefone" legenda="Telefone" />
            </S.Filtros>
          </>
        ) : (
          <Botao as="button" onClick={() => navigate('/')}>
            Voltar
          </Botao>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
