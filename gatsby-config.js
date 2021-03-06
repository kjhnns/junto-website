const website = require('./config/website')
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const pathPrefix = website.pathPrefix === `/` ? `` : website.pathPrefix

module.exports = {
  pathPrefix: website.pathPrefix,
  siteMetadata: {
    pathPrefix,
    siteUrl: website.url + pathPrefix,
    title: website.title,
    titleTemplate: website.titleTemplate,
    description: website.description,
    image: website.image,
    siteLanguage: website.siteLanguage,
    headline: website.headline,
    author: website.author,
    twitter: website.twitter,
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
    {
      resolve: `gatsby-plugin-lodash`,
      options: {
        disabledFeatures: [`shorthands`, `cloning`, `currying`],
      },
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: website.title,
        short_name: website.shortName,
        description: website.description,
        start_url: `${pathPrefix}/dashboard`,
        background_color: website.backgroundColor,
        theme_color: website.themeColor,
        display: `standalone`,
        icon: website.favicon,
        icon_options: {
          purpose: `maskable`,
        },
      },
    },
    `gatsby-plugin-theme-ui`,
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-NGNLF8C',
        // datalayer to be set before GTM is loaded
        // should be a stringified object or object
        // Defaults to null
        defaultDataLayer: { platform: 'juntowebsite' },
      },
    },
  ],
}
