import React, {useState} from 'react';
import {Helmet} from 'react-helmet';
import {Auth} from '../firebase/firebaseConfig';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {useNavigate} from 'react-router-dom';
import {Header, ContainerHeader} from '../elementos/Cabezera';
import {ContenedorBoton} from '../elementos/formulario/ElementosFormulario';
import Formulario from '../elementos/formulario/ContenedorFormulario';
import Alerta from '../elementos/Alerta';
import {Title} from '../elementos/Titulo';
import { Input, ContenedorInput } from '../elementos/formulario/Input';
import { ButtonMP, ButtonMS } from '../elementos/BotonMenuPrincipal';



;

function SingUp() {
    const navigate = useNavigate();
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [estadoAlerta, setEstadoAlerta] = useState(false);
    const [alerta, setAlerta] = useState({});
    const expresionRegular = /[a-zA-Z0-9-.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;

    const HandleChange = (e) => {
        switch (e.target.name) {
            case 'email':
                setCorreo(e.target.value)
                break;
            case 'password':
                setPassword(e.target.value)
                break;
            case 'password2':
                setConfirmPassword(e.target.value)
                break;
            default:
                break;
        }
    }

    const HandleSubmit = async (e) => {
        e.preventDefault();
        setEstadoAlerta(false);
        setAlerta({});

        const errores = {
            'auth/weak-password':'La contraseña debe contener 6 caracteres minimo.',
            'auth/email-already-in-use':'Ya existe una cuenta con este correo.',
            'auth/invalid-email':'El correo electrónico no es valido.'
        };

        const errores_default = 'Hubo un error al crear el usuario.';
        
        if (correo === '' || password === '' || confirmPassword === '') {
            setEstadoAlerta(true);
            setAlerta({tipo:'error', mensaje:'No puede dejar las credenciales en blanco'});
            return;
        }
        if (!expresionRegular.test(correo)) {
            setEstadoAlerta(true);
            setAlerta({tipo:'error', mensaje:'El correo introducido no es valido'});
            return;
        }
        if (password !== confirmPassword) {
            setEstadoAlerta(true);
            setAlerta({tipo:'error', mensaje:'Las contraseñas no son iguales'});
            return;
        }

        try {
            await createUserWithEmailAndPassword(Auth, correo, password);
            navigate('/');
        } catch (e) {
            setEstadoAlerta(true)
            const error = e.code;
            const msg = errores[error] || errores_default;
            setAlerta({tipo:'error', mensaje:msg})
        }
    }
    return ( 
        <>
            <Helmet>
                <title>Resgistrate</title>
            </Helmet>
            <Header>
                <ContainerHeader>
                    <Title>Registro</Title>
                    <ButtonMS to='/login'>Inicio de Sesión</ButtonMS>
                </ContainerHeader>
            </Header>
            
            <Formulario onSubmit={HandleSubmit}>
                <ContenedorInput>
                    <Input type='email' name='email' placeholder='Correo Electronico' autoComplete='off' value={correo} onChange={HandleChange}/>     
                </ContenedorInput>
                <ContenedorInput>
                <Input type='password' name='password' placeholder='Contraseña' value={password} onChange={HandleChange}/>
                </ContenedorInput>
                <ContenedorInput>
                <Input type='password' name='password2' placeholder='Repetir Contraseña' value={confirmPassword} onChange={HandleChange}/>
                </ContenedorInput>
                <ContenedorBoton>
                    <ButtonMP as='button' primario type='subtmit'>Registrarse</ButtonMP>
                </ContenedorBoton>
            </Formulario>
            
            <Alerta tipo={alerta.tipo} mensaje={alerta.mensaje} estadoAlerta={estadoAlerta} setEstadoAlerta={setEstadoAlerta}/>
        </>
     );
}

export default SingUp;