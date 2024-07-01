import React from 'react';
import Heading from '../atomos/Heading';
import '../../index.css';

const Biography = () => (
    <section className="biografia">
        <Heading level={2}>Biografía</Heading>
        <img src="/src/assets/images/Tim Burton.webp" alt="Tim Burton" />
        <p>
            Tim Burton es un director, productor, escritor y diseñador 
            estadounidense conocido por su estilo visual oscuro y 
            gótico, y sus películas excéntricas. Entre sus obras 
            más reconocidas se encuentran "El joven manos de tijera",
            "El extraño mundo de Jack", y "Batman".
        </p>
        <p>Para conocer más, regístrese e inicie sesión.</p>
    </section>
);

export default Biography;
