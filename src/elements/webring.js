import React, { useState } from 'react';
import classNames from 'classnames';
import * as SolarIconSet from 'solar-icon-set';
import WebCards from './webcards';
import '@material/web/all.js'
export default function Webring() {
  const [isWebringOpen, setIsWebringOpen] = useState(false);
  const toggleWebring = () => {
    setIsWebringOpen(!isWebringOpen);
  };

  return (
    <div>
      <div className="fixed bottom-0 w-full h-14 bg-white dark:bg-black z-999 p-5 flex items-center">
        <h2 onClick={toggleWebring} className="text-white ml-3 font-google font-bold text-xl cursor-pointer transition-transform items-center">
          Webring
        </h2>
      </div>
      <div
        className={classNames(
          'fixed backdrop-blur-md left-0 w-full bg-black/85 bottom-0 h-full transition-transform',
          {
            'translate-y-full': !isWebringOpen,
            'translate-y-0': isWebringOpen,
          }
        )}
      >
        <div className="p-5">
          <h1 className="text-white text-4xl font-google">The Webring feed</h1>
          <WebCards />
          <div className="fixed bottom-0">
            <md-filled-button onClick={toggleWebring}>Close</md-filled-button>
          </div>
        </div>
      </div>
    </div>
  );
}