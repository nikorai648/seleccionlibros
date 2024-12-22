import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Menu from './Menu';
import RegistroTematica from './RegistroTematica';
import Visualizar from './Visualizar';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/registro-tematica" element={<RegistroTematica />} />
        <Route path="/visualizar" element={<Visualizar />} />
      </Routes>
    </Router>
  );
};

export default App;
