import Styled from 'styled-components'
import { ButtonStyle } from '../../components/buttonComponent/styles'

export const Button = Styled(ButtonStyle)`
    background-color: var(--red);
    :hover {
        background-color: var(--red-strong);
    }
`