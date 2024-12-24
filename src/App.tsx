import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './app/Login';
import Menu from './app/Menu';
import RegistroTematica from './RegistroTematica';
import Visualizar from './Visualizar';
import RegistrarUsuario from './RegistrarUsuario';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/registro-tematica" element={<RegistroTematica />} />
        <Route path="/visualizar" element={<Visualizar />} />
        <Route path="/registrar-usuario" element={<RegistrarUsuario />} /> 
      </Routes>
    </Router>
  );
};

export default App;
