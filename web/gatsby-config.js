module.exports = {
  siteMetadata: {
    title: `artbysarah`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@Sage Hogue`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/lady.jpg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "f3lwfyfi",
        dataset: "collage-photos",
        // a token with read permissions is required
        // if you have a private dataset
        token: process.env.MY_SANITY_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Major Mono Display`,
              variants: [`400`, `700`],
            },
            {
              family: `Train One`,
              variants: [`400`, `700`],
            },
          ],
        },
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
