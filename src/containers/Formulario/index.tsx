import { useState, FormEvent } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { cadastrar } from '../../store/reducers/contatos'
import { MainContainer, Titulo, Campo, BotaoSalvar } from '../../styles'
import { Form } from './styles'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const cadastrarContato = (e: FormEvent) => {
    e.preventDefault()
    dispatch(
      cadastrar({
        nome,
        email,
        telefone
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Novo Contato</Titulo>
      <Form as="form" onSubmit={cadastrarContato}>
        <Campo
          as="input"
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value
            if (/^[a-zA-ZÀ-ÿ\s]*$/.test(value) || value === '') {
              setNome(value)
            }
          }}
          required
        />
        <Campo
          as="input"
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          required
        />
        <Campo
          as="input"
          type="tel"
          placeholder="Telefone"
          value={telefone}
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
            setTelefone(formattedValue)
          }}
          maxLength={15}
          required
        />
        <BotaoSalvar as="button" type="submit">
          Cadastrar
        </BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
