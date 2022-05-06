import Styled from 'styled-components'

export const Cont = Styled.div`
    position: fixed;
    background: var(--shadow-dark);
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    height: 100%;
    z-index: 2;
    justify-content: center;
    align-items: center;
    .Player{
        background: var(--gray-strong);;
        -webkit-box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.55); 
        box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.55);
    }

`