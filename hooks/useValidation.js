import React, { useState, useEffect } from 'react'

const useValidation = ( initialState, validation, fnc ) => {

  const [value, setValue] = useState(initialState)
  const [error, setError] = useState({})
  const [submitForm, setSubmitForm] = useState(false)

  useEffect(() => {
    
    if( submitForm ){
      
      const noError = Object.keys(error).length === 0

      if( noError ) {
        fnc()
      }

      setSubmitForm(true)

     }    
  }, [input])

  const handleChange = e => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {

    e.preventDefault()
    const errorValidation = validation(value)
    setErrores(errorValidation)
    setSubmitForm(true)
    
  }

  return{
    value,
    error,
    submitForm,
    handleSubmit,
    handleChange
  }


}

export default useValidation
