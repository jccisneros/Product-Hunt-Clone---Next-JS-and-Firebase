import React from 'react'
import { css } from '@emotion/react'
import { InputText, ButtonSearch } from '../../shared/styles'


export default function Buscador() {
  return (
    <form 
      css={ css`
        position: relative;
      `}
    >
      <InputText type="text"defaultValue="Buscar" />
      <ButtonSearch type="submit">
        Buscar Productos
      </ButtonSearch>
    </form>
  )
}
