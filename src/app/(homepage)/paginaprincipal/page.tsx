'use client';
import { useEffect } from 'react';
import './principalpage.scss';

import { useRouter } from 'next/navigation';
import OcInput from '@/app/shared/components/oc-input/oc-input';
import OcButton from '@/app/shared/components/oc-button';

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
      <div className="container mx-auto max-w-5xl">
        <div className="mb-6 rounded-xl bg-blue-600 p-6 text-white">
          <h1 className="text-2xl font-bold">¡Bienvenido emprendedor!</h1>
          <p>Conéctate con otros emprendedores e inversores para hacer crecer tu red y tu negocio.</p>
        </div>

        <div className="flex gap-6">
          <div className="flex-1">
            <div className="space-y-4">
              <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow">
                <img
                  className="h-60 w-60 rounded-xl object-cover"
                  src="https://blog.estudiocontar.com/wp-content/uploads/2021/04/Emprendimiento-de-proyectos.jpeg"
                  alt="Imagen del proyecto"
                />
                <div className="flex flex-1 flex-col gap-6">
                  <h2 className="text-xl font-bold">Portal Esperanza</h2>
                  <div className="flex items-center gap-2">
                    <img
                      className="h-6 w-6 rounded-full"
                      src="https://media.licdn.com/dms/image/v2/C4E03AQGdvup7xrzNug/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1663908551151?e=1744848000&v=beta&t=zLtKvTaN0qXmr3oDFTZ4j8bTDE3obJMlYMoeW459Xb4"
                    />
                    <span className="text-gray-500">
                      <a className="hover:text-blue-600" href="/profile">
                        Ashel Vasquez
                      </a>
                    </span>
                  </div>
                  <OcButton>Ver más +</OcButton>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow">
                <img
                  className="h-60 w-60 rounded-xl object-cover"
                  src="https://blog.estudiocontar.com/wp-content/uploads/2021/04/Emprendimiento-de-proyectos.jpeg"
                  alt="Imagen del proyecto"
                />
                <div className="flex flex-1 flex-col gap-6">
                  <h2 className="text-xl font-bold">Portal Esperanza</h2>
                  <div className="flex items-center gap-2">
                    <img
                      className="h-6 w-6 rounded-full"
                      src="https://media.licdn.com/dms/image/v2/C4E03AQGdvup7xrzNug/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1663908551151?e=1744848000&v=beta&t=zLtKvTaN0qXmr3oDFTZ4j8bTDE3obJMlYMoeW459Xb4"
                    />
                    <span className="text-gray-500">Ashel Vasquez</span>
                  </div>
                  <OcButton>Ver más +</OcButton>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow">
                <img
                  className="h-60 w-60 rounded-xl object-cover"
                  src="https://blog.estudiocontar.com/wp-content/uploads/2021/04/Emprendimiento-de-proyectos.jpeg"
                  alt="Imagen del proyecto"
                />
                <div className="flex flex-1 flex-col gap-6">
                  <h2 className="text-xl font-bold">Portal Esperanza</h2>
                  <div className="flex items-center gap-2">
                    <img
                      className="h-6 w-6 rounded-full"
                      src="https://media.licdn.com/dms/image/v2/C4E03AQGdvup7xrzNug/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1663908551151?e=1744848000&v=beta&t=zLtKvTaN0qXmr3oDFTZ4j8bTDE3obJMlYMoeW459Xb4"
                    />
                    <span className="text-gray-500">Ashel Vasquez</span>
                  </div>
                  <OcButton>Ver más +</OcButton>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow">
                <img
                  className="h-60 w-60 rounded-xl object-cover"
                  src="https://blog.estudiocontar.com/wp-content/uploads/2021/04/Emprendimiento-de-proyectos.jpeg"
                  alt="Imagen del proyecto"
                />
                <div className="flex flex-1 flex-col gap-6">
                  <h2 className="text-xl font-bold">Portal Esperanza</h2>
                  <div className="flex items-center gap-2">
                    <img
                      className="h-6 w-6 rounded-full"
                      src="https://media.licdn.com/dms/image/v2/C4E03AQGdvup7xrzNug/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1663908551151?e=1744848000&v=beta&t=zLtKvTaN0qXmr3oDFTZ4j8bTDE3obJMlYMoeW459Xb4"
                    />
                    <span className="text-gray-500">Ashel Vasquez</span>
                  </div>
                  <OcButton>Ver más +</OcButton>
                </div>
              </div>
            </div>{' '}
            <div className="space-y-4">
              <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow">
                <img
                  className="h-60 w-60 rounded-xl object-cover"
                  src="https://blog.estudiocontar.com/wp-content/uploads/2021/04/Emprendimiento-de-proyectos.jpeg"
                  alt="Imagen del proyecto"
                />
                <div className="flex flex-1 flex-col gap-6">
                  <h2 className="text-xl font-bold">Portal Esperanza</h2>
                  <div className="flex items-center gap-2">
                    <img
                      className="h-6 w-6 rounded-full"
                      src="https://media.licdn.com/dms/image/v2/C4E03AQGdvup7xrzNug/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1663908551151?e=1744848000&v=beta&t=zLtKvTaN0qXmr3oDFTZ4j8bTDE3obJMlYMoeW459Xb4"
                    />
                    <span className="text-gray-500">Ashel Vasquez</span>
                  </div>
                  <OcButton>Ver más +</OcButton>
                </div>
              </div>
            </div>{' '}
            <div className="space-y-4">
              <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow">
                <img
                  className="h-60 w-60 rounded-xl object-cover"
                  src="https://blog.estudiocontar.com/wp-content/uploads/2021/04/Emprendimiento-de-proyectos.jpeg"
                  alt="Imagen del proyecto"
                />
                <div className="flex flex-1 flex-col gap-6">
                  <h2 className="text-xl font-bold">Portal Esperanza</h2>
                  <div className="flex items-center gap-2">
                    <img
                      className="h-6 w-6 rounded-full"
                      src="https://media.licdn.com/dms/image/v2/C4E03AQGdvup7xrzNug/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1663908551151?e=1744848000&v=beta&t=zLtKvTaN0qXmr3oDFTZ4j8bTDE3obJMlYMoeW459Xb4"
                    />
                    <span className="text-gray-500">Ashel Vasquez</span>
                  </div>
                  <OcButton>Ver más +</OcButton>
                </div>
              </div>
            </div>{' '}
            <div className="space-y-4">
              <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow">
                <img
                  className="h-60 w-60 rounded-xl object-cover"
                  src="https://blog.estudiocontar.com/wp-content/uploads/2021/04/Emprendimiento-de-proyectos.jpeg"
                  alt="Imagen del proyecto"
                />
                <div className="flex flex-1 flex-col gap-6">
                  <h2 className="text-xl font-bold">Portal Esperanza</h2>
                  <div className="flex items-center gap-2">
                    <img
                      className="h-6 w-6 rounded-full"
                      src="https://media.licdn.com/dms/image/v2/C4E03AQGdvup7xrzNug/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1663908551151?e=1744848000&v=beta&t=zLtKvTaN0qXmr3oDFTZ4j8bTDE3obJMlYMoeW459Xb4"
                    />
                    <span className="text-gray-500">Ashel Vasquez</span>
                  </div>
                  <OcButton>Ver más +</OcButton>
                </div>
              </div>
            </div>
          </div>

          <div className="w-60 space-y-6">
            <div className="rounded-xl bg-white p-4 shadow">
              <h3 className="mb-2 text-lg font-semibold">Encuentra emprendedores</h3>
              <div className="relative">
                <OcInput type="text" placeholder="Buscar" />
                <button className="absolute right-2 top-2 text-blue-500">🔍</button>
              </div>
            </div>

            <div className="rounded-xl bg-white p-4 shadow">
              <h3 className="mb-2 text-lg font-semibold">Eventos</h3>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="text-blue-500">
                    Startup Pitch Night
                  </a>
                  <p className="text-sm text-gray-500">June 15, 2023 - Virtual</p>
                </li>
                <li>
                  <a href="#" className="text-blue-500">
                    Investor Meetup
                  </a>
                  <p className="text-sm text-gray-500">June 22, 2023 - New York</p>
                </li>
                <li>
                  <a href="#" className="text-blue-500">
                    Tech Innovation Summit
                  </a>
                  <p className="text-sm text-gray-500">July 5, 2023 - San Francisco</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
