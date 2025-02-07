'use client';
import OcButton from '@/app/shared/components/oc-button';
import OcInput from '@/app/shared/components/oc-input/oc-input';
import AuthBackground from '@/app/shared/components/auth-background';
import RegisterRole from '@/app/shared/components/register-role';
import './register.scss';
import Link from 'next/link';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';

export default function Register() {
  const { register } = useAuth();
  const registerImage = 'https://i.postimg.cc/6Qn1LTw8/register.png';

  const [role, setRole] = useState<'entrepreneur' | 'investor' | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false); // Estado para determinar el tipo de mensaje
  const router = useRouter();
  const handleRoleChange = (role: 'entrepreneur' | 'investor' | null) => {
    setRole(role);
  };
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!role) {
      alert('Por favor, selecciona un rol.');
      return;
    }

    try {
      setIsLoading(true);
      await register(form.name, form.email, form.password, form.phone, role);
      setIsLoading(false);
      alert('Registro exitoso. Ahora inicia sesión.');
      router.push('/login');
    } catch (error) {
      console.error('Error al registrar', error);
      alert('Error al registrarse. Inténtalo de nuevo.');
    }
  };
  return (
    <section className="register">
      <form className="register-main" onSubmit={handleSubmit}>
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
                  <OcInput name="name" onChange={handleChange} value={form.name} type="text" placeholder="Jose Alata" />
                </label>
              </div>
              <div className="row oc-gap-medium flex">
                <label className="register-fields__field oc-gap-medium">
                  <span>Celular</span>
                  <OcInput name="phone" onChange={handleChange} value={form.phone} type="text" placeholder="21545556" />
                </label>
              </div>
              <div>
                <label className="register-fields__field oc-gap-medium">
                  <span>Correo</span>
                  <OcInput
                    name="email"
                    onChange={handleChange}
                    value={form.email}
                    type="email"
                    placeholder="jose@dominio.com"
                  />
                </label>
              </div>

              <div className="row oc-gap-medium flex">
                <label className="register-fields__field oc-gap-medium">
                  <span>Contraseña</span>
                  <OcInput
                    name="password"
                    onChange={handleChange}
                    value={form.password}
                    type="password"
                    placeholder="********"
                  />
                </label>
              </div>
            </div>

            <div className="register-actions">
              <OcButton type={'submit'}>Registrar</OcButton>
              <Link href="/login">
                <span className="oc-typo-body-small">ya tienes una cuenta? Inicia aquí</span>
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
