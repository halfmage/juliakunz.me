import React from 'react';
import PropTypes from 'prop-types';
import Link from '../Link';
import Langs from '../Langs';

const Header = ({ siteTitle, hideLangs }) => (
  <header className="header">
    <div className="wrap">
      <div className="row middle-xs">
        <div className="center-xs col-xs-12 start-sm col-sm-7">
          <h1 style={{ margin: '1rem 0' }}>
            <Link to="/">{siteTitle}</Link>
          </h1>
        </div>
        <div className="col-xs-12 center-xs end-sm col-sm-5">{!hideLangs && <Langs />}</div>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
  hideLangs: PropTypes.bool,
};

Header.defaultProps = {
  siteTitle: ``,
  hideLangs: false,
};

export default Header;
