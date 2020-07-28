import React from 'react';
import { FormattedMessage } from 'react-intl';

import withLayout from '../layout';
import Link from '../components/Link';
import Image from '../components/Image';

import '../styles/index.scss';

import Julia from '../images/juliakunz.jpg';

const IndexPage = () => (
  <>
    <div className="hero">
      <div className="wrap">
        <div className="row middle-sm">
          <div className="col-xs-12 col-sm-5">
            <h1>
              <FormattedMessage id="home.Hello" />
            </h1>
            <div className="text-large">
              <FormattedMessage id="home.Welcome" />
            </div>
            <div>
              <a href="#" className="hero-link">
                <FormattedMessage id="home.HeroOne" />
              </a>
            </div>
          </div>
          <div className="col-xs-12 col-sm-5 col-sm-offset-2">
            <img src={Julia} alt="test" />
          </div>
        </div>
      </div>
    </div>
    <div>
      <div className="wrap">
        <div className="row">
          <div className="col-xs-6 col-sm-3">
            <div className="box">
              <h4>
                <FormattedMessage id="home.BA" />
              </h4>
              <FormattedMessage id="home.BAText" />
            </div>
          </div>
          <div className="col-xs-6 col-sm-3">
            <div className="box">
              <h4>
                <FormattedMessage id="home.PM" />
              </h4>
              <FormattedMessage id="home.PMText" />
            </div>
          </div>
          <div className="col-xs-6 col-sm-3">
            <div className="box">
              <h4>
                <FormattedMessage id="home.PO" />
              </h4>
              <FormattedMessage id="home.POText" />
            </div>
          </div>
          <div className="col-xs-6 col-sm-3">
            <div className="box">
              <h4>
                <FormattedMessage id="home.DO" />
              </h4>
              <FormattedMessage id="home.DOText" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <p>
      <a
        href="https://github.com/tomekskuta/gatsby-starter-intl"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FormattedMessage id="home.or learn more" />
      </a>
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">
      <FormattedMessage id="home.Go to page 2" />
    </Link>
  </>
);

const customProps = {
  localeKey: 'home', // same as file name in src/i18n/translations/your-lang/index.js
};

export default withLayout(customProps)(IndexPage);
