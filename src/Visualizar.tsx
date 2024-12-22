import React, { useState, useEffect } from 'react';

const Visualizar: React.FC = () => {
  const [tematicas, setTematicas] = useState<any[]>([]);

  useEffect(() => {
    const temas = JSON.parse(localStorage.getItem('tematicas') || '[]');
    setTematicas(temas);
  }, []);

  return (
    <div className="container mt-5">
      <h2>Temáticas Registradas</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          {tematicas.map((tematica, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{tematica.nombre}</td>
              <td>{tematica.descripcion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Visualizar;
