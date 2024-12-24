// src/app/page.tsx

import 'bootstrap/dist/css/bootstrap.min.css';  // Asegúrate de mantener la importación de Bootstrap
import Login from './Login';  // Ajusta la ruta si el componente Login está en otro directorio

export default function Home() {
  return (
    <main>
      <h1>Iniciar Sesión</h1> {/* Puedes modificar el título según lo que desees mostrar */}
      <Login />  {/* Aquí solo renderizas el componente Login */}
    </main>
  );
}
