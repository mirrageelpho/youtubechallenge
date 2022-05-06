import { useCallback, useEffect, useState } from 'react'
import { useSession, signOut } from "next-auth/react"
import SearchComponent from '../../components/searchComponent'
import { useTheme, Theme } from "../../context/themeContext"

import {
    Content,
    HeaderBar,
    Main,
    Footer,
    Button
} from './styles'

interface LayoutPropts { children: JSX.Element | JSX.Element[] }


const DashboardLayout = ({children }: LayoutPropts ): JSX.Element => {


  const { theme, setTheme } = useTheme()

  const toogleTheme = useCallback(()=>{
      if(theme === 'light') {
        setTheme(Theme.dark) 
        localStorage.setItem('theme', Theme.dark)
      }else{
        setTheme(Theme.light)
        localStorage.setItem('theme', Theme.light)
      }
  },[theme])

  
  const [ user, setUser ] = useState()


  return (
    <Content>
      <HeaderBar>
          <div>
            <h3>Youtube Challenge</h3>
          </div>
          <SearchComponent />
          <div>
            <Button onClick={()=>toogleTheme()}>{theme === 'dark' ? 'Light' : 'Dark'}</Button>
            <Button onClick={()=>signOut()}>Sair</Button>
          </div>
      </HeaderBar>

      <Main >
        {children}
      </Main>
      <Footer >
        <h3>Youtube Challenge</h3>
        <p>By Aécio Cleber</p>
        <a href='https://github.com/mirrageelpho' target="_blank">https://github.com/mirrageelpho</a>
      </Footer>
    </Content>
  )
}

export default DashboardLayout