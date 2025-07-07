import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editar, remover } from '../../store/reducers/contatos'
import * as S from './styles'
import { Botao, BotaoSalvar } from '../../styles'

export type Props = {
  id: number
  nome: string
  email: string
  telefone: string
}

const Contato = ({
  id,
  nome: nomeOriginal,
  email: emailOriginal,
  telefone: telefoneOriginal
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [nomeEditado, setNomeEditado] = useState(nomeOriginal)
  const [emailEditado, setEmailEditado] = useState(emailOriginal)
  const [telefoneEditado, setTelefoneEditado] = useState(telefoneOriginal)

  const salvarEdicao = () => {
    if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(nomeEditado)) {
      alert('Nome deve conter apenas letras!')
      return
    }

    if (!/^\d+$/.test(telefoneEditado.replace(/\D/g, ''))) {
      alert('Telefone deve conter apenas números!')
      return
    }

    dispatch(
      editar({
        id,
        nome: nomeEditado,
        email: emailEditado,
        telefone: telefoneEditado
      })
    )
    setEstaEditando(false)
  }

  return (
    <S.Card>
      {estaEditando ? (
        <>
          <S.CampoEdicao
            as="input"
            type="text"
            placeholder="Nome"
            value={nomeEditado}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const value = e.target.value
              if (/^[a-zA-ZÀ-ÿ\s]*$/.test(value) || value === '') {
                setNomeEditado(value)
              }
            }}
            required
          />
          <S.CampoEdicao
            as="input"
            type="email"
            placeholder="E-mail"
            value={emailEditado}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmailEditado(e.target.value)
            }
            required
          />
          <S.CampoEdicao
            as="input"
            type="tel"
            placeholder="Telefone"
            value={telefoneEditado}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const value = e.target.value.replace(/\D/g, '')
              let formattedValue = ''
              if (value.length > 0) {
                formattedValue = `(${value.substring(0, 2)}`
                if (value.length > 2) {
                  formattedValue += `) ${value.substring(2, 7)}`
                }
                if (value.length > 7) {
                  formattedValue += `-${value.substring(7, 11)}`
                }
              }
              setTelefoneEditado(formattedValue)
            }}
            maxLength={15}
            required
          />

          <S.BarraAcoes>
            <BotaoSalvar as="button" onClick={salvarEdicao}>
              Salvar
            </BotaoSalvar>
            <S.BotaoCancelar
              as="button"
              onClick={() => {
                setEstaEditando(false)
                setNomeEditado(nomeOriginal)
                setEmailEditado(emailOriginal)
                setTelefoneEditado(telefoneOriginal)
              }}
            >
              Cancelar
            </S.BotaoCancelar>
          </S.BarraAcoes>
        </>
      ) : (
        <>
          <S.Nome>{nomeOriginal}</S.Nome>
          <S.Email>{emailOriginal}</S.Email>
          <S.Telefone>{telefoneOriginal}</S.Telefone>
          <S.BarraAcoes>
            <Botao as="button" onClick={() => setEstaEditando(true)}>
              Editar
            </Botao>
            <S.BotaoRemover as="button" onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoRemover>
          </S.BarraAcoes>
        </>
      )}
    </S.Card>
  )
}

export default Contato
