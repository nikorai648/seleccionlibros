'use client'; // Marca este archivo como un componente del lado del cliente

import React, { useState, useEffect } from 'react';
import { ILibro } from '@/Interfaces/ILibro';
import { Modal } from 'react-bootstrap'; // Necesario si usas Bootstrap
import { obtenerLibros } from '@/Firebase/Promesas';

const Visualizar: React.FC = () => {
  const [libros, setLibros] = useState<ILibro[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const librosFirebase = await obtenerLibros();
      setLibros(librosFirebase);
    };
    fetchData();
  }, []);

  const handleDelete = () => {
    if (deleteIndex !== null) {
      const updatedLibros = [...libros];
      updatedLibros.splice(deleteIndex, 1);
      setLibros(updatedLibros);
      localStorage.setItem('libros', JSON.stringify(updatedLibros));
    }
    setShowModal(false); // Cerrar el modal
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

  const openModal = (index: number) => {
    setDeleteIndex(index);
    setShowModal(true);
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
            <th>Sexo</th>
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
              <td>{libro.sexo}</td>
              <td>{libro.genero}</td>
              <td>
                <button className="btn btn-warning me-2" onClick={() => handleEdit(index)}>Editar</button>
                <button className="btn btn-danger" onClick={() => openModal(index)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal de confirmación */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Eliminación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>¿Estás seguro de que deseas eliminar este libro?</p>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancelar</button>
          <button className="btn btn-danger" onClick={handleDelete}>Eliminar</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Visualizar;
