'use client';
import { useEffect } from 'react';
import './principalpage.scss';

import { useRouter } from 'next/navigation';

export default function PaginaPrincipal() {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem('token'); // Obtener token del localStorage
    if (!token) {
      router.push('/login'); // Si no hay sesión, redirigir a login
    }
  }, []);

  if (!localStorage.getItem('token')) return null;
  return (
    <section>
      <h2>Bienvenido</h2>
    </section>
  );
}
