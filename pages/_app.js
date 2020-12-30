import React from 'react'
import 'normalize.css'
import { globalStyles } from '../shared/styles'

const MyApp = ({ Component, pageProps }) => (    
  <>
    { globalStyles }
    <Component {...pageProps} />  
  </>
)

export default MyApp