import React, { useState } from 'react';
import '@material/web/iconbutton/icon-button.js';
import classNames from 'classnames';
import * as SolarIconSet from 'solar-icon-set';

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <div className="fixed top-0 w-full h-16 bg-[#141714] p-5 flex items-center">
        <md-icon-button onClick={toggleMenu}>
          <SolarIconSet.MenuDots color="#FFFFFF" />
        </md-icon-button>
        <h2 className="text-white ml-3 font-google font-bold text-xl">Home</h2>
      </div>
      <div
        className={classNames('fixed top-16 left-0 w-72 bg-black/75 z-9999 p-5 h-full transition-transform', {
          'translate-x-0': showMenu,
          '-translate-x-full': !showMenu,
        })}
      >
      <p className="text-white font-google">The menu and everything else is in development :) </p>
      </div>
    </div>
  );
}