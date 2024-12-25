'use client'
import { registrarLibro } from '@/Firebase/Promesas'
import { iSLibro } from '@/InitialStates/ISLibro';
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const FormularioLibroFinal = () => {
    const [libro, setLibro] = useState(iSLibro);
    const [errorSexo, setErrorSexo] = useState(false); // Estado para manejar el error de sexo

    const handleLibro = (estado: string, valor: string) => {
        if (estado === "nombre" || estado === "autor" || estado === "editorial" || estado === "año" || estado === "valoracion" || estado === "pais" || estado === "sexo" || estado === "genero") {
            setLibro({ ...libro, [estado]: valor });
        }
    }

    const handleRegistrar = () => {
        if (!libro.sexo) {
            setErrorSexo(true);
            return;
        }
        setErrorSexo(false);
    
        // Obtener libros existentes en localStorage
        const existingLibros = JSON.parse(localStorage.getItem('libros') || '[]');
        const updatedLibros = [...existingLibros, libro];
    
        // Guardar libros actualizados en localStorage
        localStorage.setItem('libros', JSON.stringify(updatedLibros));
    
        alert("Se registró el libro exitosamente");
        setLibro(iSLibro); // Reiniciar el formulario
    };
    

    return (
        <>
            <h1>Formulario Final</h1>
            <p>Nombre: {libro.nombre}</p>
            <p>Autor: {libro.autor}</p>
            <p>Editorial: {libro.editorial}</p>
            <p>Año: {libro.anio}</p>
            <p>Valoración: {libro.valoracion}</p>
            <p>País de Origen: {libro.pais}</p>
            <p>Sexo: {libro.sexo}</p>
            <p>Género: {libro.genero}</p>

            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese un nombre"
                        name='nombre'
                        onChange={(e) => { handleLibro(e.currentTarget.name, e.currentTarget.value) }}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Autor</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese un nombre de autor"
                        name='autor'
                        onChange={(e) => { handleLibro(e.currentTarget.name, e.currentTarget.value) }}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Editorial</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese un editorial"
                        name='editorial'
                        onChange={(e) => { handleLibro(e.currentTarget.name, e.currentTarget.value) }}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Año</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese un año"
                        name='anio'
                        onChange={(e) => { handleLibro(e.currentTarget.name, e.currentTarget.value) }}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Valoración</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese una valoración"
                        name='valoracion'
                        onChange={(e) => { handleLibro(e.currentTarget.name, e.currentTarget.value) }}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>País</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese un país"
                        name='pais'
                        onChange={(e) => { handleLibro(e.currentTarget.name, e.currentTarget.value) }}
                    />
                </Form.Group>

                {/* Sexo */}
                <Form.Group className="mb-3">
                    <Form.Label>Sexo</Form.Label>
                    <div>
                        <Form.Check
                            type="radio"
                            label="Masculino"
                            name="sexo"
                            value="Masculino"
                            checked={libro.sexo === "Masculino"}
                            onChange={(e) => handleLibro(e.currentTarget.name, e.currentTarget.value)}
                        />
                        <Form.Check
                            type="radio"
                            label="Femenino"
                            name="sexo"
                            value="Femenino"
                            checked={libro.sexo === "Femenino"}
                            onChange={(e) => handleLibro(e.currentTarget.name, e.currentTarget.value)}
                        />
                    </div>
                    {errorSexo && <div style={{ color: 'red' }}>Por favor, seleccione un sexo.</div>}
                </Form.Group>

                {/* Género */}
                <Form.Group className="mb-3">
                    <Form.Label>Género</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese el género"
                        name="genero"
                        value={libro.genero}
                        onChange={(e) => handleLibro(e.currentTarget.name, e.currentTarget.value)}
                    />
                </Form.Group>

                <Button variant="primary" onClick={handleRegistrar}> Registrar Libro</Button>
            </Form>
        </>
    );
}

export default FormularioLibroFinal;
