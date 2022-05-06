import { createGlobalStyle } from 'styled-components';

const GlogalStyles = createGlobalStyle`
    *, html {
        background: var(--bg);
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        color: var(--text);
    }

    *, button, input, textarea {
        border: 0;
        outline: 0;
        background: none;
        font-family: --apple-system, BlinkMacSystemFont, sans-serif
    }
    
    :root{
        --blue:  #6699cc;
        --red: #af4c4c;
        --red-strong: #711717;
        --bg: ${({theme})=>theme.bg};
        --text: ${({theme})=>theme.text};
        --gray: #4e4e4e;
        --gray-strong: #1d1d1d;
        --shadow: rgba(0, 0, 0, 0.3);
        --shadow-dark: rgba(0, 0, 0, 0.8);
    }

`;

export default GlogalStyles