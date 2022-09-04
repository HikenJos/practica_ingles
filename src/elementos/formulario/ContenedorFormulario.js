import styled from "styled-components";

const Formulario = styled.form`
padding: 0 2.5rem; /* 40px */

height: 100%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
text-align: flex-end;
input {
    width: 20%;
    text-align: flex-start ;
    padding: .2rem 0;
    font-family: 'Nunito', 'sans-serif';
}

@media(max-width: 60rem){ /* 950px */
    justify-content: space-evenly;
    width: 100%;
    height: 70%;
    input {
    width: 58%;
    text-align: flex-start ;
    padding: .8rem 0;
    font-family: 'Nunito', 'sans-serif';
}
}
`;

export default Formulario;