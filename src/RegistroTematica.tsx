import React from 'react';
import FormularioLibro from './app/FormularioLibro';

const RegistroTematica = () => {
    return (
        <div>
            <h1>Registro de Temáticas: Libros</h1>
            <p>Ingrese los datos del libro que desea registrar:</p>
            <FormularioLibro />
        </div>
    );
};

export default RegistroTematica;
