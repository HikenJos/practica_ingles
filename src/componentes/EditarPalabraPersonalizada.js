import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import {ContainerButton, ContainerHeader, Header} from '../elementos/Cabezera';
import { Formulario,  ContenedorBoton} from '../elementos/formulario/ElementosFormulario';
import { useAuth } from '../contextos/AuthContext';
import Alerta from '../elementos/Alerta';
import {Title} from '../elementos/Titulo';
import { ButtonMP} from '../elementos/BotonMenuPrincipal';
import { Body, ContainerBody } from '../elementos/Cuerpo';
import {InputGrande} from '../elementos/formulario/Input';
import {useNavigate, useParams} from 'react-router-dom';
import useObtenerPalabra from '../hooks/useObtenerPalabra';
import EditarPalabraCustom from '../firebase/editarPalabra';
import { BtnBackIngles, BtnVolver } from '../elementos/BotonRegresar';

function EditarPalabraPersonalizada() {
    const {id} = useParams();
    const [WordInEnglish, setWordInEnglish] = useState('');
    const [WordInSpanish, setWordInSpanish] = useState('');
    const [alerta, setAlerta] = useState(false);
    const [CambiarAlerta, setCambiarAlerta] = useState({});
    const user = useAuth();
    const navigate = useNavigate();
    const [palabra] = useObtenerPalabra(id);
    

    useEffect(() => {
        if(palabra){
            if(palabra.data().usuario === user.usuario.uid){
                setWordInEnglish(palabra.data().wordInEnglish);
                setWordInSpanish(palabra.data().wordInSpanish);
            }else{
                navigate('/practica/custom/agrega-palabras/listado');
            }
        }
    }, [palabra, user, navigate]);

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
            EditarPalabraCustom(id, WordInEnglish, WordInSpanish)
            .then(() => {
                setWordInEnglish('');
                setWordInSpanish('');
                setAlerta(true);
                setCambiarAlerta({tipo: 'exito', mensaje:'EDITADO CORRECTAMENTE'});
                navigate('/practica/custom/agrega-palabras/listado');
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
                <title>Edita tus Palabra</title>
            </Helmet>
            <Header>
                <ContainerHeader>
                    <Title>Edita una palabra</Title>
                    <ContainerButton>
                        <BtnBackIngles ruta='/practica/custom'>Practica!</BtnBackIngles>
                        <BtnVolver ruta='/practica/custom/agrega-palabras/listado'>Volver</BtnVolver>
                    </ContainerButton>
                </ContainerHeader>           
            </Header>
            <Body>
                <ContainerBody>
                    <Formulario  onSubmit={HandleSubmit}>
                        <InputGrande type='text' name='wordInEnglish' id='wordInEnglish' placeholder='Palabra en Inglés' autoComplete='off' value={WordInEnglish} onChange={HandleChange}></InputGrande>
                        <InputGrande type='text' name='wordInSpanish' id='wordInSpanish' placeholder='Palabra en Español' autoComplete='off' value={WordInSpanish} onChange={HandleChange}></InputGrande>
                        <ContenedorBoton><ButtonMP as='button'>Editar</ButtonMP></ContenedorBoton>
                    <Alerta tipo={CambiarAlerta.tipo} mensaje={CambiarAlerta.mensaje} estadoAlerta={alerta} setEstadoAlerta={setAlerta} />
                    </Formulario>
                </ContainerBody>
            </Body>
        </>
     );
}

export default EditarPalabraPersonalizada;