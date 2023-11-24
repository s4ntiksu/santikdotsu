import React from 'react' ;
import Lastfm from './lastfm.jsx';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
     </div>
     <div className="code-space">
    <p className="green">[santik@santiksu] $</p>
    
     <span class="blinking-cursor"></span>
     </div>
     </div>

  <div class="container">
  <h1>Contacts</h1> <FontAwesomeIcon icon="fa-brands fa-vk" style={{color: "#ffffff",}} />
  </div>
  <div class="container">
  <Lastfm />
  </div>
</div>
     </div>
    )
}