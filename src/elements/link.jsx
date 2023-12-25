import React from 'react';
import { ReactComponent as VK } from '../icons/VK.svg';
import { ReactComponent as TG } from '../icons/Telegram.svg';
import { ReactComponent as M } from '../icons/mastodon.svg';
import { ReactComponent as GH } from '../icons/github.svg';
import { ReactComponent as V } from '../icons/VOVK.svg';
export default function Link() {
  return(
<div className="flex flex-wrap justify-center items-center">
  <a href="https://vk.com/santiksu" target="_blank" rel="noreferrer" className="flex flex-col active:bg-[#23261E] p-3 rounded-2xl items-center mx-2  w-20 h-28 text-center">
    <VK width="48" height="48" />
    <span className="font-google mt-2 text-white">VK</span>
  </a>
  <a href="https://t.me/mediashiza" target="_blank" rel="noreferrer" className="flex flex-col active:bg-[#23261E] p-3 rounded-2xl items-center mx-2 w-auto h-28 text-center">
    <TG width="48" height="48" />
    <span className="font-google mx-auto mt-2 text-white">TG</span>
  </a>
   <a href="https://mastodon.ml/@santik" target="_blank" rel="noreferrer" className="flex flex-col active:bg-[#23261E] p-3 rounded-2xl items-center mx-2  w-24 h-28 text-center">
    <M width="48" height="48" />
    <span className="font-google mx-auto mt-2 text-white">Mastodon</span>
  </a>
   <a href="https://github.com/s4ntiksu" target="_blank" rel="noreferrer" className="flex flex-col active:bg-[#23261E] p-3 rounded-2xl items-center mx-2 w-20 h-28 text-center">
    <GH width="48" height="48" />
    <span className="font-google mx-auto mt-2 text-white">Github</span>
  </a>
     <a href="https://vepurovk.xyz/sa" target="_blank" rel="noreferrer" className="flex flex-col active:bg-[#23261E] p-3 rounded-2xl items-center mx-2 w-24 h-28 text-center">
    <V width="48" height="48" />
    <span className="font-google mx-auto mt-2 text-white">Vepurovk</span>
  </a>
</div>
    )
}
 

