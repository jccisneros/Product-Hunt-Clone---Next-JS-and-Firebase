import React from 'react'
import 'normalize.css'
import { globalStyles } from '../styles/styles'

const MyApp = ({ Component, pageProps }) => (    
  <>
    { globalStyles }
    <Component {...pageProps} />  
  </>
)

export default MyApp