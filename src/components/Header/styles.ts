import styled from "styled-components";

export const Container = styled.header`
    background-color:  var(--pink);
`

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 10rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button{
        font-size: 1rem;
        border: 0;
        color: var(--shape);
        background-color: var(--pink-light);
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;

        transition: filter 0.2s ;

        &:hover{
            filter: brightness(1.1);
        }
    }
`