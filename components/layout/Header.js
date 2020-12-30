import React from 'react'
import Link from 'next/link'
import { css } from '@emotion/react'

import { HeaderStyle, ContenedorHeader, Logo, Buton } from '../../shared/styles'

import Buscador from '../ui/Buscador'
import Navigation from './Navigation'


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
              <Link href="/iniciar-sesion"> 
                <Buton
                  bgColor={ true }
                >   
                  Cerrar Sesión
                </Buton>
              </Link>
            </>
          )
          :(
            <>
              <Link href="/iniciar-sesion"> 
                <Buton
                  bgColor={ true }
                >  
                  Iniciar Sesión
                </Buton> 
              </Link>
              <Link href="/crear-cuenta"> 
                <Buton>  Crear Cuenta </Buton> 
              </Link>
            </>
          )}
          
        </div>
      </ContenedorHeader>
    </HeaderStyle>
  )
}
