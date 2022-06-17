import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        --pink: #cc336a;
        --pink-light: #d65c88;
        --green: #33CC95;
        --red: #E52E4D;
        --shape: #FFFFFF;
        --title: #363F5F;
        --text: #696d7c;
        --placeholder: #969CB2;
        --border: #D7D7D7;
        --input: #E7E9EE;
        --background: #F0F2F5;
    }
    
    //font-size:  16px (Desktop)

    // REM = 1rem = 16px

    html{
        @media (max-width: 1080px) {
            font-size: 93.75% // 15px
        }

        @media (max-width: 728px) {
            font-size: 87.5% // 14px
        }
    }

    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased; //aumenta nitidez da fonte
    }

    body, button, textarea, input{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }

    button{
        cursor: pointer;
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay{
        background: rgb(0,0,0,.5);
        position:fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content{
        width: 100%;
        max-width: 576px;
        background-color: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
    }

    .react-modal-close{
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background-color: transparent;

        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.5)
        }
    }
`