import React, { useState } from 'react';
import * as SolarIconSet from 'solar-icon-set';
import '@material/web/button/text-button.js';
import Link from './link.jsx';

export default function Social() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    const popup = document.getElementById('popup');
    popup.style.animation = 'closePopup 1s';
    popup.addEventListener('animationend', () => {
      setShowPopup(false);
      popup.style.animation = '';
    });
  };

  return (
    <div>
      <button onClick={togglePopup} className="font-google w-32 h-16 p-2 rounded-2xl fixed bottom-5 right-5 bg-[#C9EE9E]">
        Socials
        <svg
          slot="icon"
          viewBox="0 0 48 48"
          className="w-4 h-4 ml-2 inline-block"
        >
          <path d="M9 42q-1.2 0-2.1-.9Q6 40.2 6 39V9q0-1.2.9-2.1Q7.8 6 9 6h13.95v3H9v30h30V25.05h3V39q0 1.2-.9 2.1-.9.9-2.1.9Zm10.1-10.95L17 28.9 36.9 9H25.95V6H42v16.05h-3v-10.9Z" />
        </svg>
      </button>
      {showPopup && (
        <div>
          <div
          onClick={closePopup}
            id="fade-in"
            className="bg-black/50 w-full top-0 fixed h-full left-1/2 transform w-full -translate-x-1/2 p-2"
          ></div>
          <div
            id="popup"
            className={`bg-[#383d30] w-96 max-sm:w-full max-sm:h-full h-72 fixed top-[40%] max-sm:top-[50%] left-1/2 transform -translate-x-1/2 p-4 rounded-[25px] justify-center items-center ${showPopup ? 'show' : ''}`}
          >
            <SolarIconSet.CloseCircle
              color="#C9EE9E"
              size={30}
              onClick={closePopup}
              className="absolute left-5"
            />
            <h3 className="text-white text-center font-bold text-2xl font-google">Socials</h3>
<div className="flex  w-full p-2 justify-center">
<Link />
</div>

          </div>
        </div>
      )}
    </div>
  );
}