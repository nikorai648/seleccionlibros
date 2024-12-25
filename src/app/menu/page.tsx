'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Menu: React.FC = () => {
  const router = useRouter();

  // Verificar si el usuario está autenticado
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      router.push('/');  // Si no está autenticado, redirigir a Login
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
