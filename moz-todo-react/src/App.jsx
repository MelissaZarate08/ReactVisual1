import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/paginas/Home';
import IniciarSesion from './components/paginas/IniciarSesion';
import './index.css';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/iniciarSesion" element={<IniciarSesion />} />
            </Routes>
        </Router>
    );
};

export default App;
