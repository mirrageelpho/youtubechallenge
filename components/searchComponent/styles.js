
import Styled from 'styled-components'

export const Container = Styled.div`
    display: flex;
    
    @media (max-width: 600px) { //<= 
        width: 100%;
        flex-direction: column;
        padding: 0 10px;
        align-items: center;
    }
`

export const Search = Styled.input`
  border: none;
  width: 250px;
  border-bottom: 2px solid var(--red);
  font-size: 1.2rem;
  ::placeholder {
      font-size: 1.2rem
  }
    @media (max-width: 600px) { //<= 
        width: 100%;
        align-self: center;
    }
`

export const Button = Styled.button`
    background-color: var(--red);
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    margin: 0 10px;
    transition: 1s all;
    cursor: pointer;
    :hover {
        background-color: var(--red-strong);
    }
    @media (max-width: 600px) { 
        padding: 5px 18px; 
        margin-top: 8px;
        width: 100%;
    }
`