import React, { useState, useEffect } from 'react';
import { ILibro } from './Interfaces/ILibro';
import { iSLibro } from './InitialStates/ISLibro';

const Visualizar: React.FC = () => {
  const [libros, setLibros] = useState<ILibro[]>([]);

  useEffect(() => {
    const storedLibros = JSON.parse(localStorage.getItem('libros') || '[]') as ILibro[];
    setLibros(storedLibros);
  }, []);

  const handleDelete = (index: number) => {
    const updatedLibros = [...libros];
    updatedLibros.splice(index, 1);
    setLibros(updatedLibros);
    localStorage.setItem('libros', JSON.stringify(updatedLibros));
  };

  const handleEdit = (index: number) => {
    const editedLibro = { ...libros[index] };
    editedLibro.nombre = prompt('Ingrese un nuevo nombre:', editedLibro.nombre) || editedLibro.nombre;
    editedLibro.autor = prompt('Ingrese un nuevo autor:', editedLibro.autor) || editedLibro.autor;
    editedLibro.editorial = prompt('Ingrese una nueva editorial:', editedLibro.editorial) || editedLibro.editorial;

    const updatedLibros = [...libros];
    updatedLibros[index] = editedLibro;
    setLibros(updatedLibros);
    localStorage.setItem('libros', JSON.stringify(updatedLibros));
  };

  return (
    <div className="container mt-5">
      <h2>Libros Registrados</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Autor</th>
            <th>Editorial</th>
            <th>Año</th>
            <th>Valoración</th>
            <th>País</th>
            <th>Sexo Masculino</th>
            <th>Sexo Femenino</th>
            <th>Género</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {libros.map((libro, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
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
                <button className="btn btn-warning me-2" onClick={() => handleEdit(index)}>Editar</button>
                <button className="btn btn-danger" onClick={() => handleDelete(index)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Visualizar;
