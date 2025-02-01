import Image from 'next/image';

import OcIcon from '../oc-icon';
import OcInput from '../oc-input/oc-input';
import './oc-header.scss';
import OcTheme from '../oc-theme';
interface HeaderProps {}

export default function Header({}: Readonly<HeaderProps>) {
  const profileImage = 'https://i.postimg.cc/zGjQTDpx/photo-Profile.png';
  return (
    <header className="header oc-padding-x-xxlarge flex h-16 items-center justify-between">
      <OcInput nameIcon="search" placeholder="Buscar"></OcInput>
      <div>
        <div className="oc-gap-large header-actions flex items-center">
          <OcTheme></OcTheme>
          <button className="header-button oc-shape-full oc-typo-text-base">
            <OcIcon name="shopping_cart"></OcIcon>
          </button>
          <button className="header-button oc-shape-full oc-typo-text-base">
            <OcIcon name="notifications"></OcIcon>
          </button>
          <button className="header-button oc-shape-full w-8 overflow-hidden">
            <Image
              src={profileImage}
              alt="sidebar-logo"
              width={1200}
              height={500}
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </button>
        </div>
      </div>
    </header>
  );
}
