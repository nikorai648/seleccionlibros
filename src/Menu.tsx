import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Menu: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [navigate]);

  return (
    <div className="container mt-5">
      <h2>Menú Principal</h2>
      <ul>
        <li><Link to="/registrar-usuario">Registrar nuevo usuario</Link></li>
        <li><Link to="/registro-tematica">Registro según temática</Link></li>
        <li><Link to="/visualizar">Visualizar lo registrado</Link></li>
        <li><Link to="/">Salir</Link></li>
      </ul>
    </div>
  );
};

export default Menu;
