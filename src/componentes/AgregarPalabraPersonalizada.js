import React, { useState } from 'react';
import Helmet from 'react-helmet';
import {ContainerButton, ContainerHeader, Header} from '../elementos/Cabezera';
import { Formulario,  ContenedorBoton} from '../elementos/formulario/ElementosFormulario';
import agregarPalabraPersonalizada from '../firebase/agregarPalabraPersonalizada';
import { useAuth } from '../contextos/AuthContext';
import Alerta from '../elementos/Alerta';
import {Title} from '../elementos/Titulo';
import { ButtonMP } from '../elementos/BotonMenuPrincipal';
import { Body, ContainerBody } from '../elementos/Cuerpo';
import {InputGrande} from '../elementos/formulario/Input';
import { BtnListado, BtnVolver } from '../elementos/BotonRegresar';

function AddWordNew() {
    const [WordInEnglish, setWordInEnglish] = useState('');
    const [WordInSpanish, setWordInSpanish] = useState('');
    const [alerta, setAlerta] = useState(false);
    const [CambiarAlerta, setCambiarAlerta] = useState({});
    const user = useAuth();

    function HandleChange (e) {
        switch (e.target.name) {
            case 'wordInEnglish':
                setWordInEnglish(e.target.value.replace(/[^a-zA-Z ]/g, ''));
                break;
            case 'wordInSpanish':
                setWordInSpanish(e.target.value.replace(/[^a-zA-Z ]/g, ''));
                break;
            default:
                break;
        }
    }

    function HandleSubmit (e){
        e.preventDefault();
        if(WordInEnglish !== '' && WordInSpanish !== ''){
            agregarPalabraPersonalizada(WordInEnglish, WordInSpanish, user.usuario.uid)
            .then(() => {
                setWordInEnglish('');
                setWordInSpanish('');
                setAlerta(true);
                setCambiarAlerta({tipo: 'exito', mensaje:'AÑADIDO CORRECTAMENTE'});
                document.getElementById('wordInEnglish').focus();
            })
            .catch((e) => {
                setAlerta(true);
                setCambiarAlerta({tipo: 'error', mensaje:'Error desconocido al intentar guardar los datos'});
            });
            
        }else{
            setAlerta(true);
            setCambiarAlerta({tipo: 'error', mensaje:'Por favor rellena todos los campos'});
        }
        
        
    }
    return ( 
    <>
        <Helmet>
            <title>Agrega tus Palabra</title>
        </Helmet>
        <Header>
            <ContainerHeader>
                <Title add>Añade una Palabra Nueva</Title>
                <ContainerButton>
                    <BtnListado ruta='listado'>Listado</BtnListado>
                    <BtnVolver ruta='/practica/custom'>Volver</BtnVolver>
                </ContainerButton>
            </ContainerHeader>           
        </Header>
        <Body>
            <ContainerBody>
                <Formulario onSubmit={HandleSubmit}>
                    <InputGrande form type='text' name='wordInEnglish' id='wordInEnglish' placeholder='Palabra en Ingles' autoComplete='off' value={WordInEnglish} onChange={HandleChange}></InputGrande>
                    <InputGrande form type='text' name='wordInSpanish' id='wordInSpanish' placeholder='Palabra en Español' autoComplete='off' value={WordInSpanish} onChange={HandleChange}></InputGrande>
                    <ContenedorBoton><ButtonMP as='button'>Agregar</ButtonMP></ContenedorBoton>
                <Alerta tipo={CambiarAlerta.tipo} mensaje={CambiarAlerta.mensaje} estadoAlerta={alerta} setEstadoAlerta={setAlerta} />
                </Formulario>
            </ContainerBody>
        </Body>
    </>
     );
}

export default AddWordNew;