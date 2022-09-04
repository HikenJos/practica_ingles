import styled from "styled-components";
import theme from "../../Tema";

const ContenedorInput= styled.div`
    display: flex;
    justify-content: center;
    margin: .5rem 0;  /* 40px */
    @media(max-width: 60rem){ /* 950px */
         width: 100%;
      /* 32px */
    }
`;

const Input = styled.input`
    line-height: 28px;
    align-items: center;
    border: 2px solid transparent;
    border-bottom-color: #777;
    padding: .2rem 0;
    outline: none;
    background-color: transparent;
    color: ${theme.inputColor};
    transition: .3s cubic-bezier(0.645, 0.045, 0.355, 1);

 :focus, :hover {
    outline: none;
    padding: .2rem 1rem;
    border-radius: 1rem;
    border-color: ${theme.colorHover};
   }
   
   ::placeholder {
    color: rgba(13,13,13, 1);
    text-align: center;
   }

    :focus::placeholder {
    opacity: 0;
    transition: opacity .3s;
   }

   @media(max-width: 60rem){
        font-size: 0.9rem; 
    }
`;

const InputGrande = styled.input`
    line-height: 28px;
    font-size: 1.8rem;
    text-align: center;
    border: 2px solid transparent;
    border-bottom-color: #777;
    padding: 2rem 4rem;
    outline: none;
    background-color: transparent;
    color: ${theme.colorPrimario};
    transition: .3s cubic-bezier(0.645, 0.045, 0.355, 1);
    text-transform: uppercase;
 :focus, :hover {
    outline: none;
    padding: 2rem 4rem;
    border-radius: 1rem;
    border-color: ${theme.colorHover};
   }
   
   ::placeholder {
    color: rgba(13,13,13, 0.5);
    text-align: center;
    text-transform: uppercase;
   }

    :focus::placeholder {
    opacity: 0;
    transition: opacity .3s;
   }

   @media(max-width: 60rem){
        font-size: ${(props) => props.form ? '0.9rem' : '1.8rem'}; 
        padding: ${(props) => props.form ? '2rem 2rem' : '2rem 0.6rem'};
        :focus, :hover {
            outline: none;
            padding: 2rem 0.6rem;
            border-radius: 1rem;
            border-color: ${theme.colorHover};
        }
    }
`;

export {Input, ContenedorInput, InputGrande};