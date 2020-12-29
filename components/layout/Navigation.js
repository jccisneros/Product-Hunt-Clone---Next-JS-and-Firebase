import React from 'react'
import Link from 'next/link'
import { Nav } from '../../styles/styles'

export default function Navigation() {
  return (
    <Nav>
      <Link href="/"> Inicio </Link>
      <Link href="/nosotros"> Populares </Link>
      <Link href="/nosotros"> Nuevos Productos </Link>             
    </Nav>
  )
}