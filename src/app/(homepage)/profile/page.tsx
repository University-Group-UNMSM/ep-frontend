'use client';

import { useState, useEffect, SetStateAction } from 'react';
import { useRouter } from 'next/navigation';
import OcButton from '@/app/shared/components/oc-button';
import myprojects from '@/data/myprojects';

export default function Profile() {
  const router = useRouter();
  const [projects, setProjects] = useState(myprojects);
  const [isModalOpen, setModalOpen] = useState(false);
  const [newProject, setNewProject] = useState({
    name: '',
    description: '',
    image: '',
    investmentAmount: '',
  });
  const [selectedProject, setSelectedProject] = useState<{
    id: number;
    name: string;
    description: string;
    image: string;
    investmentAmount: string;
  } | null>(null); // State for the clicked project
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    }
  }, []);

  if (!localStorage.getItem('token')) return null;

  const handleAddProject = () => {
    if (!newProject.name || !newProject.description || !newProject.investmentAmount) {
      setError('Por favor, completa todos los campos obligatorios.');
      return;
    }

    setProjects([...projects, { id: projects.length + 1, ...newProject }]);
    setModalOpen(false);
    setNewProject({ name: '', description: '', image: '', investmentAmount: '' });
    setError('');
  };

  const handleCancel = () => {
    setNewProject({ name: '', description: '', image: '', investmentAmount: '' });
    setModalOpen(false);
    setError('');
  };

  const openProjectModal = (project: {
    id: number;
    name: string;
    description: string;
    image: string;
    investmentAmount: string;
  }) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="m-auto max-w-5xl bg-gray-100 p-6">
      <div className="flex items-center justify-center space-x-6 rounded-xl bg-white p-6 shadow">
        <img
          src="https://media.licdn.com/dms/image/v2/C4E03AQGdvup7xrzNug/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1663908551151?e=1744848000&v=beta&t=zLtKvTaN0qXmr3oDFTZ4j8bTDE3obJMlYMoeW459Xb4"
          alt="Profile Picture"
          className="w-296 h-296 rounded-full"
        />
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">Ashel Vasquez</h2>
          <p className="text-gray-500">ashelvasquez@aws.com</p>
          <div style={{ width: 381 }}>
            <OcButton onClick={() => console.log('Contact me')}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M 12.011719 2 C 6.5057187 2 2.0234844 6.478375 2.0214844 11.984375 C 2.0204844 13.744375 2.4814687 15.462563 3.3554688 16.976562 L 2 22 L 7.2324219 20.763672 C 8.6914219 21.559672 10.333859 21.977516 12.005859 21.978516 L 12.009766 21.978516 C 17.514766 21.978516 21.995047 17.499141 21.998047 11.994141 C 22.000047 9.3251406 20.962172 6.8157344 19.076172 4.9277344 C 17.190172 3.0407344 14.683719 2.001 12.011719 2 z M 12.009766 4 C 14.145766 4.001 16.153109 4.8337969 17.662109 6.3417969 C 19.171109 7.8517969 20.000047 9.8581875 19.998047 11.992188 C 19.996047 16.396187 16.413812 19.978516 12.007812 19.978516 C 10.674812 19.977516 9.3544062 19.642812 8.1914062 19.007812 L 7.5175781 18.640625 L 6.7734375 18.816406 L 4.8046875 19.28125 L 5.2851562 17.496094 L 5.5019531 16.695312 L 5.0878906 15.976562 C 4.3898906 14.768562 4.0204844 13.387375 4.0214844 11.984375 C 4.0234844 7.582375 7.6067656 4 12.009766 4 z M 8.4765625 7.375 C 8.3095625 7.375 8.0395469 7.4375 7.8105469 7.6875 C 7.5815469 7.9365 6.9355469 8.5395781 6.9355469 9.7675781 C 6.9355469 10.995578 7.8300781 12.182609 7.9550781 12.349609 C 8.0790781 12.515609 9.68175 15.115234 12.21875 16.115234 C 14.32675 16.946234 14.754891 16.782234 15.212891 16.740234 C 15.670891 16.699234 16.690438 16.137687 16.898438 15.554688 C 17.106437 14.971687 17.106922 14.470187 17.044922 14.367188 C 16.982922 14.263188 16.816406 14.201172 16.566406 14.076172 C 16.317406 13.951172 15.090328 13.348625 14.861328 13.265625 C 14.632328 13.182625 14.464828 13.140625 14.298828 13.390625 C 14.132828 13.640625 13.655766 14.201187 13.509766 14.367188 C 13.363766 14.534188 13.21875 14.556641 12.96875 14.431641 C 12.71875 14.305641 11.914938 14.041406 10.960938 13.191406 C 10.218937 12.530406 9.7182656 11.714844 9.5722656 11.464844 C 9.4272656 11.215844 9.5585938 11.079078 9.6835938 10.955078 C 9.7955938 10.843078 9.9316406 10.663578 10.056641 10.517578 C 10.180641 10.371578 10.223641 10.267562 10.306641 10.101562 C 10.389641 9.9355625 10.347156 9.7890625 10.285156 9.6640625 C 10.223156 9.5390625 9.737625 8.3065 9.515625 7.8125 C 9.328625 7.3975 9.131125 7.3878594 8.953125 7.3808594 C 8.808125 7.3748594 8.6425625 7.375 8.4765625 7.375 z"></path>
              </svg>
              <a href="https://wa.link/qpkgti" target="_blank">
                Contáctame
              </a>
            </OcButton>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-md font-bold">Proyectos</span>
          <div className="w-32">
            <OcButton onClick={() => setModalOpen(true)}>
              <span className="material-symbols-outlined font-semibold">add</span>
              <span className="text-sm font-semibold">Agregar</span>
            </OcButton>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="cursor-pointer overflow-hidden rounded-lg bg-white shadow"
              onClick={() => openProjectModal(project)}
            >
              <img src={project.image} alt={project.name} className="h-40 w-full object-cover" />
              <div className="p-4">
                <h4 className="text-sm font-semibold">{project.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Project Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-96 rounded-lg bg-white p-6">
            <h2 className="mb-4 text-lg font-semibold">Crear un nuevo proyecto</h2>
            {error && <p className="mb-4 text-sm text-red-500">{error}</p>}
            <div className="space-y-4">
              {/* Form fields */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-semibold">
                  Nombre
                </label>
                <input
                  type="text"
                  placeholder="Nombre"
                  className="w-full rounded border p-2"
                  value={newProject.name}
                  onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="description" className="text-sm font-semibold">
                  Descripción
                </label>
                <textarea
                  placeholder="Descripción"
                  className="w-full resize-none rounded border p-2"
                  style={{ width: '100%', height: '80px' }}
                  value={newProject.description}
                  onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                ></textarea>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="image" className="text-sm font-semibold">
                  URL de la imagen
                </label>
                <input
                  type="text"
                  placeholder="URL de la imagen"
                  className="w-full rounded border p-2"
                  value={newProject.image}
                  onChange={(e) => setNewProject({ ...newProject, image: e.target.value })}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="investmentAmount" className="text-sm font-semibold">
                  Inversión necesaria
                </label>
                <input
                  type="number"
                  placeholder="Inversión necesaria"
                  className="w-full rounded border p-2"
                  value={newProject.investmentAmount}
                  onChange={(e) => setNewProject({ ...newProject, investmentAmount: e.target.value })}
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button onClick={handleCancel} className="rounded bg-gray-200 px-4 py-2">
                  Cancelar
                </button>
                <button onClick={handleAddProject} className="rounded bg-blue-500 px-4 py-2 text-white">
                  Registrar proyecto
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative flex w-[600px] items-center space-x-4 rounded-lg bg-white p-6">
            <img src={selectedProject.image} alt={selectedProject.name} className="h-48 w-48 rounded-lg object-cover" />
            <div className="flex flex-col justify-between gap-5">
              <h2 className="text-lg font-bold">{selectedProject.name}</h2>
              <p className="text-sm text-gray-500">{selectedProject.description || 'No description'}</p>
              <p className="mt-4 text-sm font-semibold">Inversión necesaria: ${selectedProject.investmentAmount}</p>
              <div className="absolute right-2 top-2 text-gray-500 hover:text-gray-800">
                <OcButton onClick={closeProjectModal}>
                  <span className="material-symbols-outlined font-bold">close</span>
                </OcButton>
              </div>

              <OcButton>
                <a
                  href={`https://api.whatsapp.com/send?phone=51915736563&text=%C2%A1Hola!%20%F0%9F%98%8A%20Me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20el%20${selectedProject.name}.%20%C2%BFPodr%C3%ADas%20enviarme%20m%C3%A1s%20informaci%C3%B3n%3F%20%C2%A1Quedo%20atento!`}
                  target="_blank"
                >
                  Más información
                </a>
              </OcButton>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
