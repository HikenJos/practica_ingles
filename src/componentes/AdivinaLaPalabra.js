import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import useObtenerPalabras from '../hooks/useObtenerPalabras';
import Aleatorio from '../hooks/Aleatorio';
import {InputGrande } from '../elementos/formulario/Input';
import {ButtonMP} from '../elementos/BotonMenuPrincipal';
import { ContainerButton, ContainerHeader, Header } from '../elementos/Cabezera';
import { Body, ContainerBody } from '../elementos/Cuerpo';
import {Tittle, Title, Label} from '../elementos/Titulo';
import {BtnBack, BtnBackEspanol} from '../elementos/BotonRegresar';
import Alerta from '../elementos/Alerta';

function GuessTheWord() {
    const [palabras] = useObtenerPalabras();
    const [PalabraActual, setPalabraActual] = useState({}); 
    const [EnEspanol, setEnEspanol] = useState('');
    const [TipoAlerta, setTipoAlerta] = useState({});
    const [EstadoAlerta, setEstadoAlerta] = useState(false);
    const [Contador, setContador] = useState(3);
    const ref = useRef(null);
    
    function onChange(e){
        setEnEspanol(e.target.value);
    }

    function enter(e){
        if(e.keyCode === 13){
            esIgual();
        }
    }
    
    function esIgual () {
        if (EnEspanol === '') {
            setEstadoAlerta(true);
            setTipoAlerta({tipo:'error', mensaje:'No puede dejar las credenciales en blanco'});
        }else{
            if(EnEspanol.toLowerCase() === PalabraActual.wordInSpanish){
                setEstadoAlerta(true);
                setTipoAlerta({tipo:'exito', mensaje:'Correcto ;)'});
                setContador(3)
                setPalabraActual(Aleatorio(palabras));
                setEnEspanol('')
                ref.current.focus();
            }else{
                setEstadoAlerta(true);
                setTipoAlerta({tipo:'error', mensaje:'Incorrecto T.T'});
                setContador(Contador-1);
                if(Contador === 1) {
                    setContador(3)
                    setPalabraActual(Aleatorio(palabras));
                    setEnEspanol('')
                    ref.current.focus();
                }
            }
        }
    }
    useEffect(() => {   
            setPalabraActual(Aleatorio(palabras));
    },[palabras]);

    while(typeof PalabraActual !== 'undefined'){
        return ( 
            <>
                <Helmet>
                    <title>¿Cual es la Palabra?</title>
                </Helmet>
                <Header>
                    <ContainerHeader>
                        <Title>Practica tu inglés</Title>
                        
                        <ContainerButton>
                            <BtnBackEspanol ruta='practica-en-espanol'>PRUEBA EN ESPAÑOL</BtnBackEspanol>
                            <BtnBack ruta='/' />
                        </ContainerButton>
                    </ContainerHeader>
                </Header>
                <Body>
                    <ContainerBody>
                        <Tittle primario>{PalabraActual.wordInEnglish}</Tittle><Label>intentos restantes:{Contador}</Label>
                    </ContainerBody>
                    <ContainerBody>
                        <InputGrande ref={ref} id='espanol' type='text' placeholder='Palabra en Español' autoComplete='off' autoFocus value={EnEspanol} onChange={onChange} onKeyDown={enter}></InputGrande>
                    </ContainerBody>
                    <ContainerBody>
                        <ButtonMP as='button' onClick={esIgual}>Verificar</ButtonMP>
                    </ContainerBody>
                </Body>

                <Alerta tipo={TipoAlerta.tipo} mensaje={TipoAlerta.mensaje} estadoAlerta={EstadoAlerta} setEstadoAlerta={setEstadoAlerta}/>
    
                {/* <div>{palabras.map((pal) => {
                    return(<p key={pal.id}>{pal.wordInEnglish}</p>)
                })}</div> */}
    
            </>
            
         );
    }
}

export default GuessTheWord;