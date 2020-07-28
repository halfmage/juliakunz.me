import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';
import Julia from '../images/juliakunz-small.jpg';

const Footer = () => (
  <footer className="footer">
    <div className="hero">
      <div className="wrap">
        <div className="row">
          <div className="col-xs-12 col-sm-10 col-sm-offset-1 center-xs">
            <img src={Julia} alt="test" />
            <h3 className="subheadline">
              <FormattedMessage id="home.Footer" />
            </h3>
            <a href="mailto:julia.kunz.de@gmail.com" className="hero-link ">
              <FormattedMessage id="home.HeroOne" />
            </a>
            <div style={{ opacity: '.75', marginTop: '.5rem' }}>julia.kunz.de@gmail.com</div>
          </div>
        </div>
        <br />
        <br />
        <div className="row">
          <div className="col-xs-12 center-xs">
            <Link to="/imprint">
              <FormattedMessage id="home.Imprint" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
