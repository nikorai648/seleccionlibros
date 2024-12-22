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
        
        
        
        
        
        
        </>
       
}
