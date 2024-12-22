'use client'
import { obtenerLibros} from "@/Firebase/Promesas"
import { ILibro } from "@/Interfaces/ILibro"
import React, {useEffect,useState} from "react"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const TablaLibros = () => {
    const [ILibro, setLibros] = useState<ILibro[]>([])
    const handleObtenerTodo = ()=>{
        obtenerLibros().then(
            (libros)=>{
                console.log(libros);
                setLibros(libros);
            }).catch(
                (e)=>{
                    console.log("Error")
                })
    }
    useEffect(()=>{
        handleObtenerTodo();
    },[])
    return(

    <>
    <Table>
        <thead>
            <tr>
            <th>Nombre</th>
            <th>Autor</th>
            <th>Editorial</th>
            <th>Año</th>
            <th>Valoracion</th>
            <th>Pais</th>
            <th>Sexo</th>
            <th>Genero</th>
            </tr>
        </thead>
        <tbody>
            {
                ILibro.map((libro)=>{return(
                    <tr>
                        <td>{libro.nombre}</td>
                        <td>{libro.autor}</td>
                        <td>{libro.editorial}</td>
                        <td>{libro.anio}</td>
                        <td>{libro.valoracion}</td>
                        <td>{libro.pais}</td>
                        <td>{libro.sexomasculino}</td>
                        <td>{libro.sexofemenino}</td>
                        <td>{libro.genero}</td>
                        <td>
                        <Button variant='warning'>Actualizar</Button>
                        <Button variant='danger'>Eliminar</Button>
                        </td>
                    </tr>
                )})
            }
        </tbody>
    </Table>

    {
        ILibro.map((libro)=>{return(
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{libro.nombre} {libro.autor}</Card.Title>
              <Card.Text>
                <h6>Datos</h6>
                <p>Años:{libro.anio}</p>
              </Card.Text>
              <Button variant="warning">Editar</Button>
              <Button variant="danger">Eliminar</Button>
            </Card.Body>
          </Card>
        )})
    }
    </>
    )
}
export default TablaLibros