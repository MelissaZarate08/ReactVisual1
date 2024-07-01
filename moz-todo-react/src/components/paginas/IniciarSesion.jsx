import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainTemplate from '../plantillas/MainTemplate';
import Form from '../moleculas/Form';
import '../../index.css';

const IniciarSesion = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const users = [
        { usuario: 'melissa', pass: 'meli123' },
        { usuario: 'hannia', pass: 'hanni123' }
    ];

    const handleLogin = () => {
        const user = users.find(u => u.usuario === username && u.pass === password);

        if (user) {
            alert('Bienvenido');
            navigate('/');
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    };

    return (
        <MainTemplate>
            <main className="form-container">
                <h2>Iniciar Sesión</h2>
                <Form
                    onSubmit={handleLogin}
                    username={username}
                    setUsername={setUsername}
                    password={password}
                    setPassword={setPassword}
                />
            </main>
        </MainTemplate>
    );
};

export default IniciarSesion;
