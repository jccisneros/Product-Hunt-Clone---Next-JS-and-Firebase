import React from 'react'
import Head from 'next/head'
import Header from './Header'

const Layout = props => {
  return (
    <>

      <Head>
        <html lang="es" />
        <title> ProductHunt with Next & Firebase </title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto+Slab:wght@400;700&display=swap" rel="stylesheet" /> 
        <link rel="stylesheet" href="/static/css/app.css" />
      </Head>

      <Header />      

      <main>
        { props.children }
      </main>

    </>
   );
}
 
export default Layout