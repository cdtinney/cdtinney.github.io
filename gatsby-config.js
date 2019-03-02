module.exports = {
  siteMetadata: {
    title: 'colin tinney',
    url: 'https://colintinney.com',
    contact: {
      name: 'Colin Tinney',
      email: 'colintinney@gmail.com',
      displayedEmail: 'colintinney [at] gmail.com',
      resumeUrl: 'https://drive.google.com/open?id=1l5p9B44vyGf0fjST5Tm-I-zXBwQd2GXtUj_RUunx3MU', 
    },
    social: {
      github: 'cdtinney',
      linkedin: 'cdtinney',
      fiveHundredPx: 'colintinney',
    },
  },
  plugins: [
    'gatsby-plugin-eslint',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet', {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/data/posts`,
        name: 'posts',
      },
    },{ 
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [{
          resolve: `gatsby-remark-prismjs`,
        },{
          resolve: `gatsby-remark-images`,
          options: {
            // It's important to specify the maxWidth (in pixels) of
            // the content container as this plugin uses this as the
            // base for generating different widths of each image.
            maxWidth: 590,
            // Wrapper <div> styles.
            wrapperStyle: 'margin: 1rem; ' +
              'box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23); '
          },
        }],
      },
    },
  ],
};
