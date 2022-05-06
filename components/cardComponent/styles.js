import styled from 'styled-components'

export const VideoBox = styled.div`
    max-width: 250px;
    min-height: 100%;
    padding: 10px;
    -webkit-box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.25); 
    box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.25);
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.5s;

    :hover{
        background-color: var(--blue);
        -webkit-box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.35); 
        box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.35);
    }


    h3 {
        margin: 0;
        font-weight: 300;
        font-size: medium;
    }

    >div {
        p {
            margin: 10px 0;
        }
    }

    @media (max-width: 600px) { //<= 
        display: flex;
        max-width: 472px;
        min-width: 450px;
        border-bottom: 1px solid var(--gray);
        >div{
            margin-left: 10px;
            min-width: 300px;
            max-width: 300px;
        }

    }

`
