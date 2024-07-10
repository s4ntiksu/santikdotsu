import React, { useState } from 'react';
import classNames from 'classnames';
import * as SolarIconSet from 'solar-icon-set';

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <div className="fixed top-0 w-full h-14 bg-[#141714] p-5 flex items-center">
        <h2 onClick={toggleMenu} className="text-white ml-3 font-google font-bold text-xl cursor-pointer">
          Home
        </h2>
      </div>
      <div
        className={classNames(
          'fixed backdrop-blur-md left-0 w-full bg-black bottom-0 pt-2 h-full transition-transform',
          {
            'translate-y-full': !showMenu,
            'translate-y-1/2': showMenu,
          }
        )}
      >
        <figure className="bg-white w-8 h-1 rounded-xl mx-auto"></figure>
        <div className="p-5 font-google text-white">
         <h1 className="text-4xl">Menu</h1>
           <md-list-item className="font-google text-white">Apple</md-list-item>
        </div>
      </div>
    </div>
  );
}