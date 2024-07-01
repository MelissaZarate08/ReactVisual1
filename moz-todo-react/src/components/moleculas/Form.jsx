import React from 'react';
import Button from '../atomos/Button';
import Input from '../atomos/Input';
import '../../index.css';

const Form = ({ onSubmit, username, setUsername, password, setPassword }) => (
    <form>
        <label htmlFor="RUser">Usuario:</label>
        <Input
            id="RUser"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="RPass">Contraseña:</label>
        <Input
            id="RPass"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={onSubmit}>
            Aceptar
        </Button>
    </form>
);

export default Form;
