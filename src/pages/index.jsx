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
        <div className="row center-xs start-sm middle-sm">
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
            <br />
          </div>
          <div className="col-xs-12 col-sm-5 col-sm-offset-2">
            <img src={Julia} alt="test" />
          </div>
        </div>
      </div>
    </div>
    <div>
      <div className="section wrap">
        <div className="row">
          <div className="col-xs-12 center-xs col-sm-8 col-sm-offset-2">
            <h2 className="headline">
              <FormattedMessage id="home.ServiceHeadline" />
            </h2>
            <p>
              <FormattedMessage id="home.ServiceSubheadline" />
            </p>
            <br />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <div className="box">
              <svg
                viewBox="0 0 24 24"
                width="48"
                height="48"
                stroke="#A3BFFA"
                stroke-width="1"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="css-i6dzq1"
              >
                <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line>
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
              <h4>
                <FormattedMessage id="home.BA" />
              </h4>
              <FormattedMessage id="home.BAText" />
            </div>
          </div>
          <div className="col-xs-12 col-sm-6">
            <div className="box">
              <svg
                viewBox="0 0 24 24"
                width="48"
                height="48"
                stroke="#A3BFFA"
                stroke-width="1"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="css-i6dzq1"
              >
                <line x1="4" y1="21" x2="4" y2="14"></line>
                <line x1="4" y1="10" x2="4" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12" y2="3"></line>
                <line x1="20" y1="21" x2="20" y2="16"></line>
                <line x1="20" y1="12" x2="20" y2="3"></line>
                <line x1="1" y1="14" x2="7" y2="14"></line>
                <line x1="9" y1="8" x2="15" y2="8"></line>
                <line x1="17" y1="16" x2="23" y2="16"></line>
              </svg>
              <h4>
                <FormattedMessage id="home.PM" />
              </h4>
              <FormattedMessage id="home.PMText" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <div className="box">
              <svg
                viewBox="0 0 24 24"
                width="48"
                height="48"
                stroke="#A3BFFA"
                stroke-width="1"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="css-i6dzq1"
              >
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
              </svg>
              <h4>
                <FormattedMessage id="home.PO" />
              </h4>
              <FormattedMessage id="home.POText" />
            </div>
          </div>
          <div className="col-xs-12 col-sm-6">
            <div className="box">
              <svg
                viewBox="0 0 24 24"
                width="48"
                height="48"
                stroke="#A3BFFA"
                stroke-width="1"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="css-i6dzq1"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              <h4>
                <FormattedMessage id="home.DO" />
              </h4>
              <FormattedMessage id="home.DOText" />
            </div>
          </div>
        </div>
      </div>
      <div className="section wrap">
        <div className="row">
          <div className="col-xs-12 center-xs col-sm-8 col-sm-offset-2">
            <h2 className="headline">
              <FormattedMessage id="home.CVHeadline" />
            </h2>
            <p>
              <FormattedMessage id="home.CVSubheadline" />
            </p>
            <br />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-2 center-xs">
            <div className="bubble">
              <div>January 2018</div>
              <div className="center">2 years</div>
              <div>January 2020</div>
            </div>
          </div>
          <article className="exp-item col-xs-12 col-sm-8 ">
            <h3>Freshcells GmbH, Düsseldorf, Germany</h3>
            <div>Project Manager / Consultant, January 2018 - January 2020</div>

            <p>
              <strong>Main tasks</strong>
              <ul>
                <li>Requirements elaboration, mockups preparation</li>
                <li>Taking care of a Backlog and proper tickets description</li>
                <li>Setting up project processes, preparation of weekly reports and invoicing</li>
                <li>Defined and optimised Project’s Information Structure</li>
                <li>
                  Defining the governance (access rights, workflows etc.) in Jira and Confluence
                </li>
              </ul>
            </p>

            <p>
              <strong>Key challenges</strong>
              <ul>
                <li>Global projects upgrade in short deadline with lack of resources</li>
                <li>Limited time for documentation support</li>
                <li>
                  Unforeseen business logic that was missed in the documentation, provided by
                  Customer
                </li>
              </ul>
            </p>

            <p>
              <strong>References</strong>
              <nav>
                <a href="https://www.etravel.cz/">https://www.etravel.cz/</a>
                <a href="https://www.aldiana.com/">https://www.aldiana.com/</a>
              </nav>
            </p>
          </article>
        </div>

        <div className="row">
          <div className="col-sm-2 center-xs">
            <div className="bubble">
              <div>January 2018</div>
              <div className="center">2 years</div>
              <div>January 2020</div>
            </div>
          </div>
          <article className="exp-item col-xs-12 col-sm-8 ">
            <h3>Freshcells GmbH, Düsseldorf, Germany</h3>
            <div>Project Manager / Consultant, January 2018 - January 2020</div>

            <p>
              <strong>Main tasks</strong>
              <ul>
                <li>Requirements elaboration, mockups preparation</li>
                <li>Taking care of a Backlog and proper tickets description</li>
                <li>Setting up project processes, preparation of weekly reports and invoicing</li>
                <li>Defined and optimised Project’s Information Structure</li>
                <li>
                  Defining the governance (access rights, workflows etc.) in Jira and Confluence
                </li>
              </ul>
            </p>

            <p>
              <strong>Key challenges</strong>
              <ul>
                <li>Global projects upgrade in short deadline with lack of resources</li>
                <li>Limited time for documentation support</li>
                <li>
                  Unforeseen business logic that was missed in the documentation, provided by
                  Customer
                </li>
              </ul>
            </p>

            <p>
              <strong>References</strong>
              <nav>
                <a href="https://www.etravel.cz/">https://www.etravel.cz/</a>
                <a href="https://www.aldiana.com/">https://www.aldiana.com/</a>
              </nav>
            </p>
          </article>
        </div>

        <div className="row">
          <div className="col-sm-2 center-xs">
            <div className="bubble last">
              <div>January 2018</div>
              <div className="center">2 years</div>
              <div>January 2020</div>
            </div>
          </div>
          <article className="exp-item col-xs-12 col-sm-8 ">
            <h3>Freshcells GmbH, Düsseldorf, Germany</h3>
            <div>Project Manager / Consultant, January 2018 - January 2020</div>

            <p>
              <strong>Main tasks</strong>
              <ul>
                <li>Requirements elaboration, mockups preparation</li>
                <li>Taking care of a Backlog and proper tickets description</li>
                <li>Setting up project processes, preparation of weekly reports and invoicing</li>
                <li>Defined and optimised Project’s Information Structure</li>
                <li>
                  Defining the governance (access rights, workflows etc.) in Jira and Confluence
                </li>
              </ul>
            </p>

            <p>
              <strong>Key challenges</strong>
              <ul>
                <li>Global projects upgrade in short deadline with lack of resources</li>
                <li>Limited time for documentation support</li>
                <li>
                  Unforeseen business logic that was missed in the documentation, provided by
                  Customer
                </li>
              </ul>
            </p>

            <p>
              <strong>References</strong>
              <nav>
                <a href="https://www.etravel.cz/">https://www.etravel.cz/</a>
                <a href="https://www.aldiana.com/">https://www.aldiana.com/</a>
              </nav>
            </p>
          </article>
        </div>
      </div>
    </div>
  </>
);

const customProps = {
  localeKey: 'home', // same as file name in src/i18n/translations/your-lang/index.js
};

export default withLayout(customProps)(IndexPage);
