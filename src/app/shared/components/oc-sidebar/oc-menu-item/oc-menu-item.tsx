import React from 'react';

import OcIcon from '../../oc-icon';

import './oc-menu-item.scss';
import Link from 'next/link';

interface MenuItemProps {
  isActived: boolean;
  nameIcon: string;
  nameItem: string;
  pathItem: string;
  open?: boolean;
}
export default function MenuItem({ nameIcon, isActived, nameItem, open, pathItem }: Readonly<MenuItemProps>) {
  return (
    <Link
      href={pathItem}
      className={`oc-menu-item ${isActived ? 'oc-menu-item--active' : ''} oc-shape-medium oc-padding-small oc-gap-medium flex ${!open && 'justify-center'} w-full items-center`}
    >
      <OcIcon name={nameIcon} padding="none"></OcIcon>
      <span className={`${!open && 'hidden'} oc-menu-item-span origin-left pr-20 duration-200`}>{nameItem}</span>
    </Link>
  );
}
