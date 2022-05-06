import Styled from 'styled-components'

export const ButtonStyle = Styled.button`
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