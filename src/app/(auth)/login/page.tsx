'use client';
import './login.scss';
import AuthBackground from '@/auth/components/auth-background';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AuthService } from '../../../auth/services/auth.service';
import OcButton from '../../shared/components/oc-button';
import OcInput from '../../shared/components/oc-input/oc-input';
import { useRouter } from 'next/navigation';

export default function Login() {
  const t = useTranslations('Login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(''); // Estado para el mensaje
  const [isSuccess, setIsSuccess] = useState(false); // Estado para determinar si el mensaje es de éxito
  const authService = new AuthService();
  const router = useRouter();

  useEffect(() => {
    localStorage.removeItem('authToken');
  }, []);
  const handleLogin = async () => {
    const result = await authService.login(email, password);

    if (result.token) {
      setMessage('Login successful! Redirecting...'); // Mensaje de éxito
      setIsSuccess(true);
      // Redirige a la página después de un breve retraso
      setTimeout(() => {
        router.push('/mycourses');
      }, 2000); // Ajusta el tiempo según lo necesites
    } else {
      setMessage(result.message || 'Login failed. Please try again.'); // Mensaje de error
      setIsSuccess(false);
    }

    // Ocultar el mensaje después de 3 segundos
    setTimeout(() => {
      setMessage('');
    }, 3000);
  };

  return (
    <section className="login">
      <form className="login-main gap-3 p-12" onSubmit={(e) => e.preventDefault()}>
        <div className="login-form h-full">
          <div className="login-logo">
            <h2 className="text-3xl font-bold text-[#2563EB]">Emprende +</h2>
          </div>

          <span className="oc-typo-headline-large">Inicia Sesión</span>
          <section className="login-fields oc-gap-large justify-between">
            <label className="login-fields__field oc-gap-medium">
              <span>{t('fields.email')}</span>
              <OcInput placeholder="your-email@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label className="login-fields__field oc-gap-medium">
              <span>{t('fields.password')}</span>
              <OcInput
                placeholder="**********"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <div className="login-actions oc-gap-medium">
              <OcButton onClick={handleLogin}>Iniciar Sesión</OcButton>
              <Link href="/register">
                <span className="oc-typo-body-small">No tienes cuenta? Registrate aquí</span>
              </Link>
            </div>
          </section>
        </div>
        <AuthBackground src="https://i.postimg.cc/rwvyck9n/login.png" />

        {/* Mensaje de resultado */}
        {message && (
          <div
            className={`absolute left-1/2 top-0 mt-4 -translate-x-1/2 transform rounded p-4 shadow-lg ${
              isSuccess ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
            }`}
          >
            {message}
          </div>
        )}
      </form>
    </section>
  );
}
