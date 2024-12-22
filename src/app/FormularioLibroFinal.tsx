'use client'
import { registrarLibro } from '@/Firebase/Promesas'
import { iSLibro } from '@/InitialStates/ISLibro';
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const FormularioLibroFinal=() => {
    const[libro,setLibro] = useState(iSLibro)
    const handleLibro = (estado:string,valor:string)=>{
        if(estado=="nombre" || estado=="autor" || estado=="editorial" || estado=="año" || estado=="valoracion" || estado=="pais" || estado=="sexomasculino" || estado=="sexofemenino" || estado=="genero"){
            setLibro({...libro,[estado]:valor})
        }
    }
    const handleRegistrar = ()=>{
        console.log("le diste al boton")
      alert("Vas a registrar")
      console.log(libro)
      registrarLibro(libro).then(()=>{
               //then es para hacer algo si la promesa se cumple
               alert("Se registro")
            }).catch((e)=>{
                //catch si la promesa falla
                alert("Algo fallo")
      })
    }
    return (
        <>
        <h1>Formulario Final</h1>
            <p>Nombre: {libro.nombre}</p>
            <p>Autor: {libro.autor}</p>
            <p>Editorial: {libro.editorial}</p>
            <p>Año: {libro.anio}</p>
            <p>Valoración: {libro.valoracion}</p>
            <p>País de Origen: {libro.pais}</p>
            <p>Sexo: {libro.sexomasculino}</p>
            <p>Sexo: {libro.sexofemenino}</p>
            <p>Género: {libro.genero}</p>

            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
             <Form.Label>Nombre</Form.Label>
             <Form.Control type="email" placeholder="Ingrese un nombre"
              name='nombre'
        onChange={((e)=>{handleLibro(e.currentTarget.name,e.currentTarget.value)})}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
             <Form.Label>Autor</Form.Label>
             <Form.Control type="email" placeholder="Ingrese un nombre de autor"
              name='nombre'
        onChange={((e)=>{handleLibro(e.currentTarget.name,e.currentTarget.value)})}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
             <Form.Label>Editorial</Form.Label>
             <Form.Control type="email" placeholder="Ingrese un editorial"
              name='nombre'
        onChange={((e)=>{handleLibro(e.currentTarget.name,e.currentTarget.value)})}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
             <Form.Label>Año</Form.Label>
             <Form.Control type="email" placeholder="Ingrese un año"
              name='nombre'
        onChange={((e)=>{handleLibro(e.currentTarget.name,e.currentTarget.value)})}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
             <Form.Label>Valoración</Form.Label>
             <Form.Control type="email" placeholder="Ingrese una valoracion"
              name='nombre'
        onChange={((e)=>{handleLibro(e.currentTarget.name,e.currentTarget.value)})}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
             <Form.Label>País</Form.Label>
             <Form.Control type="email" placeholder="Ingrese un pais"
              name='nombre'
        onChange={((e)=>{handleLibro(e.currentTarget.name,e.currentTarget.value)})}
        />
      </Form.Group>

      {/* Sexos */}
      <Form.Group className="mb-3">
                    <Form.Label>Sexo Masculino</Form.Label>
                    <Form.Check
                        type="radio"
                        label="Sí"
                        name="sexomasculino"
                        value="Sí"
                        checked={libro.sexomasculino === "Sí"}
                        onChange={(e) => handleLibro(e.currentTarget.name, e.currentTarget.value)}
                    />
                    <Form.Check
                        type="radio"
                        label="No"
                        name="sexomasculino"
                        value="No"
                        checked={libro.sexomasculino === "No"}
                        onChange={(e) => handleLibro(e.currentTarget.name, e.currentTarget.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Sexo Femenino</Form.Label>
                    <Form.Check
                        type="radio"
                        label="Sí"
                        name="sexofemenino"
                        value="Sí"
                        checked={libro.sexofemenino === "Sí"}
                        onChange={(e) => handleLibro(e.currentTarget.name, e.currentTarget.value)}
                    />
                    <Form.Check
                        type="radio"
                        label="No"
                        name="sexofemenino"
                        value="No"
                        checked={libro.sexofemenino === "No"}
                        onChange={(e) => handleLibro(e.currentTarget.name, e.currentTarget.value)}
                    />
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
export default FormularioLibroFinal
