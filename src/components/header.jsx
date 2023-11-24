import React from 'react' ;
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import IconButton from "@mui/material/IconButton";
import TranslateRoundedIcon from '@mui/icons-material/TranslateRounded';
export default function Header() {
  const { t } = useTranslation();

  return (
    <header>
      <h1>santiksu</h1>
      <IconButton className="lang" sx={{color: "#C9EE9E"}} onClick={() => i18next.changeLanguage(i18next.language === 'en' ? 'ru' : 'en')}><TranslateRoundedIcon /></IconButton>
    </header>
  );
}