module.exports = {
  siteMetadata: {
    title: `Landis`,
    legalLinks: [
      {
        href: "http://example.com",
        name: ""
      },
      {
        href: "http://example.com",
        name: ""
      },
      {
        href:
          "https://www.consumer.vic.gov.au/library/publications/housing-and-accommodation/buying-and-selling-property/due-diligence-checklist.doc",
        name: ""
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-yaml`,
    `gatsby-transformer-remark`,
    `gatsby-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `src`, path: `${__dirname}/src/` }
    }
  ]
}
