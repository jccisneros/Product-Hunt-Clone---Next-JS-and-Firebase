import React from 'react'
import Link from 'next/link'
import { Nav } from '../../shared/styles'

export default function Navigation() {
  return (
    <Nav>
      <Link href="/"> Inicio </Link>
      <Link href="/productos-populares"> Productos Populares </Link>
      <Link href="/nuevo-producto"> Nuevo Producto </Link>
    </Nav>
  )
}