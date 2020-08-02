import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';
import Julia from '../images/juliakunz-small.jpg';

const Footer = () => (
  <footer className="footer">
    <div className="hero">
      <div className="wrap">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-sm-offset-3 center-xs">
            <img src={Julia} alt="test" />
            <h3 className="subheadline">
              <FormattedMessage id="home.Footer" />
            </h3>
            <a href="mailto:julia.kunz.de@gmail.com" className="hero-link ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-mail"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
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
