require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    siteTitle: `@hereticmilk`,
    siteTitleAlt: `@hereticmilk`,
    siteDescription: `Блог дизайнера о карьере и жизни среди людей. Личный опыт и полезные материалы об интерфейсах и технологиях`,
    siteLanguage: `ru`,
    siteImage: `/static/banner.jpg`,
    author: `@hereticmilk`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Блог`,
            slug: `/blog`,
          },
          {
            title: `Полезное`,
            slug: `/loot`,
          },
          {
            title: `Автор`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Telegram`,
            url: `https://t.me/hereticmilk`,
          },
          {
            name: `Instagram`,
            url: `https://www.instagram.com/hereticmilk/`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `minimal-blog - @lekoarts/gatsby-theme-minimal-blog`,
        short_name: `minimal-blog`,
        description: `Блог дизайнера о карьере и жизни среди людей. Личный опыт, полезные материалы и уроки.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
