'use client'; // Esto es necesario para que se ejecute el código en el lado del cliente

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link'; // Usar Link de Next.js

const Menu: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      router.push('/');  // Redirige al Login si no está autenticado
    }
  }, [router]);

  return (
    <div className="container mt-5">
      <h2>Menú Principal</h2>
      <ul>
        <li><Link href="/registrar-usuario">Registrar nuevo usuario</Link></li>
        <li><Link href="/registro-tematica">Registro según temática</Link></li>
        <li><Link href="/visualizar">Visualizar lo registrado</Link></li>
        <li><Link href="/">Salir</Link></li>
      </ul>
    </div>
  );
};

export default Menu;
