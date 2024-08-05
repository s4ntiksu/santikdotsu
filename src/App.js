import './App.css';
import { useState, useEffect } from 'react';
import Header from './elements/header.jsx';
import santiksu from './images/santiksu.png';
import { ReactComponent as Lastfmlogo } from './icons/lastfm.svg';
import { ReactComponent as VK } from './icons/VK.svg';
import { ReactComponent as TG } from './icons/Telegram.svg';
import { ReactComponent as M } from './icons/mastodon.svg';
import { ReactComponent as GH } from './icons/github.svg';
import { ReactComponent as V } from './icons/VOVK.svg';
import { ReactComponent as O } from './icons/New-Project-8-_89BEADC_.svg';
import Lastfm from './elements/lastfm'
export default function App() {
  const [birthdate] = useState(new Date('2005-11-16'));
  const [ageYears, setAgeYears] = useState(0);

  useEffect(() => {
    const calculateAge = () => {
      const today = new Date();
      const birthDate = new Date(birthdate);
      const timeDiff = today.getTime() - birthDate.getTime();
      const ageInYears = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365.25));

      setAgeYears(ageInYears);
    };

    const interval = setInterval(calculateAge, 100);

    return () => clearInterval(interval);
  }, [birthdate]);

  return (
    <div>
      <Header />
      <figure className="w-80 p-4 bg-[#23261E] h-auto rounded-xl mt-36 mx-auto font-google text-white">
        <h1 className="text-2xl mb-4">About me</h1>
        <div className="flex items-center">
          <img className="rounded-full w-24 mr-4" src={santiksu} alt="Avatar" />
          <div>
            <h3 className="text-lg font-bold">Alexander Timush</h3>
            <p className="text-[#E4E3DD]">Nickname: santiksu</p>
            <p className="text-[#6D7264]">Age: {ageYears} y.o.</p>
          </div>
        </div>
        <div className="mt-4">
          <h1 className="text-2xl">Socials</h1>
          <div className="flex justify-start items-center mt-2 mb-2">
            <a href="https://vk.com/santiksu" target="_blank" rel="noreferrer" className="mr-4">
              <VK width="20" height="20" />
            </a>
            <a href="https://t.me/mediashiza" target="_blank" rel="noreferrer" className="mr-4">
              <TG width="20" height="20" />
            </a>
            <a href="https://mastodon.ml/@santik" target="_blank" rel="noreferrer" className="mr-4">
              <M width="20" height="20" />
            </a>
            <a href="https://github.com/s4ntiksu" target="_blank" rel="noreferrer" className="mr-4">
              <GH width="20" height="20" />
            </a>
            <a href="https://vepurovk.xyz/sa" target="_blank" rel="noreferrer" className="mr-4">
              <V width="20" height="20" />
            </a>
            <a href="https://ovk.to/santik" target="_blank" rel="noreferrer" className="mr-4">
              <O width="20" height="20" />
            </a>
                <a href="https://last.fm/user/s4nt1k" target="_blank" rel="noreferrer" >
          <Lastfmlogo width="20" height="20" />
        </a>
          </div>
        </div>
                <h1 className="text-2xl mt-4 mb-4">I'm listening to</h1>
                <Lastfm />
      </figure>
    </div>
  );
}
