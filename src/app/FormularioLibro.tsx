'use client'
import React, { useState } from 'react';

export const FormularioLibro = () => {
    const [nombre, setNombre] = useState("");
    const [autor, setAutor] = useState("");
    const [editorial, setEditorial] = useState("");
    const [anio, setAnio] = useState(0);
    const [valoracion, setValoracion] = useState(0);
    const [pais, setPais] = useState("");
    const [sexo, setSexo] = useState("");
    const [genero, setGenero] = useState("");

    return (
        <>
            <h1>Formulario Inicial</h1>
            <p>Nombre: {nombre}</p>
            <p>Autor: {autor}</p>
            <p>Editorial: {editorial}</p>
            <p>Año: {anio}</p>
            <p>Valoración: {valoracion}</p>
            <p>País de Origen: {pais}</p>
            <p>Sexo: {sexo}</p>
            <p>Género: {genero}</p>

            <form>
                <label>Nombre</label><br />
                <input
                    type='text'
                    placeholder='Ingrese nombre libro'
                    onChange={(e) => setNombre(e.currentTarget.value)}
                /><br />

                <label>Autor</label><br />
                <input
                    type='text'
                    placeholder='Ingrese nombre autor'
                    onChange={(e) => setAutor(e.currentTarget.value)}
                /><br />

                <label>Editorial</label><br />
                <input
                    type='text'
                    placeholder='Ingrese nombre editorial'
                    onChange={(e) => setEditorial(e.currentTarget.value)}
                /><br />

                <label>Año</label><br />
                <input
                    type='number'
                    placeholder='Ingrese año libro'
                    onChange={(e) => setAnio(e.currentTarget.valueAsNumber)}
                /><br />

                <label>Valoración</label><br />
                <input
                    type='number'
                    placeholder='Ingresar valoración libro'
                    onChange={(e) => setValoracion(e.currentTarget.valueAsNumber)}
                /><br />

                <label>País de Origen</label><br />
                <input
                    type='text'
                    placeholder='Ingrese país origen autor'
                    onChange={(e) => setPais(e.currentTarget.value)}
                /><br />

                {/* Opciones para Sexo */}
                <label>Sexo</label><br />
                <input
                    type="radio"
                    id="masculino"
                    name="sexo"
                    value="Masculino"
                    onChange={(e) => setSexo(e.currentTarget.value)}
                />
                <label htmlFor="masculino">Masculino</label><br />
                <input
                    type="radio"
                    id="femenino"
                    name="sexo"
                    value="Femenino"
                    onChange={(e) => setSexo(e.currentTarget.value)}
                />
                <label htmlFor="femenino">Femenino</label><br />

                {/* Opciones para Género */}
                <label>Género</label><br />
                <select onChange={(e) => setGenero(e.currentTarget.value)}>
                    <option value="">Seleccione un género</option>
                    <option value="Ficción">Ficción</option>
                    <option value="No Ficción">No Ficción</option>
                    <option value="Fantasía">Fantasía</option>
                    <option value="Ciencia Ficción">Ciencia Ficción</option>
                    <option value="Histórico">Histórico</option>
                </select><br />
            </form>
        </>
    );
};
export default FormularioLibro