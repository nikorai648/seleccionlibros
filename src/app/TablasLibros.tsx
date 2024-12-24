'use client'
import { obtenerLibros, eliminarLibro } from "@/Firebase/Promesas";
import { ILibro } from "@/Interfaces/ILibro";
import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useRouter } from "next/navigation";
import { Modal } from 'react-bootstrap';

export const TablaLibros = () => {
  const [libros, setLibros] = useState<ILibro[]>([]);
  const [selectedLibro, setSelectedLibro] = useState<ILibro | null>(null);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const handleObtenerTodo = () => {
    obtenerLibros()
      .then((libros) => {
        setLibros(libros);
      })
      .catch((e) => {
        console.log("Error");
      });
  };

  const handleActualizar = (libro: ILibro) => {
    // Redirigir a la página de edición con el ID del libro
    router.push(`/visualizar/${libro.id}`);
  };

  const handleEliminar = (libro: ILibro) => {
    setSelectedLibro(libro);
    setShowModal(true);
  };

  const confirmarEliminar = () => {
    if (selectedLibro) {
      eliminarLibro(selectedLibro.id)
        .then(() => {
          setLibros(libros.filter((libro) => libro.id !== selectedLibro.id));
          setShowModal(false);
          alert('Libro eliminado');
        })
        .catch((error) => {
          console.error('Error al eliminar', error);
          setShowModal(false);
        });
    }
  };

  const cancelarEliminar = () => {
    setShowModal(false);
  };

  useEffect(() => {
    handleObtenerTodo();
  }, []);

  return (
    <>
      <Table>
        <thead>
          <tr>
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
          {libros.map((libro) => (
            <tr key={libro.id}>
              <td>{libro.nombre}</td>
              <td>{libro.autor}</td>
              <td>{libro.editorial}</td>
              <td>{libro.anio}</td>
              <td>{libro.valoracion}</td>
              <td>{libro.pais}</td>
              <td>{libro.sexo}</td>
              <td>{libro.genero}</td>
              <td>
                <Button variant="warning" onClick={() => handleActualizar(libro)}>
                  Actualizar
                </Button>
                <Button variant="danger" onClick={() => handleEliminar(libro)}>
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal de Confirmación de Eliminación */}
      <Modal show={showModal} onHide={cancelarEliminar}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Eliminación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¿Estás seguro de que deseas eliminar este libro?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cancelarEliminar}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={confirmarEliminar}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TablaLibros;
