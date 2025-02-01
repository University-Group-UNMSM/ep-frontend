import { useState } from 'react';

import OcIcon from '../oc-icon';
import './oc-theme.scss';

export default function OcTheme() {
  const [iconTheme, setIconTheme] = useState('dark_mode');
  const [isDark, setIsDark] = useState(false);

  function toggleTheme(): void {
    if (isDark) {
      setIconTheme('dark_mode');
      document.body.classList.remove('body-dark');
    } else {
      setIconTheme('light_mode');
      document.body.classList.add('body-dark');
    }
    setIsDark(!isDark);
  }

  return (
    <button className="theme oc-shape-full oc-typo-text-base" onClick={toggleTheme}>
      <OcIcon name={iconTheme} />
    </button>
  );
}
