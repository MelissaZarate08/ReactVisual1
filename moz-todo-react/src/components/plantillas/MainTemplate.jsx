import React from 'react';
import Header from '../organismos/Header';
import '../../index.css';

const MainTemplate = ({ children }) => (
    <div>
        <Header />
        <main>
            {children}
        </main>
    </div>
);

export default MainTemplate;
