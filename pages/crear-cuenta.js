import React from 'react'
import { css } from '@emotion/react'
import Layout from '../components/layout'

import useValidation from '../hooks/useValidation'
import validarCrearCuenta from '../validation/validarCrearCuenta'

import { Form, Field, InputSubmit } from '../shared/styles'

export default function CrearCuenta() {

  const STATE_INICIAL = {
    nombre: '',
    email: '',
    contraseña: ''
  }

  const crearCuenta = () => {
    console.log('Creando cuenta...')    
  }

  const { value, error, submitForm, handleSubmit, handleChange } = useValidation(STATE_INICIAL, validarCrearCuenta, crearCuenta)

  return (
    <>
      <Layout>
        <>
          <h1
            css={ css`
              text-align: center;
              margin-top: 3rem;              
            `}
          > Crear Cuenta </h1>
          <Form>
            <Field>
              <label htmlFor="nombre">Nombre</label>
              <input 
                type="text" 
                id="nmbre"
                placeholder="Ingresa tu Nombre"
                name="nombre"
              />
            </Field>
            <Field>
              <label htmlFor="email">Email</label>
              <input 
                type="text" 
                id="email"
                placeholder="Ingresa tu E-mail"
                name="email"
              />
            </Field>
            <Field>
              <label htmlFor="">Contraseña</label>
              <input 
                type="password" 
                id="contraseña"
                placeholder="Ingresa tu Contraseña"
                name="contraseña"
              />
            </Field>
            <InputSubmit
              type="submit"              
              bgColor={ true }
              value="Crear Cuenta"
            />
          </Form>
        </>
      </Layout>
    </>
  )
}