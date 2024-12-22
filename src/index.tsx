import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa createRoot para React 18
import App from './App'; // Importa el componente principal
import './index.css'; // Opcional: importa estilos globales

// Obtén el elemento donde se montará la aplicación
const rootElement = document.getElementById('root');

// Asegúrate de que el elemento existe antes de renderizar
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('No se encontró el elemento con id "root" en el DOM.');
}
