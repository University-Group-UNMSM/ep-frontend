import Image from 'next/image';
import { useAuth } from '@/hooks/useAuth';
import './oc-header.scss';
import OcButton from '../oc-button';
interface HeaderProps {}

export default function Header({}: Readonly<HeaderProps>) {
  const { logout } = useAuth();
  const profileImage = 'https://i.postimg.cc/zGjQTDpx/photo-Profile.png';
  return (
    <header className="header oc-padding-x-xxlarge flex h-16 items-center justify-between">
      <h2 className="text-3xl font-bold text-[#2563EB]">Emprende +</h2>
      <div>
        <div className="oc-gap-large header-actions flex items-center">
          <button className="header-button oc-shape-full w-8 overflow-hidden">
            <Image
              src={profileImage}
              alt="sidebar-logo"
              width={1200}
              height={500}
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </button>
          <OcButton onClick={logout}> Salir </OcButton>
        </div>
      </div>
    </header>
  );
}
