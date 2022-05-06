import { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeContext, Theme } from '../context/themeContext'
import { ThemeProvider } from 'styled-components'
import { SessionProvider } from "next-auth/react"
import GlogalStyles from '../styles/globalStyles';

import { lightTheme, darkTheme } from '../styles/themes';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps):JSX.Element {

    let themeDefault:Theme = Theme.dark
    
    if(typeof window !== 'undefined'){
      if(window.localStorage.getItem('theme'))
        themeDefault = window
          .localStorage
          .getItem('theme') === 'light' 
            ? Theme.light 
          : Theme.dark
    }

    const [ theme, setTheme ] = useState(themeDefault)
    const [ localTheme, setLocalTheme ] = useState(lightTheme)
    const [ onSSR, setOnSSR ] = useState(false)
    
    useEffect(()=>{
      setOnSSR(true)
    },[])

    useEffect(()=>{
      theme === 'dark' 
      ? setLocalTheme(darkTheme)
      : setLocalTheme(lightTheme)
      window.localStorage.setItem('theme', theme)
    }, [theme])

    
    return (
      <>
        <Head>
          <title>Youtube Challenge</title>
          <meta name="description" content="Test Storm Youtube Challenge" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {onSSR &&
        <ThemeContext.Provider value={{ theme, setTheme }} >
          <ThemeProvider theme={localTheme} >
            <GlogalStyles />
            <SessionProvider session={session}>
              <Component {...pageProps} />
            </SessionProvider>
          </ThemeProvider>
        </ThemeContext.Provider>
        }
    </>
    );
  
}

export default MyApp
