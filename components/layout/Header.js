import React from 'react'
import Link from 'next/link'
import { css } from '@emotion/react'

import Buscador from '../ui/Buscador'
import Navigation from './Navigation'

import { HeaderStyle, ContenedorHeader, Logo, Buton } from '../../styles/styles'

export default function Header() {

  const usuario = false;
  
  return (
    <HeaderStyle>
      <ContenedorHeader>
        <div
          css={ css`
            display: flex;
            align-items: center;
          `}
        >
          <Link href="/">
            <Logo>P</Logo>
          </Link>          
          <Buscador />
          <Navigation />
        </div>
        <div
          css={ css`
            display: flex;
            align-items: center;
          `}
        >
          { usuario ? (
            <>
              <p
                css={ css`
                  margin-right: 2rem;
                `}
              > Hola: José </p>
              <Buton
                bgColor={ true }
              >   
                Cerrar Sesión
              </Buton>
            </>
          )
          :(
            <>
              <Link href="/"> 
                <Buton
                  bgColor={ true }
                >  
                  Iniciar Sesión
                </Buton> 
              </Link>
              <Link href="/"> 
                <Buton>  Crear Cuenta </Buton> 
              </Link>
            </>
          )}
          
        </div>
      </ContenedorHeader>
    </HeaderStyle>
  )
}
