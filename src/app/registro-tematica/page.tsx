'use client';

import React from 'react';
import FormularioLibroFinal from '@/app/FormularioLibroFinal'; // Ajusta la ruta según la ubicación del componente

const RegistroTematica = () => {
    return (
        <div className="container mt-5">
            <h1>Registro de Temáticas: Libros</h1>
            <p>Ingrese los datos del libro que desea registrar:</p>
            <FormularioLibroFinal />
        </div>
    );
};

export default RegistroTematica;

