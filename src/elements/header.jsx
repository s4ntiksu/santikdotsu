import React, { useState } from 'react';
import classNames from 'classnames';
import * as SolarIconSet from 'solar-icon-set';
import guhcat from '../images/guh.png';
export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(prevState => !prevState);
  };

  return (
    <div>
      <div className="fixed top-0 w-full h-14 bg-[#141714] flex items-center pl-4">
        <div className="mt-1" onClick={toggleMenu}>
          <SolarIconSet.HamburgerMenu color="white" size={32} iconStyle="Linear" />
        </div>
        <h2 className="text-white ml-3 font-google font-bold text-xl cursor-pointer">
          Home
        </h2>
           <a href="https://github.com/s4ntiksu/santikdotsu" alt="Source Code" target="_blank" rel="noreferrer" className="absolute right-3 top-3"> <SolarIconSet.Code color="white" size={32} iconStyle="Linear" /></a>
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
        <div onClick={toggleMenu} className="absolute top-4 right-5 cursor-pointer">
          <SolarIconSet.CloseSquare color="white" size={32} iconStyle="Linear" />
        </div>
        <div className="font-google text-white">
          <h1 className="text-4xl ml-4 mt-1">Menu</h1>
          <div className="mt-32 items-center relative">
<img className="mx-auto rounded-xl w-56" src={guhcat} alt=":)" />
            <p className="text-center p-5">There should be something here, but I do not know what to add there. Maybe silly cats...</p>
          </div>
        </div>
      </div>
    </div>
  );
}