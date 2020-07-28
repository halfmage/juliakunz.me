import React, { useContext } from 'react';
import { navigate } from 'gatsby';
import { injectIntl } from 'react-intl';

import languages from '../i18n/languages';
import PageContext from '../layout/PageContext';

const buttonStyle = {
  padding: '.5rem 1rem',
  margin: '0 0.5rem',
  borderRadius: '4px',
  border: 0,
  cursor: 'pointer',
  fontFamily: 'sans-serif',
  fontSize: '16px',
};

const LangButton = ({ label, chosen, onClick }) => (
  <button
    onClick={onClick}
    style={{
      background: chosen ? '#0B5394' : '#fff',
      color: chosen ? '#fff' : '#0B5394',
      boxShadow: chosen ? '0 2px 8px rgba(0,0,0,.15)' : '0 2px 4px rgba(0,0,0,0)',
      ...buttonStyle,
    }}
  >
    {label}
  </button>
);

const Langs = ({ intl: { locale } }) => {
  const pageContext = useContext(PageContext);

  const handleSetLang = (language) => {
    const { originalPath } = pageContext.page;
    const newPathname = `/${language}${originalPath}`;

    localStorage.setItem('language', language);
    navigate(newPathname);
  };

  if (!pageContext.custom.localeKey) return null;
  return (
    <div>
      {languages.map((language) => (
        <LangButton
          key={language.locale}
          label={language.label}
          chosen={language.locale === locale}
          onClick={() => handleSetLang(language.locale)}
        />
      ))}
    </div>
  );
};

export default injectIntl(Langs);
