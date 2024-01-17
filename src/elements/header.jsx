import React, { useState } from 'react';
import '@material/web/iconbutton/icon-button.js';
import * as SolarIconSet from 'solar-icon-set';
import classNames from 'classnames';

const submenus = [
  { id: 1, title: 'Меню' },
];
export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleSubMenuClick = (id) => {
    setActiveSubMenu(id);
  };

  return (
    <div>
   <div className="fixed top-0 w-full h-16 bg-black p-5 flex items-center">
<md-icon-button onClick={toggleMenu}><SolarIconSet.MenuDots color="#FFFFFF" /></md-icon-button>
<h2 className="text-white font-google font-bold text-xl">Home</h2>
</div>
      <div
        className={`fixed top-16 left-0 w-72 bg-black/75 z-9999 p-5 h-full transition-transform ${
          showMenu ? 'translate-x-0' : '-translate-x-full'
        } overflow-y-auto max-h-full`}
      >
        <ul>
          {submenus.map((submenu) => (
            <li key={submenu.id}><span
  className={classNames(activeSubMenu === submenu.id ? 'active' : '', 'text-white')}
  onClick={() => handleSubMenuClick(submenu.id)}
>
  {submenu.title}
</span>

            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}