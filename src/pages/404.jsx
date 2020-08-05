import React from 'react';
import { Link } from 'gatsby';
import { FormattedMessage } from 'react-intl';

import withLayout from '../layout';

const NotFoundPage = () => (
  <>
    <div className="wrap section">
      <div className="row middle-xs" style={{ minHeight: '33vh' }}>
        <div className="col-xs-12 center-xs">
          <h1 className="headline">
            <FormattedMessage id="error404.NotFound" />
          </h1>
          <p>
            <FormattedMessage id="error404.NoRoute" />
          </p>
          <p>
            <Link to="/">
              <FormattedMessage id="error404.BackHome" />
            </Link>
          </p>
        </div>
      </div>
    </div>
  </>
);

const customProps = {
  localeKey: 'error404',
  hideLangs: true,
};

export default withLayout(customProps)(NotFoundPage);
