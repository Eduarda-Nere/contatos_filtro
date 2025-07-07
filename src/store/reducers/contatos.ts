import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nome: 'Eduarda',
      email: 'eduardanere890@gmail.com',
      telefone: '(19) 97777-7777'
    },
    {
      id: 2,
      nome: 'Daniel',
      email: 'daniel@gmail.com',
      telefone: '(19) 98888-8888'
    },
    {
      id: 3,
      nome: 'Edvania',
      email: 'edvania@gmail.com',
      telefone: '(19) 96666-6666'
    },
    {
      id: 4,
      nome: 'João',
      email: 'joao@gmail.com',
      telefone: '(19) 95555-5555'
    },
    {
      id: 5,
      nome: 'Davi',
      email: 'davi@gmail.com',
      telefone: '(19) 94444-4444'
    },
    {
      id: 6,
      nome: 'Manteguinha',
      email: 'manteguinha@gmail.com',
      telefone: '(19) 93333-3333'
    },
    {
      id: 7,
      nome: 'Apolo',
      email: 'apolo@gmail.com',
      telefone: '(19) 92222-2222'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((c) => c.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const index = state.itens.findIndex((c) => c.id === action.payload.id)
      if (index >= 0) {
        state.itens[index] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoJaExiste = state.itens.find(
        (c) => c.email.toLowerCase() === action.payload.email.toLowerCase()
      )

      if (contatoJaExiste) {
        alert('Já existe um contato com este e-mail')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]
        const novoContato = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(novoContato)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions
export default contatosSlice.reducer
