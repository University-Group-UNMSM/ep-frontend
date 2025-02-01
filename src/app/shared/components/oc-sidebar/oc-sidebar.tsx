'use-client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

import MenuItem from './oc-menu-item/oc-menu-item';
import { handleSidebarResize, menuItemData } from './oc-sidebar.constants';
import './oc-sidebar.scss';
import OcIcon from '../oc-icon';
import { AuthService } from '@/auth/services/auth.service';
import { useRouter } from 'next/navigation';

export default function OcSideBar() {
  const [open, setOpen] = useState(false);
  const t = useTranslations('HomePage');
  const logoImage = 'https://i.postimg.cc/28hLspF6/yachay-logo-completo.png';
  const logoImageShort = 'https://i.postimg.cc/Y9r5BnTD/YachayL.png';
  const pathname = usePathname();
  const router = useRouter();
  const authService = new AuthService();

  const handleLogout = () => {
    authService.logout();
    setTimeout(() => {
      router.push('/login');
    }, 2000);
  };

  const handleSetOpen = () => {
    setOpen(false);
  };

  useEffect(() => {
    handleSidebarResize(handleSetOpen);
  }, []);

  return (
    <div className={`sidebar oc-padding-medium oc-gap-xlarge ${open ? 'w-52' : 'w-20'}`}>
      <div className={`sidebar-arrow oc-shape-full ${!open && 'rotate-180'}`} onClick={() => setOpen(!open)}>
        <OcIcon name="arrow_back" fontZize="small" />
      </div>
      <Image
        className="sidebar-logo"
        src={`${!open ? logoImageShort : logoImage}`}
        alt="sidebar-logo"
        width={1200}
        height={500}
        style={{ maxWidth: '100%', height: 'auto' }}
      />
      <section className="oc-gap-large flex flex-col">
        <span className={` ${!open && 'hidden'} sidebar-title-section oc-typo-text-less oc-typo-headline-small`}>
          Menu
        </span>
        <div className="oc-gap-medium oc-typo-text-less flex flex-col">
          {menuItemData.map((item, index) => {
            const isActive = pathname.startsWith(item.pathItem);
            return (
              <MenuItem
                key={index}
                open={open}
                isActived={isActive}
                nameIcon={item.nameIcon}
                pathItem={item.pathItem}
                nameItem={t(`sidebar.menu-item-${item.nameItem}`)}
              />
            );
          })}
        </div>
      </section>
      <hr className="sidebar-hr" />
      <button onClick={handleLogout}>salir</button>
    </div>
  );
}
