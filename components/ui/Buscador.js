import React from 'react'
import { css } from '@emotion/react'
import { InputText, InputSubmit } from '../../styles/styles'


export default function Buscador() {
  return (
    <form 
      css={ css`
        position: relative;
      `}
    >
      <InputText type="text"defaultValue="Buscar" />
      <InputSubmit type="submit">
        Buscar Productos
      </InputSubmit>
    </form>
  )
}
