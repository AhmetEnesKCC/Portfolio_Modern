module.exports = {
  siteMetadata: {
    title: "AhmetEnesKCC",
    author: "Ahmet Enes Kececi",
    description: "My Website",
    page_components: {
      index: {
        header: {
          main: "Ahmet Enes Kececi",
          sub:
            "Junior front end developer, student of architecture, designer and more...",
        },
      },
      skills: {
        title: "Skills",
        texts: {
          web: {
            title: "Web",
            list: ["HTML5", "CSS3", "Javascript", "React JS"],
          },
          native: {
            title: "Native",
            list: ["React Native", "Android Studio"],
          },
          design: {
            title: "Design",
            list: ["Illustrator", "Photoshop", "Adobe XD"],
          },
        },
      },
      about: {
        title: "About",
        text:
          "Hello. I am Ahmet Enes. I am studying architecture at Istanbul Technical University. I want to be a senior front end developer.Search and learn every day to improve my self.",
      },
      projects: {
        title: "Projects",
        text: {
          buttons: {
            repo: "Repo",
            Page: "Page",
          },
        },
      },
    },
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-postcss",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
