module.exports = {
  siteMetadata: {
    title: `Julia Kunz`,
    description: `I help companies and agencies to successfully manage their projects, maintain documentations and analyse business.`,
    author: `@halfmage`,
    keywords: [`gatsby`, `application`, `react`],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Julia Kunz`,
        short_name: `juliakunz`,
        start_url: `/`,
        background_color: `#3182CE`,
        theme_color: `#3182CE`,
        display: `minimal-ui`,
        icon: `src/images/julia-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
