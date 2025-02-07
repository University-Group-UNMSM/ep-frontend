'use client';
import './login.scss';
import AuthBackground from '@/app/shared/components/auth-background';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import OcButton from '../../shared/components/oc-button';
import OcInput from '../../shared/components/oc-input/oc-input';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false); // Estado para determinar si el mensaje es de éxito
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      router.push('/paginaprincipal');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <section className="login">
      <form className="login-main gap-3 p-12" onSubmit={handleSubmit}>
        <div className="login-form h-full">
          <div className="login-logo">
            <h2 className="text-3xl font-bold text-[#2563EB]">Emprende +</h2>
          </div>

          <span className="oc-typo-headline-large">Inicia Sesión</span>
          <section className="login-fields oc-gap-large justify-between">
            <label className="login-fields__field oc-gap-medium">
              <span>Email</span>
              <OcInput placeholder="your-email@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label className="login-fields__field oc-gap-medium">
              <span>Contraseña</span>
              <OcInput
                placeholder="**********"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <div className="login-actions oc-gap-medium">
              <OcButton type="submit">Iniciar Sesión</OcButton>
              <Link href="/register">
                <span className="oc-typo-body-small">No tienes cuenta? Registrate aquí</span>
              </Link>
            </div>
          </section>
        </div>
        <AuthBackground src="https://i.postimg.cc/rwvyck9n/login.png" />

        {/* Mensaje de resultado */}
        {error && (
          <div
            className={`absolute left-1/2 top-0 mt-4 -translate-x-1/2 transform rounded p-4 shadow-lg ${
              isSuccess ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
            }`}
          >
            {error}
          </div>
        )}
      </form>
    </section>
  );
}
