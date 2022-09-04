import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import Aleatorio from '../hooks/Aleatorio';
import {InputGrande } from '../elementos/formulario/Input';
import {ButtonMP, ButtonMS} from '../elementos/BotonMenuPrincipal';
import {ContainerButton2, ContainerHeader, Header } from '../elementos/Cabezera';
import { Body, ContainerBody } from '../elementos/Cuerpo';
import {Tittle, Title, Label} from '../elementos/Titulo';
import {BtnBack, BtnBackIngles} from '../elementos/BotonRegresar';
import useObtenerPalabrasPorUsuario from '../hooks/useObtenerPalabrasPorUsuario';
import Alerta from '../elementos/Alerta';

function PracticaPalabrasPersonalizadasEspanol() {
    const [palabras] = useObtenerPalabrasPorUsuario();
    const [PalabraActual, setPalabraActual] = useState({}); 
    const [EnIngles, setEnIngles] = useState('');
    const [TipoAlerta, setTipoAlerta] = useState({});
    const [EstadoAlerta, setEstadoAlerta] = useState(false);
    const [Contador, setContador] = useState(3);
    const ref = useRef(null);
    
    function onChange(e){
        setEnIngles(e.target.value);
    }

    function enter(e){
        if(e.keyCode === 13){
            esIgual();
        }
    }
    
    function esIgual () {
        if (EnIngles === '') {
            setEstadoAlerta(true);
            setTipoAlerta({tipo:'error', mensaje:'No puede dejar las credenciales en blanco'});
        }else{
            if(EnIngles.toLowerCase() === PalabraActual.wordInEnglish){
                setEstadoAlerta(true);
                setTipoAlerta({tipo:'exito', mensaje:'Correcto ;)'});
                setContador(3)
                setPalabraActual(Aleatorio(palabras));
                setEnIngles('')
                ref.current.focus();
            }else{
                setEstadoAlerta(true);
                setTipoAlerta({tipo:'error', mensaje:'Incorrecto T.T'});
                setContador(Contador-1);
                if(Contador === 1) {
                    setContador(3)
                    setPalabraActual(Aleatorio(palabras));
                    setEnIngles('')
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
                    <title>¿Cual es la Palabra? En Español</title>
                </Helmet>
                <Header>
                    <ContainerHeader>
                        <Title>Practica tu inglés</Title>
                        
                        <ContainerButton2>
                            <ButtonMS symbol to='/practica/custom/agrega-palabras'>+</ButtonMS>
                            <BtnBackIngles ruta='/practica/custom' />
                            <BtnBack ruta='/' />
                        </ContainerButton2>
                    </ContainerHeader>
                </Header>
                <Body>
                    <ContainerBody>
                        <Tittle primario>{PalabraActual.wordInSpanish}</Tittle><Label>intentos restantes:{Contador}</Label>
                    </ContainerBody>
                    <ContainerBody>
                        <InputGrande ref={ref} id='espanol' type='text' placeholder='Palabra en Español' autoComplete='off' autoFocus value={EnIngles} onChange={onChange} onKeyDown={enter}></InputGrande>
                    </ContainerBody>
                    <ContainerBody>
                        <ButtonMP as='button' onClick={esIgual}>Verificar</ButtonMP>
                    </ContainerBody>
                </Body>

                <Alerta tipo={TipoAlerta.tipo} mensaje={TipoAlerta.mensaje} estadoAlerta={EstadoAlerta} setEstadoAlerta={setEstadoAlerta}/>
            </>        
         );
    }

    if(typeof PalabraActual === 'undefined'){
        return ( 
            <>
                <Helmet>
                    <title>¿Cual es la Palabra?</title>
                </Helmet>
                <Header>
                    <ContainerHeader>
                        <Title>Practica tu inglés</Title>
                        
                        <ContainerButton2>
                            <ButtonMS symbol to='/practica/custom/agrega-palabras'>+</ButtonMS>
                            <BtnBackIngles to='/practica/custom'>EN INGLÉS</BtnBackIngles>
                            <BtnBack ruta='/' />
                        </ContainerButton2>
                    </ContainerHeader>
                </Header>
                <Body>
                    <ContainerBody>
                        <Tittle>{'No tienes palabras aún'}</Tittle><Label>intentos restantes:0</Label>
                    </ContainerBody>
                    <ContainerBody>
                        <InputGrande ref={ref} id='espanol' type='text' placeholder='Palabra en Español' autoComplete='off' autoFocus value={EnIngles} onChange={onChange} onKeyDown={enter}></InputGrande>
                    </ContainerBody>
                    <ContainerBody>
                        <ButtonMP as='button'>No tienes Palabras</ButtonMP>
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

export default PracticaPalabrasPersonalizadasEspanol;