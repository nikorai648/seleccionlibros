'use client'; 

import React, { useState, useEffect } from 'react';
import { ILibro } from '@/Interfaces/ILibro';
import { Modal } from 'react-bootstrap'; 
import { obtenerLibros, eliminarLibro, actualizarLibro } from '@/Firebase/Promesas';

const Visualizar: React.FC = () => {
  const [libros, setLibros] = useState<ILibro[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null);

  // Carga libros desde Firebase
  useEffect(() => {
    const fetchData = async () => {
      const librosFirebase = await obtenerLibros();
      setLibros(librosFirebase);
    };
    fetchData();
  }, []);

  const handleDelete = async () => {
    if (deleteIndex !== null) {
        const libroId = libros[deleteIndex].id; // Obteniene el ID del libro a eliminar
        try {
            // Eliminar el libro en Firestore
            await eliminarLibro(libroId);
            // Actualizar la lista local
            const updatedLibros = libros.filter((_, index) => index !== deleteIndex);
            setLibros(updatedLibros);
        } catch (error) {
            console.error("Error eliminando el libro:", error);
        }
    }
    setShowModal(false); // cierra el modal
};


  
  const handleEdit = async (index: number) => {
    const editedLibro = { ...libros[index] };
    
    // Solicita nuevos valores al usuario
    editedLibro.nombre = prompt('Ingrese un nuevo nombre:', editedLibro.nombre) || editedLibro.nombre;
    editedLibro.autor = prompt('Ingrese un nuevo autor:', editedLibro.autor) || editedLibro.autor;
    editedLibro.editorial = prompt('Ingrese una nueva editorial:', editedLibro.editorial) || editedLibro.editorial;
    const anioInput = prompt('Ingrese el año de publicación:', editedLibro.anio?.toString());
    editedLibro.anio = anioInput ? parseInt(anioInput) : editedLibro.anio;
    const valoracionInput = prompt('Ingrese la valoración:', editedLibro.valoracion?.toString());
    editedLibro.valoracion = valoracionInput ? parseFloat(valoracionInput) : editedLibro.valoracion;
    editedLibro.pais = prompt('Ingrese el país:', editedLibro.pais) || editedLibro.pais;
    editedLibro.sexo = prompt('Ingrese el sexo (masculino/femenino):', editedLibro.sexo) || editedLibro.sexo;
    editedLibro.genero = prompt('Ingrese el género (ej. Ficción, Ciencia, etc.):', editedLibro.genero) || editedLibro.genero;

    // Verificar que todos los campos sean válidos antes de actualizar
    if (!editedLibro.nombre || !editedLibro.autor || !editedLibro.editorial) {
        alert('Todos los campos deben ser completos.');
        return;  // No continuar si algún campo es vacío
    }

    // Actualiza el estado local
    const updatedLibros = [...libros];
    updatedLibros[index] = editedLibro;
    setLibros(updatedLibros);

    // Se asegurade que el resto de los campos están definidos, sino asignar valores por defecto
    const libroAActualizar: Partial<ILibro> = {
        nombre: editedLibro.nombre,
        autor: editedLibro.autor,
        editorial: editedLibro.editorial,
        anio: editedLibro.anio ?? "",  // Si es undefined, asignar un valor vacío o un valor por defecto
        valoracion: editedLibro.valoracion ?? "",  // Lo mismo para otros campos
        pais: editedLibro.pais ?? "",
        sexo: editedLibro.sexo ?? "",
        genero: editedLibro.genero ?? "",
    };

    // Actualiza el libro en Firestore
    try {
        await actualizarLibro(editedLibro.id, libroAActualizar);
    } catch (error) {
        console.error("Error actualizando el libro:", error);
    }

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
