import React from 'react';
import { Link } from 'react-router-dom';

const Menu: React.FC = () => {
  return (
    <div className="container mt-5">
      <h2>Menú Principal</h2>
      <ul className="list-group">
        <li className="list-group-item"><Link to="/registro-usuario">Registrar nuevo usuario</Link></li>
        <li className="list-group-item"><Link to="/registro-tematica">Registro según temática</Link></li>
        <li className="list-group-item"><Link to="/visualizar">Visualizar lo registrado</Link></li>
        <li className="list-group-item"><Link to="/">Salir</Link></li>
      </ul>
    </div>
  );
};

export default Menu;
