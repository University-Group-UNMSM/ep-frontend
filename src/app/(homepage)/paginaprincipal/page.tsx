'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import './principalpage.scss';

import OcInput from '@/app/shared/components/oc-input/oc-input';
import OcButton from '@/app/shared/components/oc-button';
import RatingComponent from '@/app/shared/components/rating/page';
import ModalComponent from '@/app/shared/components/modal-project/page';

export default function PaginaPrincipal() {
  const router = useRouter();
  const [hasToken, setHasToken] = useState<boolean | null>(null);
  const [isModalProjectOpen, setIsModalProjectOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/login');
      } else {
        setHasToken(true);
      }
    }
  }, [router]);

  if (hasToken === null) return null; // Espera hasta verificar el token

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
              <div className="flex flex-col gap-4 rounded-xl bg-white p-4 shadow">
                <div className="flex flex-1 flex-col gap-6">
                  <div className="flex items-center gap-2">
                    <img
                      className="h-9 w-9 rounded-full"
                      src="https://media.licdn.com/dms/image/v2/C4E03AQGdvup7xrzNug/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1663908551151?e=1744848000&v=beta&t=zLtKvTaN0qXmr3oDFTZ4j8bTDE3obJMlYMoeW459Xb4"
                    />
                    <span className="text-black">
                      <a className="font-bold hover:text-blue-600" href="/profile">
                        Ashel Vasquez
                      </a>
                    </span>
                  </div>
                </div>
                <h2 className="">Portal Esperanza</h2>
                <div className="cursor-pointer" onClick={() => setIsModalProjectOpen(true)}>
                  <img
                    className="w-full rounded-xl object-cover"
                    src="https://blog.estudiocontar.com/wp-content/uploads/2021/04/Emprendimiento-de-proyectos.jpeg"
                    alt="Imagen del proyecto"
                  />
                </div>

                <div className="relative flex flex-col gap-2">
                  <p className="cursor-pointer"> 3 ⭐</p>
                  <hr />
                  <div className="flex">
                    <RatingComponent />
                  </div>
                </div>
                <ModalComponent isOpen={isModalProjectOpen} onClose={() => setIsModalProjectOpen(false)} />
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
