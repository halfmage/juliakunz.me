import React, { useEffect } from 'react';

import detectLocale from './detectLocale';

const Redirect = ({ navigate, pageContext: { redirectPage } }) => {
  useEffect(() => {
    const detected = detectLocale();
    const newUrl = `/${detected}${redirectPage}`;

    localStorage.setItem('language', detected);
    navigate(newUrl);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div />;
};

export default Redirect;
