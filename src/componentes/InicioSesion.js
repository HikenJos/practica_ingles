import React, {useState} from 'react';
import {Helmet} from 'react-helmet';
import {Auth} from '../firebase/firebaseConfig';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {useNavigate} from 'react-router-dom';
import {Header, ContainerHeader} from '../elementos/Cabezera';
import {ButtonMP, ButtonMS} from '../elementos/BotonMenuPrincipal';
import {ContenedorBoton} from '../elementos/formulario/ElementosFormulario';
import { Input, ContenedorInput } from '../elementos/formulario/Input';
import Formulario from '../elementos/formulario/ContenedorFormulario';
import Alerta from '../elementos/Alerta';
import {Title} from '../elementos/Titulo';


function Login() {
    const navigate = useNavigate();
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const [estadoAlerta, setEstadoAlerta] = useState(false);
    const [alerta, setAlerta] = useState({});
    const expresionRegular = /[a-zA-Z0-9-.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;

    function HandleChange (e) {
        switch (e.target.name) {
            case 'email':
                setCorreo(e.target.value)
                break;
            case 'password':
                setPassword(e.target.value)
                break;
            default:
                break;
        }
    }

    async function HandleSubmit(e)  {
        e.preventDefault();
        setEstadoAlerta(false);
        setAlerta({});

        const errores = {
            'auth/user-not-found':'Usuario o Contraseña Incorrectos',
            'auth/wrong-password':'Usuario o Contraseña Incorrectos',
            'auth/too-many-requests':'Muchos intentos realizados, espere unos minutos'
        };

        const errores_default = 'Usuario o Contraseña Incorrectos';
        
        if (correo === '' || password === '') {
            setEstadoAlerta(true);
            setAlerta({tipo:'error', mensaje:'No puede dejar las credenciales en blanco'});
            return;
        }
        if (!expresionRegular.test(correo)) {
            setEstadoAlerta(true);
            setAlerta({tipo:'error', mensaje:'El correo introducido no es valido'});
            return;
        }
        try {
            await signInWithEmailAndPassword(Auth, correo, password);
            navigate('/');
        } catch (e) {
            setEstadoAlerta(true);
            const error = e.code;
            const msg = errores[error] || errores_default;
            setAlerta({tipo:'error', mensaje:msg});
        }
    }
    
    return ( 
        <>
            <Helmet>
                <title>Inicia Sesión</title>
            </Helmet>
            <Header>
                <ContainerHeader registro>
                    <Title>Inicio de Sesión</Title>
                    <ButtonMS to='/registro'>Registrate</ButtonMS>
                </ContainerHeader>
            </Header>
            <Formulario onSubmit={HandleSubmit}>
                <ContenedorInput>
                    <Input type='email' name='email' placeholder='Correo Electronico' autoComplete='off' value={correo} onChange={HandleChange}/>     
                </ContenedorInput>
                <ContenedorInput>
                <Input type='password' name='password' placeholder='Contraseña' value={password} onChange={HandleChange}/>
                </ContenedorInput>
                <ContenedorBoton>
                    <ButtonMP as='button' primario type='subtmit'>Iniciar Sesión</ButtonMP>
                </ContenedorBoton>
            </Formulario>

            <Alerta tipo={alerta.tipo} mensaje={alerta.mensaje} estadoAlerta={estadoAlerta} setEstadoAlerta={setEstadoAlerta}/>
        </>
     );
}

export default Login;