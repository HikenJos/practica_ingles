import React, { useState } from 'react';
import Helmet from 'react-helmet';
import {Header} from '../elementos/Cabezera';
import {BtnBack} from '../elementos/BotonRegresar';
import Button from '../elementos/BotonCurso';
import {ContenedorFiltros, Formulario, Input, ContenedorBoton} from '../elementos/formulario/ElementosFormulario';
import agregarPalabra from '../firebase/agregarPalabra';
import { useAuth } from '../contextos/AuthContext';
import Alerta from '../elementos/Alerta';
import {Title} from '../elementos/Titulo';

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
        if(WordInEnglish !== '' || WordInSpanish !== ''){
            agregarPalabra(WordInEnglish, WordInSpanish, user.usuario.uid)
            .then(() => {
                setWordInEnglish('');
            setWordInSpanish('');
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
            <title>Añadir Palabra</title>
        </Helmet>
        <Header>
            <BtnBack to='/'>Regresar</BtnBack>
            <Title>Añade una Palabra Nueva</Title>
        </Header>
        <Formulario onSubmit={HandleSubmit}>
            <ContenedorFiltros></ContenedorFiltros>
            <div>
                <Input type='text' name='wordInEnglish' id='wordInEnglish' placeholder='Palabra en Ingles' value={WordInEnglish} onChange={HandleChange}></Input>
                <Input type='text' name='wordInSpanish' id='wordInSpanish' placeholder='Palabra en Español' value={WordInSpanish} onChange={HandleChange}></Input>
                <ContenedorBoton><Button as='button'>Agregar</Button></ContenedorBoton>
            </div>
            <Alerta tipo={CambiarAlerta.tipo} mensaje={CambiarAlerta.mensaje} estadoAlerta={alerta} setEstadoAlerta={setAlerta} />
        </Formulario>
    </>
     );
}

export default AddWordNew;