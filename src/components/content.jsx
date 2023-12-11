import React from 'react' ;
import Lastfm from './lastfm.jsx';
import { useTranslation } from 'react-i18next';
export default function Content() {
  const { t } = useTranslation();
    return (
     <div className="content"> 
         <div class="parent-container">
     <div className="container">
     
        <img id="avatar" src="./img/santiksu.png" alt="" />
        <div id="text">
        <h1>{t('name')}</h1>
        <p>{t('about')}</p>
        <p>{t('hobby')}</p>
     </div>
     <div className="social-space">
 <a href="https://vk.com/santiksu" target="_blank" rel="noreferrer">
      VK
    </a>
    <a href="https://t.me/mediashiza" target="_blank" rel="noreferrer">
      TG
    </a>
     </div>
     </div>

  <div className="container">
  <h1>Projects</h1>
  </div>
  <div className="container">
  <Lastfm />
  <div className="mini-message"><p>Hello there :)</p></div>
  </div>
</div>
     </div>
    )
}