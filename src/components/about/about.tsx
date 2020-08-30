import React from 'react';

import Collaborator, { CollaboratorProps } from '../collaborator/collaborator';
import Footer from '../footer/footer';

import './about.scss';

export default function About() {
  const isSingle = () => Array.isArray(members) && members.length === 1;
  const members: CollaboratorProps[] = [
    {
      id: 4109551,
      name: 'Austin Jackson',
      login: 'au5ton',
      html_url: 'https://github.com/au5ton',
      avatar_url: 'https://avatars0.githubusercontent.com/u/4109551?v=4',
    },
  ];

  return (
    <>
      <h3>Resources</h3>
      <p>
        <a className="button" href="https://github.com/cougargrades">
          Github Organization
        </a>
        &nbsp;
        <a className="button" href="https://cougargrades.github.io/swagger/">
          Public API
        </a>
        &nbsp;
        <a className="button" href="https://github.com/cougargrades/publicdata">
          Public Data
        </a>
      </p>
      <h3>Collaborators</h3>
      <div
        className="collaborators-wrap"
        style={isSingle() ? { justifyContent: 'flex-start' } : {}}
      >
        {Array.isArray(members) &&
          members.map((e: any) => (
            <Collaborator
              key={e.id}
              name={e.name}
              login={e.login}
              html_url={e.html_url}
              avatar_url={e.avatar_url}
            />
          ))}
      </div>
      <h4>Acknowledgement</h4>
      <p>Some other great projects we found inspiration in:</p>
      <ul>
        <li>anex.us/grades/ (author unknown)</li>
        <li>
          AggieScheduler (
          <a href="https://github.com/jake-leland">@jake-leland</a>)
        </li>
        <li>
          Good-Bull-Schedules (
          <a href="https://github.com/SaltyQuetzals">@SaltyQuetzals</a>)
        </li>
      </ul>
      <h4>Notice of Non-Affiliation and Disclaimer</h4>
      <p>
        <em>
          We are not affiliated, associated, authorized, endorsed by, or in any
          way officially connected with University of Houston, or any of its
          subsidiaries or its affiliates. The official University of Houston
          website can be found at http://www.uh.edu. The name “University of
          Houston” as well as related names, marks, emblems and images are
          registered trademarks of their respective owners.
        </em>
      </p>
      <h4>DMCA + Business</h4>
      <p>
        <a
          href="#"
          className="cryptedmail"
          data-name="contact"
          data-domain="cougargrades"
          data-tld="io"
          onClick={(e) => {
            const s = (k: any, v: any) =>
              (e.target as HTMLElement).setAttribute(k, v);
            const g = (k: any) => (e.target as HTMLElement).getAttribute(k);
            s(
              'href',
              `mailto:${g('data-name')}@${g('data-domain')}.${g('data-tld')}`,
            );
          }}
        ></a>
      </p>
      <h4>License</h4>
      <p>
        This software is{' '}
        <a href="https://github.com/cougargrades/web/blob/master/LICENSE">
          MIT Licensed
        </a>
        .
      </p>
      <Footer hideDisclaimer={true} />
    </>
  );
}
