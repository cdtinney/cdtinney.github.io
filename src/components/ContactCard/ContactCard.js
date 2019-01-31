import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import { StaticQuery, graphql } from 'gatsby';

import contactCardStyles from './ContactCard.module.css';

function ContactCard({ data }) {
  return (
    <div className={contactCardStyles.container}>
      <div className={contactCardStyles.container__social}>
        <a
          title={`${data.site.siteMetadata.social.github} on GitHub`}
          href={`https://github.com/${data.site.siteMetadata.social.github}`}
          aria-label="GitHub profile"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className={contactCardStyles.icon}
            size="lg"
          />
        </a>
        <a
          title={`${data.site.siteMetadata.social.linkedin} on LinkedIn`}
          href={`https://linkedin.com/in/${data.site.siteMetadata.social.linkedin}`}
          aria-label="LinkedIn profile"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className={contactCardStyles.icon}
            size="lg"
          />
        </a>
      </div>
      <div className={contactCardStyles.container__email}>
        <FontAwesomeIcon
          icon={faEnvelope}
          className={contactCardStyles.icon}
        />
        <a
          href={`mailto:${ data.site.siteMetadata.contact.email }`}
        >
          { data.site.siteMetadata.contact.displayedEmail }
        </a>
      </div>
      <div className={contactCardStyles.container__resume}>
        <span>hire me -</span>
        <a
          href={data.site.siteMetadata.contact.resumeUrl}
          className={contactCardStyles.container__resume__link}
        >
          here's my resume
        </a>
      </div>
    </div>
  );
}

export default function ContactCardWithData() {
  return (
    <StaticQuery
      query={
        graphql`
          query {
            site {
              siteMetadata {
                contact {
                  name,
                  email,
                  displayedEmail,
                  resumeUrl,
                },
                social {
                  github,
                  linkedin,
                }
              }
            }
          }
        `
      }
      render={data => <ContactCard data={data} />}
    />
  );
}
