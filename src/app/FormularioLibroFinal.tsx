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
        const newValue =
            estado === "anio" || estado === "valoracion"
                ? Number(valor) // Convierte a número
                : valor; 

        setLibro({ ...libro, [estado]: newValue });
    };

    const handleRegistrar = async () => {
        if (!libro.sexo) {
            setErrorSexo(true);
            return;
        }
        setErrorSexo(false);

        try {
            await registrarLibro(libro); // Firebase
            alert("Libro registrado exitosamente en Firebase");
        } catch (error) {
            alert("Error al registrar en Firebase. Se usará LocalStorage.");
            const existingLibros = JSON.parse(localStorage.getItem('libros') || '[]');
            const updatedLibros = [...existingLibros, libro];
            localStorage.setItem('libros', JSON.stringify(updatedLibros));
        }
        setLibro(iSLibro);
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
                <Form.Group className="mb-3" controlId="formBasicNombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese un nombre"
                        name='nombre'
                        onChange={(e) => { handleLibro(e.currentTarget.name, e.currentTarget.value) }}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicAutor">
                    <Form.Label>Autor</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese un nombre de autor"
                        name='autor'
                        onChange={(e) => { handleLibro(e.currentTarget.name, e.currentTarget.value) }}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEditorial">
                    <Form.Label>Editorial</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese un editorial"
                        name='editorial'
                        onChange={(e) => { handleLibro(e.currentTarget.name, e.currentTarget.value) }}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicAnio">
                    <Form.Label>Año</Form.Label>
                    <Form.Control type="number" placeholder="Ingrese un año"
                        name='anio'
                        onChange={(e) => { handleLibro(e.currentTarget.name, e.currentTarget.value) }}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicValoracion">
                    <Form.Label>Valoración</Form.Label>
                    <Form.Control type="number" placeholder="Ingrese una valoración"
                        name='valoracion'
                        onChange={(e) => { handleLibro(e.currentTarget.name, e.currentTarget.value) }}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPais">
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

                <Button variant="primary" onClick={handleRegistrar}>Registrar Libro</Button>
            </Form>
        </>
    );
}

export default FormularioLibroFinal;

