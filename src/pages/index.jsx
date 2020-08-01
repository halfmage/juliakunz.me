import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FormattedMessage } from 'react-intl';
import withLayout from '../layout';

import '../styles/index.scss';

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query {
        julia: file(relativePath: { eq: "juliakunz.jpg" }) {
          name
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={(data) => (
      <>
        <div className="hero">
          <div className="wrap">
            <div className="row center-xs start-sm middle-sm">
              <div className="col-xs-12 col-sm-5 img-container">
                <Img fluid={data.julia.childImageSharp.fluid} alt={data.julia.name} />
              </div>
              <div className="col-xs-12 col-sm-6 col-sm-offset-1">
                <h1>
                  <i class="em-svg em-wave" role="img" aria-label="WAVING HAND SIGN"></i>{' '}
                  <FormattedMessage id="home.Hello" />
                </h1>
                <div className="text-large">
                  <FormattedMessage id="home.Welcome" />
                </div>
                <br />
                <a href="mailto:julia.kunz.de@gmail.com" className="hero-link ">
                  <FormattedMessage id="home.HeroOne" />
                </a>
                <span style={{ opacity: '.75' }}>julia.kunz.de@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="section wrap">
            <div className="row">
              <div className="col-xs-12 center-xs col-sm-8 col-sm-offset-2">
                <h2 className="headline" id="services">
                  <FormattedMessage id="home.ServiceHeadline" />
                </h2>
                <p>
                  <FormattedMessage id="home.ServiceSubheadline" />
                </p>
                <br />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-4">
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
                    <FormattedMessage id="home.BA" />
                  </h4>
                  <strong>
                    <FormattedMessage id="home.BAText" />
                  </strong>
                  <FormattedMessage id="home.BATools" />
                </div>
              </div>
              <div className="col-xs-12 col-sm-4">
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
                    <FormattedMessage id="home.PM" />
                  </h4>
                  <strong>
                    <FormattedMessage id="home.PMText" />
                  </strong>
                  <FormattedMessage id="home.PMTools" />
                </div>
              </div>
              <div className="col-xs-12 col-sm-4">
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
                  <strong>
                    <FormattedMessage id="home.DOText" />
                  </strong>
                  <FormattedMessage id="home.DOTools" />
                </div>
              </div>
            </div>
          </div>

          <div className="section wrap">
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <h2 className="subheadline">
                  <FormattedMessage id="home.Languages" />
                </h2>
                <div className="listbox">
                  <i class="em-svg em-uk" role="img" aria-label="UK"></i>
                  <FormattedMessage id="home.English" /> -{' '}
                  <span>
                    <FormattedMessage id="home.Fluent" />
                  </span>
                </div>
                <div className="listbox">
                  <i class="em-svg em-de" role="img" aria-label="DE"></i>
                  <FormattedMessage id="home.German" /> -{' '}
                  <span>
                    <FormattedMessage id="home.CurrentlyB2" />
                  </span>
                </div>
                <div className="listbox">
                  <i class="em-svg em-ru" role="img" aria-label="RU"></i>
                  <FormattedMessage id="home.Russian" /> -{' '}
                  <span>
                    <FormattedMessage id="home.MotherTongue" />
                  </span>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6">
                <h2 className="subheadline">
                  <FormattedMessage id="home.Degrees" />
                </h2>
                <div className="listbox">
                  <i class="em-svg em-school" role="img" aria-label="SCHOOL"></i>
                  <span>
                    Bachelor of Science - <span>Belarusian State Economic University</span>
                  </span>
                </div>
                <div className="listbox">
                  <i class="em-svg em-school" role="img" aria-label="SCHOOL"></i>
                  <span>
                    Diploma in Project Management - <span>Alison</span>
                  </span>
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
                  <div>Jan 2018</div>
                  <div className="center">
                    2 <FormattedMessage id="home.Years" />
                  </div>
                  <div>Jan 2020</div>
                </div>
              </div>
              <article className="exp-item col-xs-12 col-sm-8 ">
                <h3>Freshcells GmbH, Düsseldorf, Germany</h3>
                <div>Project Manager / Consultant, January 2018 - January 2020</div>

                <p>
                  <strong>
                    <FormattedMessage id="home.MainTasks" />
                  </strong>
                  <ul>
                    <li>Requirements elaboration, mockups preparation</li>
                    <li>Taking care of a Backlog and proper tickets description</li>
                    <li>
                      Setting up project processes, preparation of weekly reports and invoicing
                    </li>
                    <li>Defined and optimised Project’s Information Structure</li>
                    <li>
                      Defining the governance (access rights, workflows etc.) in Jira and Confluence
                    </li>
                  </ul>
                </p>

                <p>
                  <strong>
                    <FormattedMessage id="home.KeyChallenges" />
                  </strong>
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
                  <strong>
                    <FormattedMessage id="home.References" />
                  </strong>
                  <nav>
                    <a target="_blank" rel="noreferrer" href="https://www.etravel.cz/">
                      https://www.etravel.cz/
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://www.aldiana.com/">
                      https://www.aldiana.com/
                    </a>
                  </nav>
                </p>
              </article>
            </div>

            <div className="row">
              <div className="col-sm-2 center-xs">
                <div className="bubble">
                  <div>Jul 2017</div>
                  <div className="center">
                    4 <FormattedMessage id="home.Months" />
                  </div>
                  <div>Nov 2017</div>
                </div>
              </div>
              <article className="exp-item col-xs-12 col-sm-8 ">
                <h3>OXAGILE, Minsk, Belarus</h3>
                <div>Product Manager / Business Analyst July 2017 - November 2017</div>

                <p>
                  <strong>
                    <FormattedMessage id="home.MainTasks" />
                  </strong>
                  <ul>
                    <li>
                      Taking care of a Backlog, stories DoR state and making sure that team
                      understands all the requirements correctly
                    </li>
                    <li>
                      Planning Sprints, Milestones and all related Team - meetings, including
                      Retrospectives
                    </li>
                    <li>
                      Preparing diverse Reports (Sprints, Budget weekly, Budget forecasts, Budget
                      reports for company)
                    </li>
                    <li>Supporting Team’s satisfaction, supporting the project's documentation</li>
                  </ul>
                </p>

                <p>
                  <strong>
                    <FormattedMessage id="home.KeyChallenges" />
                  </strong>
                  <ul>
                    <li>Complicated technology stack and services used in the project</li>
                    <li>Integration of different LMS (Learning Management Systems)</li>
                    <li>Big feature-set implementation in parallel</li>
                    <li>Big team</li>
                  </ul>
                </p>

                <p>
                  <strong>
                    <FormattedMessage id="home.References" />
                  </strong>
                  <nav>
                    <a target="_blank" rel="noreferrer" href="https://www.proctoru.com/">
                      https://www.proctoru.com
                    </a>
                  </nav>
                </p>
              </article>
            </div>

            <div className="row">
              <div className="col-sm-2 center-xs">
                <div className="bubble">
                  <div>May 2015</div>
                  <div className="center">
                    1 <FormattedMessage id="home.Year" />
                  </div>
                  <div>Apr 2016</div>
                </div>
              </div>
              <article className="exp-item col-xs-12 col-sm-8 ">
                <h3>OCS Innovation Company (OCSICO®), Minsk, Belarus</h3>
                <div>Business Analyst / Product Manager May 2015 - April 2016</div>

                <p>
                  <strong>
                    <FormattedMessage id="home.MainTasks" />
                  </strong>
                  <ul>
                    <li>
                      Analysing incoming RFP, business cases and requirements (reporting system
                      etc.)
                    </li>
                    <li>Taking care of a Backlog and proper tickets description</li>
                    <li>
                      Preparing and supporting all the project-related documentation, such as
                      technical specifications, user manuals etc.
                    </li>
                    <li>
                      Resolving project issues and keeping stakeholders updated with the status
                    </li>
                  </ul>
                </p>

                <p>
                  <strong>
                    <FormattedMessage id="home.KeyChallenges" />
                  </strong>
                  <ul>
                    <li>Connection to SAP BO Database</li>
                    <li>Desktop, IOS and Android apps support for numerous user levels</li>
                    <li>Complicated reporting system on project’s end</li>
                  </ul>
                </p>

                <p>
                  <strong>
                    <FormattedMessage id="home.References" />
                  </strong>
                  <nav>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.trc-solutions.com/assisted-selling-platform/"
                    >
                      https://www.trc-solutions.com/assisted-selling-platform/
                    </a>
                  </nav>
                </p>
              </article>
            </div>

            <div className="row">
              <div className="col-sm-2 center-xs">
                <div className="bubble last">
                  <div>Jun 2012</div>
                  <div className="center">
                    3 <FormattedMessage id="home.Years" />
                  </div>
                  <div>Feb 2015</div>
                </div>
              </div>
              <article className="exp-item col-xs-12 col-sm-8 ">
                <h3>SoftConveyer, Minsk, Belarus</h3>
                <div>Business Analyst / Product Manager June 2012 - February 2015</div>

                <p>
                  <strong>
                    <FormattedMessage id="home.MainTasks" />
                  </strong>
                  <ul>
                    <li>
                      Planning, scheduling and executing all the stages of software development
                    </li>
                    <li>Preparing and supporting project’s documentation and Project Plan</li>
                    <li>
                      Articulating project scope, business stories, preparing WBS for achieving
                      needs and milestones
                    </li>
                    <li>
                      Assessing business implications for each project phase and monitoring progress
                      to meet deadlines, standards and cost targets
                    </li>
                  </ul>
                </p>

                <p>
                  <strong>
                    <FormattedMessage id="home.KeyChallenges" />
                  </strong>
                  <ul>
                    <li>
                      Web-contracting service initiation - from the idea till release to the
                      Norwegian real-estate market
                    </li>
                    <li>Technical restrictions and project scaling</li>
                    <li>Short deadlines and limited resources</li>
                  </ul>
                </p>

                <p>
                  <strong>
                    <FormattedMessage id="home.References" />
                  </strong>
                  <nav>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.trc-solutions.com/assisted-selling-platform/"
                    >
                      https://www.trc-solutions.com/assisted-selling-platform/
                    </a>
                  </nav>
                </p>
              </article>
            </div>
          </div>
        </div>
      </>
    )}
  />
);

const customProps = {
  localeKey: 'home', // same as file name in src/i18n/translations/your-lang/index.js
};

export default withLayout(customProps)(IndexPage);
