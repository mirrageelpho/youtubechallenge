import styled from 'styled-components'

export const Content = styled.div`
      height: 100%;
      background: var(--bg); 
      display: grid;
      grid-template-areas: 
          "headerbar"
          "main"
          "footer";
      grid-template-columns: auto;
      grid-template-rows: 80px auto 180px;
`

export const HeaderBar = styled.header`
      grid-area: headerbar;
      border-bottom: 1px solid var(--red);
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding:0 20px;
      div:last-child{
            
            display: flex;
            justify-content: flex-end;
            align-content: center;
            @media (max-width: 800px) { //<= 
                  padding: 5px 18px; 
                  margin-bottom: 5px;
                  width: 100%;
                  flex-direction: column;
                  max-width: 120px;
            }
      }
`

export const Main = styled.main`
      grid-area: main;
      display: flex;
      max-width: 1050px;
      justify-content: center;
      flex-wrap: wrap;
      padding: 10px;
      gap: 8px;
      margin: 0 auto;
`

export const Footer = styled.footer`
      grid-area: footer;
      background: var(--bg); 
      min-height: 100px;
      padding: 20px;
      margin-top: 50px;
      text-align: center;
      h3 {
            font-size: 1.2rem;
            font-weight: 300;
            margin-bottom: 3px;

      }
      p {
            font-weight: 100;
            font-size: 1.1rem;
      }
      a {
            text-decoration: none;
            font-weight: 100;
            font-size: 1.1rem;
      }
`
export const Button = styled.button`
        border: none;
        color: var(--gray);
        padding: 10px 5px;
        text-align: center;
        text-decoration: none;
        font-size: 16px;
        margin: 0 10px;
        max-width: 100px;
        cursor: pointer;
        :hover {
            color: var(--red);
            border-bottom: 1px solid var(--red);
        }
        @media (max-width: 800px) { //<= 
            margin-bottom: 5px;
            padding: 3px 5px;
            width: 100%;
            
        }
`
