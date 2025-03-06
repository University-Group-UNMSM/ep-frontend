import React, { useEffect, useState } from 'react';
import OcButton from '../oc-button';
import RatingComponent from '../rating/page';

interface ModalComponentProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalComponent: React.FC<ModalComponentProps> = ({ isOpen, onClose }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
    } else {
      setTimeout(() => setShowModal(false), 300);
    }
  }, [isOpen]);

  if (!showModal) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`}
    >
      <div
        className={`relative flex h-[90%] w-[90%] transform flex-col overflow-hidden rounded-lg bg-white transition-all duration-300 md:h-[70%] md:w-[50%] md:flex-row ${isOpen ? 'scale-100' : 'scale-95'}`}
      >
        {/* Imagen en el lado izquierdo para pantallas grandes, arriba en móviles */}
        <div className="h-1/2 w-full bg-gray-200 md:h-full md:w-1/2">
          <img
            src="https://blog.estudiocontar.com/wp-content/uploads/2021/04/Emprendimiento-de-proyectos.jpeg"
            alt="Imagen del producto"
            className="h-full w-full object-cover"
          />
        </div>
        {/* Espacio para contenido en el lado derecho */}
        <div className="flex flex-1 flex-col gap-6 p-4 md:w-1/2">
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
          <h2 className="text-lg font-semibold">Portal Esperanza</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, vel accusantium. Molestias molestiae
            corrupti excepturi repellendus necessitatibus at obcaecati consequuntur cupiditate aperiam debitis. Ipsa
            quasi, rerum soluta maiores adipisci quibusdam. Ipsa fuga ut repudiandae aperiam, eos explicabo atque
            voluptatum cupiditate. Itaque minus saepe esse, delectus cum officiis excepturi asperiores at repellendus
            dignissimos ipsa eum fuga quod voluptatibus atque aliquid doloremque.
          </p>
          <OcButton>
            <a
              href={`https://api.whatsapp.com/send?phone=51915736563&text=%C2%A1Hola!%20%F0%9F%98%8A%20Me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20el%20Portal%20Esperanza.%20%C2%BFPodr%C3%ADas%20enviarme%20m%C3%A1s%20informaci%C3%B3n%3F%20%C2%A1Quedo%20atento!`}
              target="_blank"
            >
              Más información
            </a>
          </OcButton>
          <div className="relative flex flex-col gap-2">
            <p className="cursor-pointer">3 ⭐</p>
            <hr />
            <div className="flex">
              <RatingComponent></RatingComponent>
            </div>
          </div>
        </div>
        <div className="absolute left-2 top-2 h-10 w-10">
          <OcButton borderRadius="full" onClick={onClose}>
            X
          </OcButton>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
