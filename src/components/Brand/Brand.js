import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import classes from './Brand.module.css';

function Brand({
  underline,
}) {
  return (
    <StaticQuery
      query={
        graphql`
          query {
            site {
              siteMetadata {
                title,
                url
              }
            }
          }
        `
      }
      render={data => (
        <h1 className={`${classes.header} ${underline ? classes.headerUnderline : ''}`}>
          <a
            href={data.site.siteMetadata.url}
            className={classes.link}
          >
            {data.site.siteMetadata.title}
          </a>
        </h1>
      )}
    />
  );
}

Brand.propTypes = {
  underline: PropTypes.bool,
};

Brand.defaultProps = {
  underline: true,
};

export default Brand;
