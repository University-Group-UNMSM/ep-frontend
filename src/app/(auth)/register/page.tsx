'use client';
import OcButton from '@/app/shared/components/oc-button';
import OcInput from '@/app/shared/components/oc-input/oc-input';
import AuthBackground from '@/auth/components/auth-background';
import RegisterRole from '@/auth/components/register-role';
import { useTranslations } from 'next-intl';
import './register.scss';
import Image from 'next/image';
import Link from 'next/link';
import { AuthService } from '../../../auth/services/auth.service'; // Ajusta el camino según sea necesario

import { getFields, groupedFields } from './register.constants';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Register() {
  const t = useTranslations('Register');
  const registerImage = 'https://i.postimg.cc/6Qn1LTw8/register.png';
  const logoImage = 'https://i.postimg.cc/Y9r5BnTD/YachayL.png';
  const authService = new AuthService();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [role, setRole] = useState<'teacher' | 'student' | null>(null);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false); // Estado para determinar el tipo de mensaje
  const router = useRouter();
  const handleRoleChange = (role: 'teacher' | 'student' | null) => {
    setRole(role);
  };
  useEffect(() => {
    localStorage.removeItem('authToken');
  }, []);
  const handleRegister = async () => {
    console.log('resultado', email, password, name, lastName, role);
    const result = await authService.register(email, password, name, lastName, role);

    if (result.userId) {
      console.log('Register success:', result.message);
      setMessage(result.message);
      setIsSuccess(true);
      // Redirige a la página de inicio de sesión después de un breve retraso
      setTimeout(() => {
        router.push('/login'); // Redirige a la página de inicio de sesión
      }, 3000); // Puedes ajustar el tiempo según lo necesites
    } else {
      console.log('Login failed:', result.message);
      setMessage(result.message);
      setIsSuccess(false);
    }

    // Ocultar el mensaje después de 3 segundos
    setTimeout(() => {
      setMessage('');
    }, 3000);
  };

  return (
    <section className="register">
      <form className="register-main" onSubmit={(e) => e.preventDefault()}>
        <AuthBackground src={registerImage} />
        <div className="register-form oc-padding-large">
          <div className="register-logo">
            <h2 className="text-3xl font-bold text-[#2563EB]">Emprende +</h2>
          </div>
          <header className="register-header oc-gap-small">
            <span className="oc-typo-headline-large">Regístrate</span>
            <span className="oc-typo-body-small oc-typo-text-less">¿Cúal es tu función?</span>
          </header>
          <RegisterRole onRoleChange={handleRoleChange} />
          <section className="register-fields oc-gap-large">
            <div className="row oc-gap-medium flex flex-col">
              <div className="row oc-gap-medium flex">
                <label className="register-fields__field oc-gap-medium">
                  <span>Nombre</span>
                  <OcInput onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="Jose Alata" />
                </label>
              </div>
              <div className="row oc-gap-medium flex">
                <label className="register-fields__field oc-gap-medium">
                  <span>Celular</span>
                  <OcInput onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="21545556" />
                </label>
              </div>
              <div>
                <label className="register-fields__field oc-gap-medium">
                  <span>Correo</span>
                  <OcInput onChange={(e) => setEmail(e.target.value)} type="email" placeholder="jose@dominio.com" />
                </label>
              </div>

              <div className="row oc-gap-medium flex">
                <label className="register-fields__field oc-gap-medium">
                  <span>Contraseña</span>
                  <OcInput onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" />
                </label>
              </div>
            </div>

            <div className="register-actions">
              <OcButton onClick={handleRegister}>Registrar</OcButton>
              <Link href="/login">
                <span className="oc-typo-body-small">{t('buttons.hasAccount')}</span>
              </Link>
            </div>
          </section>
        </div>

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
