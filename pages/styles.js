import Styled from 'styled-components'
import { ButtonStyle } from '../components/buttonComponent/styles'
export const Main = Styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    h1 {
        font-weight: 300;
        font-size: 1.8rem;
        margin-bottom: 5px;
    }
    h2 {
        font-weight: 200;
        font-size: 1.2rem;
    }
    div {
        text-align: center;
    }
`
export const Button = Styled(ButtonStyle)`
    background-color: var(--red);
    margin-top: 20px;
    :hover {
        background-color: var(--red-strong);
    }
`