// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Gridsome",
  siteDescription: "",
  siteUrl: "",
  templates: {
    BlogPost: "/blog/:title",
  },
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "data/posts/**/*.md",
        typeName: "BlogPost",
      },
    },
  ],
};
