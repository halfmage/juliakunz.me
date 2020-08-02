import React, { useContext } from 'react';
import { navigate } from 'gatsby';
import { injectIntl } from 'react-intl';

import languages from '../i18n/languages';
import PageContext from '../layout/PageContext';

const buttonStyle = {};

const LangButton = ({ label, chosen, onClick, icon }) => (
  <div
    onClick={onClick}
    onKeyDown={onClick}
    className="lang-item"
    role="button"
    tabIndex={0}
    style={{
      opacity: chosen ? '1' : '.5',
      ...buttonStyle,
    }}
  >
    <i class={icon} role="img"></i>
  </div>
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
    <div className="lang-switcher">
      {languages.map((language) => (
        <LangButton
          key={language.locale}
          label={language.label}
          icon={language.icon}
          chosen={language.locale === locale}
          onClick={() => handleSetLang(language.locale)}
        />
      ))}
    </div>
  );
};

export default injectIntl(Langs);
