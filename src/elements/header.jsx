import React, { useState } from 'react';
import classNames from 'classnames';
import * as SolarIconSet from 'solar-icon-set';

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(prevState => !prevState);
  };

  return (
    <div>
      <div className="fixed top-0 w-full h-14 bg-[#141714] p-5 flex items-center">
        <div className="mt-1" onClick={toggleMenu}>
          <SolarIconSet.HamburgerMenu color="white" size={32} iconStyle="Linear" />
        </div>
        <h2 className="text-white ml-3 font-google font-bold text-xl cursor-pointer">
          Home
        </h2>
      </div>
      <div
        className={classNames(
          'fixed left-0 w-full bg-black bottom-0 pt-2 h-full transition-transform',
          {
            '-translate-x-full': !showMenu,
            'translate-x-0': showMenu,
          }
        )}
      >
        <div onClick={toggleMenu} className="absolute top-5 right-5 cursor-pointer">
          <SolarIconSet.CloseSquare color="white" size={32} iconStyle="Linear" />
        </div>
        <div className="p-4 font-google text-white">
          <h1 className="text-4xl">Menu</h1>
          <div className="mx-auto mt-32">
            <p className="text-2xl">Source code</p>
            <p className="text-2xl">Donate</p>
          </div>
        </div>
      </div>
    </div>
  );
}