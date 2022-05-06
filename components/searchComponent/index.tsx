
import { FunctionComponent, useState } from 'react'
import {
  Container,
  Button,
  Search
} from './styles'

const SearchComponent: FunctionComponent = () => {
  const [ query, setQuery ] = useState('')

  function handleChange(event: any){
    console.log(event.target.value)
    setQuery(event.target.value)
  }

  function mountQuery(){
    const { location : { origin, pathname }} = window
    window.location.href = `${origin}${pathname}?q=${query}`
  }

  return(
      <Container>
        <Search type="text" placeholder="Pesquisar por vídeos" onChange={handleChange}/>
        <Button onClick={()=>mountQuery()}> Pesquisar </Button>
      </Container>
  )
}
  
  export default SearchComponent